const imgHamburguesa = document.getElementById("img-hamburguesa");
const menuDesplegable = document.querySelector(".menu-desplegable-oculto")

imgHamburguesa.addEventListener("click", ()=>{
    if (imgHamburguesa.src.includes("hamburguesa")) {
        imgHamburguesa.src = "iconos/menu-cruz.svg";
        // menuDesplegable.style.display = "flex"; 
        menuDesplegable.classList.add("mostrar-menu")
    }else{
        imgHamburguesa.src = "iconos/menu-hamburguesa.svg";
        // menuDesplegable.style.display = "none"; 
        menuDesplegable.classList.remove("mostrar-menu")
    }
})

// este resize lo pongo por si esta abierto el desplegable y se agranda la pantalla, que se cierre
window.addEventListener("resize", ()=>{
    if(window.innerWidth > 835){
        menuDesplegable.classList.remove("mostrar-menu");
        imgHamburguesa.src = "iconos/menu-hamburguesa.svg";
    }
})

// este lo hago para que cuando el menu esta desplegado, si toco en cualquier lado de la pantalla que NO sea ni el menu desplegable ni 
// la imagen del menu, este menu se oculte (capaz es al dope pero bueno, no costaba nada je)
document.addEventListener("click", (e)=>{
    if (!menuDesplegable.contains(e.target) && !imgHamburguesa.contains(e.target)) {
        imgHamburguesa.src = "iconos/menu-hamburguesa.svg";
        menuDesplegable.classList.remove("mostrar-menu");
    }
});

// le puse este q cuando la pestaña detecte un scroll, cierro el menú je
window.addEventListener("scroll", ()=>{
    imgHamburguesa.src = "iconos/menu-hamburguesa.svg";
    menuDesplegable.classList.remove("mostrar-menu");
})