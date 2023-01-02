"use strict"    
// #region [ Propy ]
let table_Application = null;
let table_Parameters = null;

// #endregion [ Propy ]
// #region [ Events ]
$(document).ready(function () {
  if(moment(moment()).isAfter(new Date(localStorage.getItem('data_TokenExpire'))))
  window.location.href = "../index.html";
  
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_DeleteApplication('${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` }, width: "10px"});
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_EditApplication('${e.Id}', '${e.Name}', '${e.SalesChannelId}')" data-bs-toggle="modal" data-bs-target="#windowModal"><i class="fa-solid fa-pencil text-danger"></i></a>`}, width: "5px" });
    colunas.push({ title: "ID", data: 'Id' });
    colunas.push({ title: "Application", data: 'Name' });
    colunas.push({ title: "Sales Channel", data: 'SalesChannelName' });

    table_Application = $('#table').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: "https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/application",
            dataSrc: '',
            contentType: "application/json; charset=utf-8"
        },
        autoWidth: false,
        columns: colunas,
        order: [],
        lengthChange: false,
        dom: '<"toolbar">trip',
    });

    $('#windowModal').on('hidden.bs.modal', function (e) {
      $(this)
        .find("input,textarea,select")
           .val('')
           .end();
           $('#content_Parameters').hide();
           $("select").attr('disabled', false);
           $("input").attr('disabled', false); 
           table_Parameters.destroy();
           table_Parameters = null;
    })
    $('div.toolbar').html(`
    <div class='d-flex justify-content-end align-items-center'>
      <div class='d-inline-block'>
        <label>Search</label>
        <input onkeydown="onclick_Search()" id='filter_Search'/>
      </div>
      <button type="button" class="btn btn-success col-3 ml-3 mb-3 d-inline-block" data-bs-toggle="modal" onclick="onclick_New()" data-bs-target="#windowModal">New</button>
    </div>
    `);
});

async function onclick_EditApplication(application_ID, application_Name, salesChannel_ID) {
  await onclick_New()
  $("#input_ID").val(application_ID).attr('disabled', true);
  $('#input_Name').val(application_Name)
  $('#select_Channel').val(salesChannel_ID);
  $('#content_Parameters').show();
  table_ParametersLoad(application_ID)
}

async function onclick_DeleteApplication(Application_ID) {
  const result = await message_Show("delete");
  if(result == true) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/application/${Application_ID}`,
        success : () => (message_Show('success'), table_Application.ajax.reload()),
        error :  () => (message_Show('error')),
    });
  }
}

async function onclick_DeleteParameter(Application_ID, parameter_ID) {
  const result = await message_Show("delete");
  if(result == true) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/application/${Application_ID}/parameter/${parameter_ID}`,
        success : () => (message_Show('success'), table_Parameters.ajax.reload()),
        error :  () => (message_Show('error')),
    });
  }
}

async function onclick_New() {
  if( $('#select_Channel').has('option').length > 0 ) {
    await $.ajax({
      type: "GET",
      url: `https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/salesChannel`,
      dataType: "json",
      success : function (data) {
        let response_Data = data;
        $('#select_Channel').html('<option value="" disabled selected>Select The Merchant Channel</option>')
        response_Data.forEach(element => {
          const optText = `${element.Name}`;
          const optValue = `${element.Id}`;
          $('#select_Channel').append(`<option value="${optValue}">${optText}</option>`)
        });
      },
    });
  }
  $('#windowModal').modal('show');
}

function onclick_Copy(Value) {
  navigator.clipboard.writeText(Value);
  message_Show("copy");
}

function onclick_SaveNewApplication() {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: `https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/application`,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      Id: $('#input_ID').val(),
      Name: $('#input_Name').val(),
      SalesChannelId: $('#select_Channel').val()                        
    }),
    success : () => (message_Show("success"),table_Application.ajax.reload(),$('#windowModal').find('.save').attr('disabled', true),$('#content_Parameters').show(), table_ParametersLoad($('#input_ID').val())),
    error :  () => (message_Show("error")),
  });
}

function onclick_SaveParameter() {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: `https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/application/${$('#input_ID').val()}/parameter`,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      Key: $('#key').val(),
      Value: $('#value').val()
    }),
    success : () => (message_Show("success"),table_Parameters.ajax.reload(),$('#key').val(''),$('#value').val('')),
    error :  () => (message_Show("error")),
});
}

function onclick_Search() {
  table.search($('#filter_Search').val()).draw();
}
// #endregion [ Events ]
// #region [ Methods ]
async function message_Show(state) {
  let result = false;
  if (state === "success") {
    await Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (state === "error") {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (state === "delete") {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    const response = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });
    if (response.isConfirmed) {
      result = true;
    } else if (response.dismiss === Swal.DismissReason.cancel) {
      result = false;
      swalWithBootstrapButtons.fire(
        "Cancelled",
        "Your file is safe :)",
        "error"
      );
    }
  } else if (state === "copy") {
    await Swal.fire({
      icon: "success",
      title: "Copy Success !",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return result;
}

function select_Load() {
  $.ajax({
    type: "GET",
    url: `https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/merchant`,
    dataType: "json",
    success : function (data) {
      let response_Data = data;
      response_Data.forEach(element => {
        const optText = `${element.Name}`;
        const optValue = `${element.Id}`;
        $('#select_Merchant').append(`<option value="${optValue}">${optText}</option>`);
        $('#select_MerchantModal').append(`<option value="${optValue}">${optText}</option>`);
      });
    },
  });
}

function table_ParametersLoad(application_ID) {
  if(table_Parameters == null) {
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_DeleteParameter('${application_ID}','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` }, width: "10px"});
    colunas.push({ title: "Key", data: function (e) { return `${e.Key}`} });
    colunas.push({ title: "Value", data: function (e) { return `<input type="text" class="form-control col-10 d-inline-block input_Parameter" placeholder="Name" id="input_Name" value='${e.Value}' disabled><a href="#" class="col-1"><i class="fa fa-clone" onclick="onclick_Copy('${e.Value}')"></i></a>`} });
  
    table_Parameters = $('#table_Parameters').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: `https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/application/${application_ID}/parameter`,
            dataSrc: '',
            contentType: "application/json; charset=utf-8"
        },
        columns: colunas,
        order: [],
        autoWidth: false,
        responsive: true,
        searching: false,
        lengthChange: false,
    });
  }
  $('#key').val('')
  $('#value').val('')
  $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();

}
// #endregion [ Methods ]