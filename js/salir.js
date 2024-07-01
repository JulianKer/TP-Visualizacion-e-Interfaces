const salir = document.getElementById("btn-salir");
const popupSalir = document.querySelector(".pop-up-salir");
const btnAceptarSalir = document.getElementById("btn-pop-up-salir")

salir.addEventListener("click", ()=>{
    popupSalir.style.display = "flex";
})