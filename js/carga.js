
const inmuebles = [];

class inmueble {
   constructor(id, categoria, precio, metroscuadrados, ubicacion, imagen) {
      this.id = id;
      this.categoria = categoria;
      this.precio = precio;
      this.metroscuadrados = metroscuadrados;
      this.ubicacion=ubicacion;
      this.imagen = imagen;

   }

}


const tituloForm = document.getElementById("titulo");
tituloForm.innerHTML += `<h1>CARGA DE PROPIEDADES PROPIEDADES</h1>`



const armadoWeb = () => {
    let armado = "";

    armado = `
    <form class="row g-3" id="formulario">
            <div class="col-md-2">
              <label id="lid" class="form-label">ID</label>
              <input type="number" class="form-control" id="id" required>
            </div>
           
            <select class="form-select col-md-10" aria-label="Default select example" id="categoria" required>
                <option selected value="">Seleccione categoria de inmueble</option>
                <option value="">Todo</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Galpon">Galpón</option>
                <option value="Local">Local</option>
                <option value="PH">PH</option>
              </select>
           
           
            <div class="col-6">
              <label id="lprecio" class="form-label">PRECIO</label>
              <input type="number" class="form-control" id="precio"required >
            </div>
            <div class="col-6">
              <label id="lmetros" class="form-label">METROS CUADRADOS</label>
              <input type="number" class="form-control" id="metros" required>
            </div>
            <div class="col-6">
            <label id="lubicacion" class="form-label">UBICACION</label>
            <input type="text" class="form-control" id="ubicacion" required>
          </div>
            <div class="col-md-12">
              <label id="limg" class="form-label">IMAGEN</label>
              <input type="text" class="form-control" id="img" placeholder="Ruta al archivo de imagen..." required>
            </div>
           
            <div class="col-12" id="botonera">
              <button type="submit" id="botonCargar" class="btn btn-primary">GUARDAR</button>
              <button type="reset" id="botonreset" class="btn btn-primary">LIMPIAR</button>
              <a href="./index.html" class="btn btn-primary" id="botonSalir" >SALIR</a>
            </div>
          </form>

`

    contenedor.innerHTML = armado;

}
armadoWeb();

//FUNCION PARA ARMAR STORAGE

const armadoStorage = (array) => {

    array.push(new inmueble(document.getElementById("id").value, document.getElementById("categoria").value.toUpperCase(), document.getElementById("precio").value, document.getElementById("metros").value, document.getElementById("ubicacion").value.toUpperCase(), document.getElementById("img").value)); 
   
    if (document.getElementById("id").value, document.getElementById("ubicacion").value.toUpperCase(), document.getElementById("categoria").value.toUpperCase(), document.getElementById("precio").value, document.getElementById("metros").value, document.getElementById("img").value==""
    ) {
        alert("DEBE CARGAR TODOS LOS CAMPOS..");
        return;
    }else{
        localStorage.setItem('inmuebles', JSON.stringify(array));
        alert("PROPIEDAD GUARDADA!!!")
    }
    

}






//EVENTO AL HACER CLICK EN BOTON CARGAR
let botonCargar = document.getElementById("botonCargar");
botonCargar.onclick = () => {


    if (JSON.parse(localStorage.getItem('inmuebles')) === null) {
       
        let inmbuebless1 = [];
        armadoStorage(inmbuebless1);
       

    } else {

        let inmuebles1 = JSON.parse(localStorage.getItem('inmuebles'));
        armadoStorage(inmuebles1);
        

    }



}