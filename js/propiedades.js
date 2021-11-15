



let tituloPropiedades = document.getElementById("tituloTakeaway");
tituloPropiedades.innerHTML += `<h1>Delivery & Takeaway</h1>`;

const comidas= [];

const contenedor = document.getElementById("contenedor");
const contenedorCarrito = document.getElementById("contenedorCarrito");

const botonNro =document.getElementById("botonNro");

const busquedaText= document.getElementById("busquedProducto");
const busquedaUbic= document.getElementById("busquedaMenu");
const minFiltro = document.getElementById("minPrecio");
const maxFiltro = document.getElementById("maxPrecio");
const btnFiltro =document.getElementById("filtrarPrecio");
let almacenados = JSON.parse(localStorage.getItem('menues'));


let carrito =  JSON.parse(localStorage.getItem("carrito")) || []
const tablaCarrito = document.getElementById("tablaCarrito")
const buscador = document.getElementById("buscador")

class comida {

constructor(id,descripcion, categoria, precio, imagen, total, cantidad){
   this.id = id;
   this.descripcion = descripcion;
   this.categoria = categoria;
   this.precio = precio;
   this.imagen = imagen;
   this.total=total;
this.cantidad=cantidad ||1;



}

agregarCantidad(valor){
   this.cantidad += valor; 
}

subtotal(){
   return this.cantidad * this.precio;
}



}



//LLENADO DE STORAGE CON METODO GET

$.get('data/menues.json',function(datos, estado){
   
   if(estado == 'success'){
       for (const literal of datos) {
        
         comidas.push(new comida(literal.id, literal.descripcion, literal.categoria, literal.precio, literal.imagen, literal.total, literal.cantidad));
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
  
   contarCarrito(carrito);
   contenedor.innerHTML = acumulador;
   
   let botones = document.querySelectorAll(".btnAgregar")
   botones.forEach(el=>{
       el.addEventListener("click",agregarCarrito)
      })
}

const contarCarrito=(carrito)=>{

   
   botonNro.innerHTML= `
   
   <h5 id="nroCarrito"> ${carrito.length}</h5>
   `
   
   }

  

const agregarCarrito = (e)=>{
   e.preventDefault();
   let id = parseInt(e.target.getAttribute("ref"))
   let seleccion = comidas.find(item => item.id === id)
   let buscarEnCarrito = carrito.findIndex(el => el.id == seleccion.id)

   if(buscarEnCarrito === -1){
       const productoAgregado = {
           id: seleccion.id,
           nombre: seleccion.descripcion,
           categoria:seleccion.categoria,
           precio: seleccion.precio,
           imagen: seleccion.imagen,
           cantidad: 1,
           total: seleccion.precio,
           
       }


       carrito.push(productoAgregado)
     
       contarCarrito(carrito);
   }else{
       carrito[buscarEnCarrito].cantidad += 1
       carrito[buscarEnCarrito].total=carrito[buscarEnCarrito].cantidad*carrito[buscarEnCarrito].precio;
       contarCarrito(carrito);
   }
   

   
   localStorage.setItem("carrito",JSON.stringify(carrito))




}


         if (JSON.parse(localStorage.getItem('menues')) === null) {
            alert("NO HAY Menues cargados aun..");

         } else {

            almacenados = JSON.parse(localStorage.getItem('menues'));
         


       
             
     
       $("#contenedor").fadeOut("slow", function(){
         armadoWeb(almacenados);

         $("#contenedor").fadeIn(1000);
         
         })
         ;
            
          
      

         }

         

       
         
        
         function filtroPrecio(){
          
         
          const filtrados = almacenados.filter(comidass => comidass.precio < parseFloat(maxFiltro.value)
                                                           && comidass.precio > parseFloat(minFiltro.value));
 $("#contenedor").fadeOut("slow", function(){
   armadoWeb(filtrados);  
         $("#contenedor").fadeIn(1000);
         
         })
         ;
        

           
        }

        function filtroNombre(){
          
      
      const filtrados = almacenados.filter(comidass =>  comidass.descripcion.includes(busquedaUbic.value.toUpperCase()));
      $("#contenedor").fadeOut("fast", function(){
         armadoWeb(filtrados);  
               $("#contenedor").fadeIn(1000);
               
               })
               ;   
        
     }

     
     
    function filtroGeneral(){
        
      
      //const almacenados1 = JSON.parse(localStorage.getItem('menues'));
   
      const filtrados = almacenados.filter(comidass => comidass.precio < parseFloat(maxFiltro.value)
                                                       && comidass.precio > parseFloat(minFiltro.value) && 
                                                       comidass.categoria===busquedaText.value.toUpperCase()
                                              
                                                       );

                                                                                                       
                                                       
if (busquedaText.value.toUpperCase()=="") {
   $("#contenedor").fadeOut("slow", function(){
      armadoWeb(almacenados);  
            $("#contenedor").fadeIn(1000);
            
            })
            ;


   
   busquedaUbic.value="";
   
}

else{
   $("#contenedor").fadeOut("slow", function(){
      armadoWeb(filtrados);  
            $("#contenedor").fadeIn(1000);
            
            })
            ;

}


  

     }


     



       
 btnFiltro.onclick=()=> filtroGeneral();        
 busquedaUbic.onkeyup=()=>filtroNombre();
 iconoCarrito.onclick=()=>location.href = "takeawayCarrito.html";



 