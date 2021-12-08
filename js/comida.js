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