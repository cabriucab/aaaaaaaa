
  
  
 
 
  const contarCarrito=(carrito)=>{

   
    botonNro.innerHTML= `
    
    <h5 id="nroCarrito"> ${carrito.length}</h5>
    `
    
    }


    
  function addCantidad(ref) {
  
    let id = ref;
    let buscarEnCarrito = carrito.findIndex(el => el.id == id)
    carrito[buscarEnCarrito].cantidad += 1
    carrito[buscarEnCarrito].total = carrito[buscarEnCarrito].cantidad * carrito[buscarEnCarrito].precio;
    window.location.reload();
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  const sumarTotales = () => {
  
    let total = 0;
    for (let ele of carrito) total += ele.total;
  
    return total.toFixed(2);
  
  }
  
  
  
  function subCantidad(ref) {
  
    let id = ref;
    let buscarEnCarrito = carrito.findIndex(el => el.id == id)
  
    if (carrito[buscarEnCarrito].cantidad > 1) {
      carrito[buscarEnCarrito].cantidad -= 1
      carrito[buscarEnCarrito].total = carrito[buscarEnCarrito].cantidad * carrito[buscarEnCarrito].precio;
  
    } else {
      let ids = parseInt(ref);
      let seleccion = carrito.find(item => item.id === ids)
  
      let aux = carrito.filter(el => el.id !== seleccion.id)
  
      carrito = aux
      localStorage.setItem("carrito", JSON.stringify(carrito))
  
      armadoWebCarrito(carrito);
  
  
    }
  
  
  
    window.location.reload();
    localStorage.setItem("carrito", JSON.stringify(carrito));
  
  }
  
  
  sumarTotales();
  contarCarrito(carrito);
  
  
  function confirmarCompra() {


    nombre = $('.nombre').val();
    indice = document.getElementById("selector").selectedIndex;
    telefono = $('.telefono').val();
    email = $('.email').val();
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
     if (nombre == null || nombre.length == 0) {
      
      $("#notificaciones").html(`<div class="alert alert-danger" id="alerta" role="alert">
           El nombre ingresado es incorrecto.           
    </div>`);
  
    } else if (telefono == null || telefono.length == 0){
  
      $("#notificaciones").html(`<div class="alert alert-danger" id="alerta" role="alert">
      El número de teléfono ingresado es incorrecto.           
    </div>`);
   
    }else if (!expr.test(email)) {
  
      $("#notificaciones").html(`<div class="alert alert-danger" id="alerta" role="alert">
      El Email ingresado es incorrecto.           
    </div>`);
   
    }else  if (indice == null || indice == 0) {
      $("#notificaciones").html(`<div class="alert alert-danger" id="alerta" role="alert">
           Debe seleccionar el método de entrega de su compra.           
    </div>`);
    }else {
  
      $('#btnFinalizarCompraModal').hide();
      $('.cuerpoModal').hide();
      $('#comentariosYfecha').hide();
      $('#btnCerrarModal').hide();
  
      $('#btnFinalizarCompraModal').html(`<div class="spinner-border text-success" role="status">
      <span class="sr-only">Loading...</span>
     </div>`).fadeIn().delay(8000).fadeOut('');
  
  
  
      const URLPOST = 'https://jsonplaceholder.typicode.com/posts';
  
      const DATA = { productos: JSON.stringify(carrito), total: sumarTotales(carrito) }
  
      $.post(URLPOST, DATA, function (respuesta, estado) {
  
        if (estado == 'success') {
  
          
          $("#notificaciones").html(`<div class="alert alert-sucess alert-dismissible fade show compraConfirmada" role="alert">
                        <strong id="compraConfirmada">COMPRA CONFIRMADA!</strong> Comprobante Nº ${respuesta.id}.
    
                        </div>`).fadeIn().delay(9000).fadeOut('');
  
          carrito.splice(0, carrito.length);
  
          localStorage.setItem("carrito", '[]');
  
          $('#detalleCompra').empty();
          $('#sumaModal').empty();
          $('#contenedorCarrito').empty();
          $('#nroCarrito').html(0);
          $('#comentario').val("");
  
          setTimeout(function () { $('.modal').modal('hide'); }, 7000);
  
  
        }
      });
      setTimeout("window.location.href='./takeaway.html';", 4000);
  
    }
  
  }
  
  
  
  
  
  $('#btnFinalizarCompraModal').click(confirmarCompra);
  

  

const borrarCarrito = (e) => {

    let ids = parseInt(e.target.getAttribute("ref"));
    let seleccion = carrito.find(item => item.id === ids)
  
    let aux = carrito.filter(el => el.id !== seleccion.id)
  
    carrito = aux
    localStorage.setItem("carrito", JSON.stringify(carrito))
  
    armadoWebCarrito(carrito);
  
    window.location.reload();
  }
  
  
  
  
  const modificarfecha = () => {
  
    let now = new Date();
    let month = (now.getMonth() + 1);
    let day = now.getDate();
    let hour = now.getHours() + 1;
    let min = now.getMinutes();
    if (month < 10)
      month = "0" + month;
    if (day < 10)
      day = "0" + day;
    let today = now.getFullYear() + '-' + month + '-' + day + 'T' + hour + ':' + min;
    $('#hora').val(today);
  
  }
  modificarfecha();
  
  
  
 
 
   
 
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
         
 if (busquedProducto.value.toUpperCase()===""){
    const filtrados = almacenados.filter(comidass => comidass.precio < parseFloat(maxFiltro.value)
       && comidass.precio > parseFloat(minFiltro.value))
 
       $("#contenedor").fadeOut("slow", function(){
      
          armadoWeb(filtrados);  
                $("#contenedor").fadeIn(1000);
                
                })
                ;
    
   
 
 }else{
    const filtrados = almacenados.filter(comidass => comidass.precio < parseFloat(maxFiltro.value)
    && comidass.precio > parseFloat(minFiltro.value) && 
    comidass.categoria===busquedProducto.value.toUpperCase()
 
    );
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

  
