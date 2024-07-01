const imgHamburguesa = document.getElementById("img-hamburguesa");
const menuDesplegable = document.querySelector(".menu-desplegable-oculto")

imgHamburguesa.addEventListener("click", ()=>{
    if (imgHamburguesa.src.includes("hamburguesa")) {
        imgHamburguesa.src = "iconos/menu-cruz.svg";
        menuDesplegable.style.display = "flex"; 
    }else{
        imgHamburguesa.src = "iconos/menu-hamburguesa.svg";
        menuDesplegable.style.display = "none"; 
    }
})

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 835){
        menuDesplegable.style = "display: none;";
        imgHamburguesa.src = "iconos/menu-hamburguesa.svg";
    }
})

// este lo hago para que cuando el menu esta desplegado, si toco en cualquier lado de la pantalla que NO sea ni el menu desplegable ni 
// la imagen del menu, este menu se oculte (capaz es al dope pero bueno, no costaba nada je)
document.addEventListener("click", (e)=>{
    if (!menuDesplegable.contains(e.target) && !imgHamburguesa.contains(e.target)) {
        imgHamburguesa.src = "iconos/menu-hamburguesa.svg";
        menuDesplegable.style = "display: none";
    }
});