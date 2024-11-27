//LLAMADO DE LOS ELEMENTOS
let cierra = document.querySelector("#botonClose");
let adelante = document.querySelector("#botonNext");
let atras = document.querySelector("#botonBack");
let modulo = document.querySelector("#contenedorMain");
let imgActiva = document.querySelector("#imgActiva");
let imagenes = document.querySelectorAll("#contenedor-galeria img");
let indice = 0;

//FUNCION QUE MUESTRA EL MÓDULO CON LA RESPECTIVA IMAGEN APUNTANDO AL INDICE
const abreModulo = (event) => {
    imgActiva.src = event.target.src;
    modulo.style.display = "flex"; //MUESTRA EL MÓDULO AL HACER CLICK
    indice = Array.from(imagenes).indexOf(event.target); //CREA UN ARRAY CON CADA UNA DE LAS IMAGENES

    //OCULTA Y MUESTRA LOS BOTONES CUANDO LLEGA AL FINAL
    if (indice === 0) {
        atras.style.display = "none";
    } else {
        atras.style.display = "block";
    }

    if (indice === 29) {
        adelante.style.display = "none";
    } else {
        adelante.style.display = "block";
    }
};

//AL HACER CLICK EN LA IMAGEN, SE LLAMA LA FUNCION QUE ABRE EL MODULO
imagenes.forEach((imagen) => {
    imagen.addEventListener("click", abreModulo);
    imagen.addEventListener("touchstart", abreModulo);
});

//CERRAR MÓDULO 
cierra.addEventListener("click", () => {
    modulo.style.display = "none";
    adelante.style.display = "flex";
    atras.style.display = "flex";
})

//FUNCION QUE AVANZA LAS IMAGENES(SUMA EL INDICE)
let adelantar = () => {
    if (indice == 30) {
        adelante.style.display = "none";
    }

    if (indice >= 0) {
        atras.style.display = "flex"
    }

    imgActiva.src = imagenes[indice + 1].src;
    indice++;
};

//LLAMADO DE LA AVANZA QUE RETROCEDE AL HACER CLICK
adelante.addEventListener("click", adelantar);
adelante.addEventListener("touchstart", adelantar);


//FUNCION QUE RETROCEDE LAS IMAGENES(RESTA EL INDICE)
let retroceder = () => {
    if (indice <= 0 + 1) {
        atras.style.display = "none";
    }

    if (indice === 32 - 1) {
        adelante.style.display = "flex";
    }

    imgActiva.src = imagenes[indice - 1].src;
    indice--;
};

//LLAMADO DE LA FUNCION QUE RETROCEDE AL HACER CLICK
atras.addEventListener("click", retroceder);
atras.addEventListener("touchstart", retroceder)