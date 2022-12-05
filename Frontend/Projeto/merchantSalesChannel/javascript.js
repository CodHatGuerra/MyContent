"use strict"    
// #region [ Propy ]
let table_SalesChannel = null;
let table_Parameters = null;
let recent_Guide = null;

// #endregion [ Propy ]
// #region [ Events ]
$(document).ready(function () {
  select_Load() 

  $('#windowModal').on('hidden.bs.modal', function (e) {
    $('#form_Merchant')
      .find("input,textarea,select")
         .val('')
         .end();
    table_Parameters.destroy()
    table_Parameters = null;

      
  })
});
// #endregion [ Methods ]
function onclick_Edit(merchant_Id, Name, Active) {
  $('#f_Guide').val(merchant_Id)
  $('#f_MerchantName').val(Name)

  if(Active)
    $('#success-outlined').prop("checked", true)
  else
  $('#danger-outlined').prop("checked", true)
}

function onclick_SaveNewSalesChannel() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            SalesChannelId: 
            ExternalId : 
            ApplicationId : 
        }),
        success : () => (message_Show("success") , $('#windowModal').modal('toggle'), table_SalesChannel.ajax.reload()),
        error :  () => (message_Show("error")),
    });
}

function onchange_MerchantChannel() {
  console.log($('#select_Merchant').val())

  if(table_Parameters == null) {
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="message_Show('delete','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` } });
    colunas.push({ title: "Key", data: function (e) { return `${e.Name}`} });
    colunas.push({ title: "Value", data: function (e) { return `${e.Id}`} });
    
    table_Parameters = $('#table_Parameters').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant",
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
  $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
}

function onclick_Delete(merchant_Id) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${merchant_Id}`,
        success : () => (message_Show(true), table.ajax.reload()),
        error :  () => (message_Show(false)),
    });
}

function onclick_CopyGuide(merchant_Id) {
  if(merchant_Id == null){
    navigator.clipboard.writeText($('#f_Guide').val());
    message_Show("copy");
  } else {
    navigator.clipboard.writeText(merchant_Id);
    message_Show("copy");
  }

}

function onclick_New() {
  if(table_Parameters == null) {
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="message_Show('delete','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` } });
    colunas.push({ title: "Key", data: function (e) { return `${e.Name}`} });
    colunas.push({ title: "Value", data: function (e) { return `${e.Id}`} });
    
    table_Parameters = $('#table_Parameters').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant",
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
  $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
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
        $('#select_Merchant').append(`<option value="${optValue}">${optText}</option>`)
        $('#select_MerchantModal').append(`<option value="${optValue}">${optText}</option>`)
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
        $('#select_channel').append(`<option value="${optValue}">${optText}</option>`)
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
// #endregion [ Methods ]