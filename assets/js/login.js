$(document).ready(function () {
  $("#formLogin").submit(function (event) {
    event.preventDefault();
    var inputEmail = $("#mi-email").val();
    var inputPassword = $("#mi-password").val();

    if (inputEmail == "test@test.com" && inputPassword == "test") {
      const alerta = `
                    <div class="alert alert-primary shadow fixed-top m-3 text-center" role="alert">
            Bienvenido a tu Alke Wallet!
        </div>`;

      $("#contenedor-alertas").html(alerta);

      setTimeout(function () {
        window.location.href = "menu.html";
      }, 2000);
    } else {
      alert("Credenciales incorrectas!");
    }
  });

  $("#formModal").submit(function (event) {
    event.preventDefault();
    alert(
      "Registro realizado con éxito! Ya puedes iniciar sesión con tus credenciales"
    );
    window.location.href = "login.html";
  });

  $("#btn-inicio").on("click", function () {
    window.location.href = "indexv2.html";
  });
});
// prueba
