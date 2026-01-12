$(document).ready(function () {
  $("#formEnvio").submit(function (event) {
    event.preventDefault();
    var saldoActual = 53500333;

    const seleccionado = $('input[name="radioNoLabel"]:checked');
    console.log(`seleccionado es:${seleccionado.val()}`);
    console.log(`el monto es: ${$("#ammount").val()}`);
    const monto = $("#ammount");

    if (monto.val() === "") {
      alert("Debes ingresar un monto");
    } else if (monto.val() > saldoActual) {
      alert("No tienes suficiente saldo para esta operación.");
    } else if (seleccionado.length > 0) {
      const contacto = seleccionado.val();
      console.log(contacto);
      var montoFormateado = new Intl.NumberFormat("es-CL").format(monto.val());
      confirm(
        `¿Está seguro que desea realizar el envío de $${montoFormateado} a ${contacto}?`
      );
      saldoActual = saldoActual - monto.val();
      var saldoFormateado = new Intl.NumberFormat("es-CL").format(saldoActual);
      $("#saldo-monto").text(saldoFormateado);

      const alerta = `
                    <div class="alert alert-primary shadow fixed-top m-3 text-center" role="alert">
           ✅ Tu dinero se ha enviado con éxito!
        </div>`;

      $("#contenedor-alertas").html(alerta);
    } else {
      alert("Debes seleccionar a un contacto de tu lista");
    }
  });

  $("#endSession").click(function () {
    const alerta = `
                    <div class="alert alert-primary shadow fixed-top m-3 text-center" role="alert">
            Redirigiendo al menú principal...
        </div>`;

    $("#contenedor-alertas").html(alerta);

    setTimeout(function () {
      window.location.href = "menu.html";
    }, 2000);
  });

  $("#formModal").submit(function (event) {
    event.preventDefault();
    alert("El contacto se ha creado con éxito!");
    window.location.href = "sendmoney.html";
  });
});
