const producto = document.getElementById("producto")
const productoImagen = document.querySelector(".producto__imagen")
const thumbs = document.querySelector(".producto__thumbs")

// Color
const propiedadColor = producto.querySelector("#propiedad-color")

// Cantidad
const btnDisminuirCantidad = producto.querySelector("#disminuir-cantidad")
const btnIncrementarCantidad = producto.querySelector("#incrementar-cantidad")
const inputCantidad = producto.querySelector("#cantidad")

// Funcionalidad de las thumbnails
thumbs.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        const imagenSrc = e.target.src;
        const lastIndex = imagenSrc.lastIndexOf("/");
        const nombreImagen = imagenSrc.substring(lastIndex + 1);
       
        // Cambiamos la ruta de la imagen del producto
        productoImagen.src = `./img/tennis/${nombreImagen}`
    }
});

    propiedadColor.addEventListener("click", (e) => {
        if(e.target.tagName === "INPUT"){
            
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`    
           
        }
        
    })

// Botones de incrementar y disminuir cantidad de productos

    btnIncrementarCantidad.addEventListener("click", (e) => {
        inputCantidad.value = parseInt(inputCantidad.value) + 1
    })

    btnDisminuirCantidad.addEventListener("click", (e) => {
        if(parseInt(inputCantidad.value) > 1) {inputCantidad.value = parseInt(inputCantidad.value) - 1
        }
        
    })

    