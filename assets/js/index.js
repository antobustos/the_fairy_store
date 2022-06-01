alert("Welcome to The Fairy Store!");
let producto = prompt(
  "Seleccione la piedra energética que desea comprar: AMATISTA/CUARZO VERDE/TURMALINA/CITRINO"
);

const iva = 21 / 100;

const amatista = [
  (nombreProducto = "amatista"),
  (precio = 500),
  (ivaProducto = iva),
];

const cuarzoVerde = [
  (nombreProducto = "cuarzo verde"),
  (precio = 350),
  (ivaProducto = iva),
];


const turmalina = [
  (nombreProducto = "turmalina"),
  (precio = 620),
  (ivaProducto = iva),
];

const citrino = [
  (nombreProducto = "citrino"),
  (precio = 480),
  (ivaProducto = iva),
];


function compra() {
  let compraProducto = producto;

  switch (producto.toLowerCase()) {
    case "amatista":
      alert("deseas comprar " + amatista[0] + "?");

      let detalleAmatista = prompt(
        "deseas ver el detalle de tu compra? SÍ o NO? "
      ).toLowerCase();

      detalleCompra = detalleAmatista.toLowerCase();

      if (detalleAmatista == "si") {
        function detalleValor() {
          let valor = amatista[1] * amatista[2] + amatista[1];

          alert(
            "Vas a comprar una " +
              amatista[0] +
              " al precio de $" +
              amatista[1] +
              " + " +
              (amatista[2] * 100 + " % de IVA") +
              " por un total de $" +
              valor +
              " incluido IVA"
          );
        }

        detalleValor();
      } else {
        alert("Puedes ir a realizar el pago");
      }

      break;

      case "cuarzo verde":
        alert("deseas comprar " + cuarzoVerde[0] + "?");
  
        let detalleCuarzoVerde = prompt(
          "deseas ver el detalle de tu compra? SÍ o NO? "
        ).toLowerCase();
  
        detalleCompra = detalleCuarzoVerde.toLowerCase();
  
        if (detalleCuarzoVerde == "si") {
          function detalleValor() {
            let valor = cuarzoVerde[1] * cuarzoVerde[2] + cuarzoVerde[1];
  
            alert(
              "Vas a comprar un " +
                cuarzoVerde[0] +
                " al precio de $" +
                cuarzoVerde[1] +
                " + " +
                (cuarzoVerde[2] * 100 + " % de IVA") +
                " por un total de $" +
                valor +
                " incluido IVA"
            );
          }
  
          detalleValor();
        } else {
          alert("Puedes ir a realizar el pago");
        }
  
        break;

        case "turmalina":
          alert("deseas comprar " + turmalina[0] + "?");
    
          let detalleTurmalina = prompt(
            "deseas ver el detalle de tu compra? SÍ o NO? "
          ).toLowerCase();
    
          detalleCompra = detalleTurmalina.toLowerCase();
    
          if (detalleTurmalina == "si") {
            function detalleValor() {
              let valor = turmalina[1] * turmalina[2] + turmalina[1];
    
              alert(
                "Vas a comprar una " +
                  turmalina[0] +
                  " al precio de $" +
                  turmalina[1] +
                  " + " +
                  (turmalina[2] * 100 + " % de IVA") +
                  " por un total de $" +
                  valor +
                  " incluido IVA"
              );
            }
    
            detalleValor();
          } else {
            alert("Puedes ir a realizar el pago");
          }
    
          break;
    
          case "citrino":
            alert("deseas comprar " + citrino[0] + "?");
      
            let detalleCitrino = prompt(
              "deseas ver el detalle de tu compra? SÍ o NO? "
            ).toLowerCase();
      
            detalleCompra = detalleCitrino.toLowerCase();
      
            if (detalleCitrino == "si") {
              function detalleValor() {
                let valor = citrino[1] * citrino[2] + citrino[1];
      
                alert(
                  "Vas a comprar un " +
                    citrino[0] +
                    " al precio de $" +
                    citrino[1] +
                    " + " +
                    (citrino[2] * 100 + " % de IVA") +
                    " por un total de $" +
                    valor +
                    " incluido IVA"
                );
              }
      
              detalleValor();
            } else {
              alert("Puedes ir a realizar el pago");
            }
      
            break;
       

    default:
      alert(
        'Actualmente unicamente están a la venta AMATISTA/ CUARZO VERDE/ TURMALINA/ CITRINO. Por favor, elija una de esas opciones'
      );

      break;
  }

  return compraProducto;
}

compra();
