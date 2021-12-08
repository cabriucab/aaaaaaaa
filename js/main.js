
//LLENADO DE STORAGE CON METODO GET

$.get('data/menues.json',function(datos, estado){
   
   if(estado == 'success'){
       for (const literal of datos) {
        
         comidas.push(new comida(parseInt(literal.id), literal.descripcion, literal.categoria, parseFloat(literal.precio), literal.imagen, parseFloat(literal.total), parseInt(literal.cantidad)));
         }
         localStorage.setItem('menues', JSON.stringify(comidas));
   }
  
  
});



const armadoWeb = (almacenados) => {

  

   let acumulador = ""

   almacenados.forEach(menu => {
      acumulador += `
           <div class="card mb-5" style="width: 28rem;">
               <img src="${menu.imagen}" class="card-img-top mt-2" alt="...">
               <div class="card-body">
                   <h3 class="card-title">${menu.descripcion}</h3>
                   <p class="card-text">${menu.categoria}</p>
                   <h2 class="card-text ">$: ${menu.precio}</h2>
                   <a href="#" ref=${menu.id} class="btn btn-warning btnAgregar" >Agregar a Carrito</a>
               </div>
           </div>
                 
   
           `
   })



   

const contarCarrito = (carrito) => {

    botonNro.innerHTML = `
    
    <h5 id="nroCarrito"> ${carrito.length}</h5>
    `
  
  }
  
   contarCarrito(carrito);
   contenedor.innerHTML = acumulador;
   
   let botones = document.querySelectorAll(".btnAgregar")
   botones.forEach(el=>{
       el.addEventListener("click",agregarCarrito)
      })
}



 