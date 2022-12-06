"use strict"    
// #region [ Propy ]
let table_SalesChannel = null;
let table_Parameters = null;
// #endregion [ Propy ]

// #region [ Events ]
$(document).ready(function () {
  select_Load() 

  $('#windowModal').on('hidden.bs.modal', function (e) {
    $('#form_Merchant')
      .find("input,textarea,select")
         .val('')
         .end();
    $('#content_Parameters').hide();
    $("select").attr('disabled', false);

    if(table_Parameters != null) {
      table_Parameters.destroy();
      table_Parameters = null;
    }
  })
});
// #endregion [ Methods ]
function onclick_EditSalesChannel(channel_Name, application_ID, external_ID) {
  $('#windowModal').show();
  $("#select_MerchantModal").val(`${$('#select_Merchant').val()}`).val();
  $('#select_Channel option:contains(' + channel_Name + ')').attr('selected', 'selected');
  $("#select_Application").val(application_ID);
  $('#external_ID').val(external_ID)
  $("#select_MerchantModal").attr('disabled', true);
  $('#select_Channel').attr('disabled', true);
  $("#select_Application").attr('disabled', true);
  $("#external_ID").attr('disabled', true);
  $('#content_Parameters').show();

  table_ParametersLoad(`${$('#select_Merchant').val()}`, application_ID)
}

function onclick_SaveNewSalesChannel() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${$('#select_MerchantModal').val()}/salesChannel`,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            SalesChannelId: $('#select_Channel').val(),
            ExternalId: $('#external_ID').val(),
            ApplicationId: $('#select_Application').val()
        }),
        success : () => (message_Show("success"), table_SalesChannel.ajax.reload(),$('#content_Parameters').show(),table_ParametersLoad($('#select_MerchantModal').val(),$('#select_Channel').val())),
        error :  () => (message_Show("error")),
    });
}

function onchange_MerchantChannel() {
    if(table_SalesChannel != null)
      table_SalesChannel.destroy();

    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_EditSalesChannel('${e.Name}', ${e.ApplicationId}, '${e.ExternalId}')" data-bs-toggle="modal" data-bs-target="#windowModal"><i class="fa-solid fa-pencil text-danger"></i></a>`}, width: "5px" });
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="message_Show('delete','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` }, width: "5px" });
    colunas.push({ title: "Name", data: function (e) { return `${e.Name}`} });
    colunas.push({ title: "External-ID", data: function (e) { return `${e.ExternalId}`} });
    
    table_SalesChannel = $('#table_SalesOptions').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${$('#select_Merchant').val()}/salesChannel`,
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
  $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
}

function onclick_DeleteMerchantChannel(merchant_Id) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${merchant_Id}`,
        success : () => (message_Show(true), table.ajax.reload()),
        error :  () => (message_Show(false)),
    });
}

function onclick_SaveParameter() {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${$('#select_MerchantModal').val()}/salesChannel/${$('#select_Channel').val()}/parameter`,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      Key: $('#key').val(),
      Value: $('#value').val()
    }),
    success : () => (message_Show("success"),$('#content_Parameters').show(),table_ParametersLoad($('#select_MerchantModal').val(),$('#select_Channel').val())),
    error :  () => (message_Show("error")),
});
}

// #region [ Metodos ]
function select_Load() {
  $.ajax({
    type: "GET",
    url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant`,
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

  $.ajax({
    type: "GET",
    url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/salesChannel`,
    dataType: "json",
    success : function (data) {
      let response_Data = data;
      response_Data.forEach(element => {
        const optText = `${element.Name}`;
        const optValue = `${element.Id}`;
        $('#select_Channel').append(`<option value="${optValue}">${optText}</option>`)
      });
    },
  });

  $.ajax({
    type: "GET",
    url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/application`,
    dataType: "json",
    success : function (data) {
      let response_Data = data;
      response_Data.forEach(element => {
        const optText = `${element.Name}`;
        const optValue = `${element.Id}`;
        $('#select_Application').append(`<option value="${optValue}">${optText}</option>`)
      });
    },
  });
}

function message_Show(state, merchant_Id) {
    if(state == "success") {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    } else if (state == "error") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500
          })
    } else if(state == "delete") {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
          
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              onclick_Delete(merchant_Id)
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        });        
    } else if(state == "copy") {
      Swal.fire({
        icon: 'success',
        title: 'Copy Success !',
        showConfirmButton: false,
        timer: 1500
      })
    }
}

function table_ParametersLoad(id, salesID) {
  if(table_Parameters == null) {
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="message_Show('delete','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` }, width: "10px"});
    colunas.push({ title: "Key", data: function (e) { return `${e.Key}`} });
    colunas.push({ title: "Value", data: function (e) { return `${e.Value}`} });
  
    table_Parameters = $('#table_Parameters').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${id}/salesChannel/${salesID}/parameter`,
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
  table_Parameters.ajax.reload()
  $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();

}
// #endregion [ Methods ]