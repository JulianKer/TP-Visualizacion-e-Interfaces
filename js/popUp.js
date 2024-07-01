// este script seria para implementar en cualquer pag que necesite un pop Up QUE NO SEA EL DE SALIR,
// entonces, para perfil, llamo al btn de guardar cambios, para registrarse llamo al btn registrarse y asi sucesivamente
// OBIAMENTE este va en conjunto con el section de "pop-up-fondo" asiq donde pongamos este scropt, hay q pegar ese section
// en el html q lo pusimos

// para el de salir, hice uno aparte ya que es el mismo popup pero tiene distintas cosas


const popUpFondo = document.querySelector(".pop-up-fondo");
const popUpBtn = document.querySelector(".pop-up-btn");


const guardarCambiosBtn = document.getElementById("guardar-btn");
const registrarse = document.getElementById("btn-registrarse");

// ----------------- solo estas dos funciones uso ----------
function ocultarPopUp() {
    popUpFondo.style.display = "none";
    window.location.href = popUpBtn.href;
}

function mostrarPopUp() {
    popUpFondo.style.display = "flex";
}
// ---------------------------------------------------------



if (guardarCambiosBtn !== null) {
    guardarCambiosBtn.addEventListener("click", mostrarPopUp)
}

if (registrarse !== null) {
    registrarse.addEventListener("click", mostrarPopUp)
}



popUpBtn.addEventListener("click", ocultarPopUp);


