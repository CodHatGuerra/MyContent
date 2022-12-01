"use strict"    
// #region [ Propriedades ]
let table = null;
let idGuide = null;

// #endregion [ Propriedades ]
// #region [ Eventos ]
$(document).ready(function () {
    let colunas = [];
    colunas.push({ title: "", data: function (e) { return '<a href="javascript:editar(' + e.Id + ')"><i class="fa-solid fa-pencil text-danger"></i></a>' } });
    colunas.push({ title: "", data: function (e) { return `<a href="#" onclick="message_Show('delete','${e.Id}')"><i class="fa-solid fa-trash-can"></i></a>` } });
    colunas.push({ title: "Merchant Name", data: 'Name' });
    colunas.push({ title: "Integration Status", data: function (e) { return e.IntegrationActivate == true ? "<i class='text-success'>Actived</i>" : "<i class='text-danger'>Desactived</i>" } });

    let colunasConfig = [];
    colunasConfig.push({ targets: 0, width: "10", orderable: false });
    colunasConfig.push({ targets: 1, width: "10", orderable: false });

    table = $('#table').DataTable({
        ajax: {
            type: "GET",
            dataType: "json",
            url: "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant",
            dataSrc: '',
            contentType: "application/json; charset=utf-8"
        },
        columns: colunas,
        columnDefs: colunasConfig,
        order: [],
        lengthChange: false,
        dom: 'B l<"tabela-toolbar">frtip',
        initComplete: function () {
                $("#table_filter").append('<button type="button" class="btn btn-success col-7 mb-3" data-bs-toggle="modal" data-bs-target="#windowModal">New</button>');
        }
    });
});
// #endregion [ Eventos ]
function onclick_Save() {
    $.ajax({
        type: idGuide != null ? "PUT" : "POST",
        dataType: "json",
        url: idGuide != null ? "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant" : "https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            Id: idGuide != null ? idGuide : guide_Generator(),
            Name : $('#f_merchantName').val(),
            IntegrationActivate : $(':checked').val() == "true" ? true : false,
        }),
        success : () => (message_Show(true) , $('#windowModal').modal('toggle'), table.ajax.reload()),
        error :  () => (message_Show(false)),
    });
}
function onclick_Delete(merchant_Id) {
    $.ajax({
        type: "DELETE",
        url: `https://inlivehomologacao.ddns.net/delivery-gateway-api/api/merchant/${merchant_Id}`,
        success : () => (message_Show(true), table.ajax.reload()),
        error :  () => (message_Show(false)),
    });
}
// #region [ Metodos ]
function guide_Generator(Id) {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function message_Show(state, merchant_Id) {
    if(state) {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500
          })
    }

    if(state == "delete") {
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
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          });        
    }
}
// #endregion [ Metodos ]