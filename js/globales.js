let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const comidas= [];



let tituloPropiedades = document.getElementById("tituloTakeaway");
tituloPropiedades.innerHTML += `<h1>Delivery & Takeaway</h1>`;
const botonNro =document.getElementById("botonNro");
const contenedor = document.getElementById("contenedor");
const contenedorCarrito = document.getElementById("contenedorCarrito");
const busquedaText= document.getElementById("busquedProducto");
const busquedaUbic= document.getElementById("busquedaMenu");
const minFiltro = document.getElementById("minPrecio");
const maxFiltro = document.getElementById("maxPrecio");
const btnFiltro =document.getElementById("filtrarPrecio");
let almacenados = JSON.parse(localStorage.getItem('menues'));
const tablaCarrito = document.getElementById("tablaCarrito")
const buscador = document.getElementById("buscador")
