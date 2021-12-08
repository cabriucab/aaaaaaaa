


const cantidadMenues = document.getElementById("cantidadMenues");
const lblCantidad = document.getElementById("lblCantidad");
const detalleCompra = document.getElementById("detalleCompra");




const armadoWebCarrito = (carrito) => {

  let acumulador1 = "";

  acumulador1 += `<table id="customers">
   <tr>
     <th>Producto</th>
     <th></th>
     <th></th>
     <th>Precio</th>
     <th>Cantidad</th>
     <th>TOTAL</th>
     <th></th>
   </tr>`

  carrito.forEach(carro => {
    acumulador1 += `
      
  
          <tr>
            <td> <img class="imagenTabla"src="${carro.imagen}" alt="..."></td>
            <td>${carro.nombre}</td>
            <td>${carro.categoria}</td>
            <td id=precioss>$${carro.precio}</td>
          
            <td> <div class="quantity">
            <input id=lblCantidad type="number" min="1" max="99" step="1" value=${carro.cantidad}>
          
          <div class="quantity-nav">
          <div id="botonMas" class="quantity-button quantity-up" ref=${carro.id}>+</div>
          <div id="botonMenos" class="quantity-button quantity-down" ref=${carro.id}>-</div>
          </div>
          </div>
            </td>


            <td id="TotalItem">$${carro.total}</td>
            <td><img class="btnBorrar" ref=${carro.id} src="./img/icons8-remove-30.png" alt=""></td>

          </tr>
          
       `


  })

  acumulador1 += `</table>
   <div class="Subtotal col-12 container d-flex justify-content-around flex-wrap">
  <div class="tituloSubtot col-9"><h2>Subtotal</h2></div>
  <div class="sumaSubtot col-3">$${sumarTotales()}</div>
   </div>
   
   `
  contenedorCarrito.innerHTML = acumulador1;
  btnBorrar = document.querySelectorAll(".btnBorrar");
  btnBorrar.forEach(el => el.addEventListener("click", borrarCarrito));


}


armadoModal = (carrito) => {
  $('#alerta').hide();

 // $("#detalleCompra").prepend(`<h3>Detalle de pedido</h3>`);

  carrito.forEach(carro => {


    $("#detalleCompraAcordeon").append(`<table id="customers" class="tablaModal">
    
    <tr>
    <td> <img class="imagenTablaModal"src="${carro.imagen}" alt="..."></td>
    <td>${carro.nombre}</td>
    <td> Cantidad: ${carro.cantidad}</td>
    <td id="TotalItem">$${carro.total}</td>
    
  </tr>
  `);
  })

  $("#sumaModal").html(`<h2 class="totalModal">Total a abonar $ ${sumarTotales()}</h2>`);
  $("#detalleFecha").append(`<p> Fecha de pedido:<b> ${$('#hora').val()}</b></p>`);
  $("#detalleFecha").append(`<p> Comentarios adicionales:<b> ${$("#comentario").val()}</b></p>`);



  document.getElementById('hora').addEventListener('change', function () {

    $('#hora').val($('#hora').val());
    $("#detalleFecha").html(``);
    $("#detalleFecha").append(`<p> Fecha de pedido:<b> ${$('#hora').val()}</b></p>`);
    $("#detalleFecha").append(`<p> Comentarios adicionales:<b> ${$("#comentario").val()}</b></p>`);


  });

  document.getElementById('comentario').addEventListener('change', function () {
    $("#detalleFecha").html(``);
    $('#comentario').val($('#comentario').val())
    $("#detalleFecha").append(`<p> Fecha de pedido: <b>${$('#hora').val()}</b></p>`);
    $("#detalleFecha").append(`<p> Comentarios adicionales:<b> ${$("#comentario").val()}</b></p>`);

  });


}
armadoModal(carrito);



armadoWebCarrito(carrito);



// //BOTON VARIACION DE CANTIDAD EN JQUERY

jQuery($(".quantity-nav"))
jQuery('.quantity').each(function () {
  let spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max'),
    ref = btnUp.attr('ref');
  let newVal = 0;
  let oldValue = 0;

  btnUp.click(function () {



    oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      newVal = oldValue;
    } else {
      newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");


    addCantidad(ref);
 
  });

  btnDown.click(function () {
    oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");

    subCantidad(ref);
  });

});





