const enla = document.querySelector("#enla");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{enla.classList.add("visible")});

cerrar.addEventListener("click", () => {enla.classList.remove("visible")});