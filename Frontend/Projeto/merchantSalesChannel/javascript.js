"use strict"    
// #region [ Propy ]
let table_SalesChannel = null;
let table_Parameters = null;
// #endregion [ Propy ]
// #region [ Events ]
$(document).ready(function () {
  if(moment(moment()).isAfter(new Date(localStorage.getItem('data_TokenExpire'))))
  window.location.href = "../index.html";

  select_Load() 

  $('#windowModal').on('hidden.bs.modal', function (e) {
    $('#form_Merchant')
      .find("input,textarea,select")
         .val('')
         .end();
    $('#content_Parameters').hide();
    $("select").attr('disabled', false);
    $("input").attr('disabled', false);

    if(table_Parameters != null) {
      table_Parameters.destroy();
      table_Parameters = null;
    }
  })
});

async function onclick_DeleteMerchantChannel(salesChannel_ID) {
  const result = await message_Show("delete");
  if(result == true) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${$('#select_Merchant').val()}/salesChannel/${salesChannel_ID}`,
        success : () => (message_Show('success'), table_SalesChannel.ajax.reload()),
        error :  () => (message_Show('error')),
    });
  }
}

async function onclick_DeleteParameter(merchant_ID, sales_ID,parameter_ID) {
  const result = await message_Show("delete");
  if(result == true) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${merchant_ID}/salesChannel/${sales_ID}/parameter/${parameter_ID}`,
        success : () => (message_Show('success'), table_Parameters.ajax.reload()),
        error :  () => (message_Show('error')),
    });
  }
}

function onchange_MerchantChannel() {
  if(table_SalesChannel != null)
    table_SalesChannel.destroy();

  let colunas = [];
  colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_EditSalesChannel('${e.SalesChannelId}', '${e.ApplicationId}', '${e.ExternalId}')" data-bs-toggle="modal" data-bs-target="#windowModal"><i class="fa-solid fa-pencil text-danger"></i></a>`}, width: "5px" });
  colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_DeleteMerchantChannel('${e.SalesChannelId}')"><i class="fa-solid fa-trash-can"></i></a>` }, width: "5px" });
  colunas.push({ title: "Name", data: function (e) { return `${e.SalesChannel}`} });
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

async function onclick_EditSalesChannel(channel_ID, application_ID, external_ID) {
  await onclick_New()
  $('#windowModal').show();
  $("#select_MerchantModal").val(`${$('#select_Merchant').val()}`).val();
  $('#select_Channel').val(channel_ID);
  $("#select_Application").val(application_ID);
  $('#external_ID').val(external_ID)
  $("#select_MerchantModal").attr('disabled', true);
  $('#select_Channel').attr('disabled', true);
  $('#select_Application').attr('disabled', true);
  $('#external_ID').attr('disabled', true);
  $('#content_Parameters').show();
  table_ParametersLoad(`${$('#select_Merchant').val()}`, channel_ID)
}

async function onclick_New() {
  if( $('#select_Channel').has('option').length > 0 ) {
    await $.ajax({
      type: "GET",
      url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/salesChannel`,
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
  if( $('#select_Application').has('option').length > 0 ) {
    await $.ajax({
      type: "GET",
      url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/application`,
      dataType: "json",
      success : function (data) {
        let response_Data = data;
        $('#select_Application').html('<option value="" disabled selected>Select The Merchant Channel</option>')
        response_Data.forEach(element => {
          const optText = `${element.Name}`;
          const optValue = `${element.Id}`;
          $('#select_Application').append(`<option value="${optValue}">${optText}</option>`)
        });
      },
    });
  }
  $('#windowModal').modal('show');
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
    success : () => (message_Show("success"),table_Parameters.ajax.reload(),$('#key').val(''),$('#value').val('')),
    error :  () => (message_Show("error")),
});
}
// #endregion [ Events ]
// #region [ Metodos ]
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
}

function table_ParametersLoad(merchant_ID, sales_ID) {
  console.log(sales_ID)
  if(table_Parameters == null) {
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_DeleteParameter('${merchant_ID}','${sales_ID}','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` }, width: "10px"});
    colunas.push({ title: "Key", data: function (e) { return `${e.Key}`} });
    colunas.push({ title: "Value", data: function (e) { return `${e.Value}`} });
  
    table_Parameters = $('#table_Parameters').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${merchant_ID}/salesChannel/${sales_ID}/parameter`,
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