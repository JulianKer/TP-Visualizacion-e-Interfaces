const agregarVehiculoBtn = document.getElementById('agregar-vehiculo-btn')
const popUpAgregarVehiculo = document.getElementById("popup-agregar-vehiculo");

agregarVehiculoBtn.addEventListener("click", ()=>{
    popUpAgregarVehiculo.style.display = "flex";
})