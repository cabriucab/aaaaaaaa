
 let tituloPropiedades = document.getElementById("tituloTakeaway");
 tituloPropiedades.innerHTML += `<h1>Delivery & Takeaway</h1>`;
 
 const contenedorCarrito = document.getElementById("contenedorCarrito");

 let total= 0;
 let carrito =  JSON.parse(localStorage.getItem("carrito")) || []
 const cantidadMenues = document.getElementById("cantidadMenues");
 const lblCantidad =document.getElementById("lblCantidad");

 const armadoWebCarrito =(carrito)=> {
   let acumulador1 = "";
   
   acumulador1+=`<table id="customers">
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
            <td>$${carro.precio}</td>
          
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

   acumulador1+= `</table>
   <div class="Subtotal col-12 container d-flex justify-content-around flex-wrap">
  <div class="tituloSubtot col-9"><h2>Subtotal</h2></div>
  <div class="sumaSubtot col-3">$${total}</div>
   </div>
   
   `
   contenedorCarrito.innerHTML=acumulador1;
   btnBorrar = document.querySelectorAll(".btnBorrar");
btnBorrar.forEach(el => el.addEventListener("click", borrarCarrito));

  
}



const borrarCarrito = (e) =>{
 
  let ids = parseInt(e.target.getAttribute("ref"));
  let seleccion = carrito.find(item => item.id === ids)

  let aux = carrito.filter(el => el.id !== seleccion.id)

  carrito = aux
  localStorage.setItem("carrito",JSON.stringify(carrito))

  armadoWebCarrito(carrito);

  window.location.reload();
}


const sumarTotales=()=>{

  
  for(let ele of carrito) total+=ele.total;
//console.log(total)
}
const contarCarrito=(carrito)=>{
  
  botonNro.innerHTML= `
  
  <h5 id="nroCarrito"> ${carrito.length}</h5>
  `
  
  }



  
  function addCantidad(ref){
    
    let id = ref;
   let buscarEnCarrito = carrito.findIndex(el => el.id == id)
   carrito[buscarEnCarrito].cantidad += 1
   carrito[buscarEnCarrito].total=carrito[buscarEnCarrito].cantidad*carrito[buscarEnCarrito].precio;
   window.location.reload();
     localStorage.setItem("carrito",JSON.stringify(carrito));
  }

  
  function subCantidad(ref){
    
    let id = ref;
   let buscarEnCarrito = carrito.findIndex(el => el.id == id)
  
  if(carrito[buscarEnCarrito].cantidad>1){
    carrito[buscarEnCarrito].cantidad -= 1
    carrito[buscarEnCarrito].total=carrito[buscarEnCarrito].cantidad*carrito[buscarEnCarrito].precio;
   
  }else{
    let ids = parseInt(ref);
    let seleccion = carrito.find(item => item.id === ids)
  
    let aux = carrito.filter(el => el.id !== seleccion.id)
  
    carrito = aux
    localStorage.setItem("carrito",JSON.stringify(carrito))
  
    armadoWebCarrito(carrito);
    

  }

  


     localStorage.setItem("carrito",JSON.stringify(carrito));
  }


sumarTotales();
contarCarrito(carrito);
armadoWebCarrito(carrito);



// //BOTON VARIACION DE CANTIDAD EN JQUERY

jQuery($(".quantity-nav"))
   jQuery('.quantity').each(function() {
    let spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max'),
    ref=btnUp.attr('ref');
let newVal=0;
let oldValue=0;

  btnUp.click(function() {



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

  btnDown.click(function() {
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



