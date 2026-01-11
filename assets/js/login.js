$(document).ready(function () {
  $("#formLogin").submit(function (event) {
    event.preventDefault();
    var inputEmail = $("#mi-email").val();
    var inputPassword = $("#mi-password").val();

    if (inputEmail == "test@test.com" && inputPassword == "test") {
      alert("Bienvenid@ a tu Wallet!");
      window.location.href = "menu.html";
    } else {
      alert("Credenciales incorrectas!");
    }
  });

  $("#btn-register").on("click", function () {
    window.location.href = "register.html";
  });

  $("#btn-inicio").on("click", function () {
    window.location.href = "indexv2.html";
  });
});
