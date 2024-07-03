const agregarVehiculoBtn = document.getElementById('agregar-vehiculo-btn')
const popUpAgregarVehiculo = document.getElementById("popup-agregar-vehiculo");

const agregarTurnoBtn = document.getElementById('agregar-turno-btn')
const popUpAgregarTurno = document.getElementById("popup-agregar-turno");

if(agregarTurnoBtn){
    agregarTurnoBtn.addEventListener("click", ()=>{
        popUpAgregarTurno.style.display = "flex";
    })
}

if(agregarVehiculoBtn){
    agregarVehiculoBtn.addEventListener("click", ()=>{
        popUpAgregarVehiculo.style.display = "flex";
    })
}


