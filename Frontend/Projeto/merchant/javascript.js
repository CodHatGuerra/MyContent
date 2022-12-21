"use strict"    
// #region [ Propy ]
let table = null;
let recent_Guide = null;
// #endregion [ Propy ]
// #region [ Events ]
$(document).ready(function () {
  if(moment(moment()).isAfter(new Date(localStorage.getItem('data_TokenExpire'))))
  window.location.href = "../index.html";
  
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="onclick_Edit('${e.Id}', '${e.Name}', ${e.IntegrationActivate})" data-bs-toggle="modal" data-bs-target="#windowModal"><i class="fa-solid fa-pencil text-danger"></i></a>` }, width: "5px" });
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="message_Show('delete','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` }, width: "5px" });
    colunas.push({ title: "Merchant Name", data: 'Name' });
    colunas.push({ title: "ID", data: function (e) { return `${e.Id}<a href="#"><i class="fa fa-clone" aria-hidden="true" onclick="onclick_CopyGuide('${e.Id}')"></i></a>`} });
    colunas.push({ title: "Integration Status", data: function (e) { return e.IntegrationActivate == true ? "<i class='text-success'>Actived</i>" : "<i class='text-danger'>Desactived</i>"} });

    table = $('#table').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant",
            dataSrc: '',
            contentType: "application/json; charset=utf-8"
        },
        columns: colunas,
        order: [],
        responsive: true,
        searching: true,
        lengthChange: false,
        dom: '<"toolbar">trip',
    });

    $('#windowModal').on('hidden.bs.modal', function (e) {
      $(this)
        .find("input,textarea,select")
           .val('')
           .end();
    
    })
    $('div.toolbar').html(`
    <div class='d-flex justify-content-end align-items-center'>
      <div class='d-inline-block'>
        <label>Search</label>
        <input onkeydown="onclick_Search()" id='filter_Search'/>
      </div>
      <button type="button" class="btn btn-success col-3 ml-3 mb-3 d-inline-block" data-bs-toggle="modal" onclick="new_GuideModal()" data-bs-target="#windowModal">New</button>
    </div>
    `);
});

function onclick_Edit(merchant_Id, Name, Active) {
  $('#f_Guide').val(merchant_Id)
  $('#f_MerchantName').val(Name)

  if(Active)
    $('#success-outlined').prop("checked", true)
  else
  $('#danger-outlined').prop("checked", true)

  recent_Guide = merchant_Id
}

function onclick_Save() {
    $.ajax({
        type: recent_Guide != null ? "PUT" : "POST",
        dataType: "json",
        url: recent_Guide != null ? `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${recent_Guide}` : "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            Id: recent_Guide != null ? "" : $('#f_Guide').val(),
            Name : $('#f_MerchantName').val(),
            IntegrationActivate : $('#success-outlined').is(':checked') == true ? true : false,
        }),
        success : () => (message_Show("success") , $('#windowModal').modal('toggle'), table.ajax.reload(), recent_Guide = null),
        error :  () => (message_Show("error")),
    });
}

function onclick_Search() {
  table.search($('#filter_Search').val()).draw();
}

function onclick_Delete(merchant_Id) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${merchant_Id}`,
        success : () => (message_Show('success'), table.ajax.reload()),
        error :  () => (message_Show('error')),
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
// #endregion [ Events ]
// #region [ Methods ]
function guide_Generator() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function new_GuideModal() {
  $('#f_Guide').val(guide_Generator())
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