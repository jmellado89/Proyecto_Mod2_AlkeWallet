$(document).ready(function () {
  $("#btn-return").click(function () {
    const alerta = `
                    <div class="alert alert-primary" role="alert">
            Redirigiendo a Menú principal...
        </div>`;

    $("#contenedor-alertas").html(alerta);

    setTimeout(function () {
      window.location.href = "menu.html";
    }, 2000);
  });
});
