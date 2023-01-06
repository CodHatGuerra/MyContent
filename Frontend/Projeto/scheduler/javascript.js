"use strict"    
// #region [ Propy ]
// #endregion [ Propy ]
// #region [ Events ]
$(document).ready(function () {
  if(moment(moment()).isAfter(new Date(sessionStorage.getItem('data_TokenExpire'))))
  window.location.href = "../index.html";
});

function onclick_Reset() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://inlivedesenvolvimento.ddns.net/delivery-gateway-api/api/scheduler/restart",
        contentType: "application/json; charset=utf-8",
        complete : (data) => (message_Show('success')),
        beforeSend : () => (message_Show('wait')),
        error : (data) => (console.log(data)),
    });
}

async function message_Show(state) {
    if (state === "success") {
      await Swal.fire({
        icon: "success",
        title: "You have logged in successfully",
        showConfirmButton: false,
        timer: 1500,
      })
    } else if (state === "error") {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something was wrong",
        showConfirmButton: false,
        timer: 2000,
      })
    }
    else if (state === "wait") {
        await Swal.fire({
          icon: "warning",
          title: "Restarting...",
          text: "Wait schedule reseting !",
          showConfirmButton: false,
        })
      }
  }
// #endregion [ Events ]
// #region [ Methods ]
// #endregion [ Methods ]