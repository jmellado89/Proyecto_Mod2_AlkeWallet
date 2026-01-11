$(document).ready(function () {
  var saldoActual = 53500333;

  $("#depositForm").submit(function (event) {
    event.preventDefault();
    var inputAmount = parseFloat($("#depositAmount").val());
    console.log(inputAmount);

    saldoActual = saldoActual + inputAmount;
    console.log(saldoActual);

    var saldoFormateado = new Intl.NumberFormat("es-CL").format(saldoActual);

    // const displaySaldo = $('#saldo-monto');
    $("#saldo-monto").text(saldoFormateado);
    const alerta = `
                    <div class="alert alert-success" role="alert">
  ✅ Depósito realizado con éxito!
</div>`;

    $("#contenedor-alertas").html(alerta);

    setTimeout(function () {
      $(".alert").alert("close");
    }, 3000);
  });

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
