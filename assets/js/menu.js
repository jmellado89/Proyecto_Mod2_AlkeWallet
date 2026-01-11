$(document).ready(function () {
  $("#btnDeposit").click(function () {
    const alerta = `
                    <div class="alert alert-primary shadow fixed-top m-3" role="alert">
            Redirigiendo a pantalla de Depositar dinero...
        </div>`;

    $("#contenedor-alertas").html(alerta);

    setTimeout(function () {
      window.location.href = "deposit.html";
    }, 2000);
  });

  $("#btnSendMoney").click(function () {
    const alerta = `
                    <div class="alert alert-primary shadow fixed-top m-3" role="alert">
            Redirigiendo a pantalla de Enviar dinero...
        </div>`;

    $("#contenedor-alertas").html(alerta);

    setTimeout(function () {
      window.location.href = "sendmoney.html";
    }, 2000);
  });

  $("#btnTransactions").click(function () {
    const alerta = `
                    <div class="alert alert-primary shadow fixed-top m-3" role="alert">
            Redirigiendo a pantalla de Mis Movimientos...
        </div>`;

    $("#contenedor-alertas").html(alerta);

    setTimeout(function () {
      window.location.href = "transaction.html";
    }, 2000);
  });

  $("#endSession").click(function () {
    const alerta = `
                    <div class="alert alert-primary shadow fixed-top m-3" role="alert">
            Cerrando sesión...
        </div>`;

    $("#contenedor-alertas").html(alerta);

    setTimeout(function () {
      window.location.href = "indexv2.html";
    }, 2000);
  });
});
