
async function onclick_Login() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: `${URL}/api/api/v1/portal/autenticacao/login`,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            CodigoAplicacao: 1,
            Usuario: $('#form_User').val(),
            Senha: $('#form_Pass').val()
        }),
        success : (data) => {
          sessionStorage.clear();
          sessionStorage.setItem('acess_Token', data.Data.AccessToken);
          sessionStorage.setItem('data_TokenExpire', moment(new Date()).add(data.Data.Expires, 's').toDate());
            message_Show("success")
        },
        error :  () => (message_Show("error")),
    });
}

async function message_Show(state) {
    if (state === "success") {
      await Swal.fire({
        icon: "success",
        title: "You have logged in successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        window.location.href = "merchant/merchant.html";
    })
    } else if (state === "error") {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "wrong username or password!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }