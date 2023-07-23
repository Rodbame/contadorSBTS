// OBTENIENDO LOS ELEMENTOS DEL DOM

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// FECHA DE ESTRENO
const proximaPelicula = "29 March 2024";

function contadorDeTiempo() {
  const fechaProximaPelicula = new Date(proximaPelicula);
  const fechaActual = new Date();

  console.log(fechaActual);

  //Total de segundos faltantes para la pelicula
  const totalSegundos = (fechaProximaPelicula - fechaActual) / 1000;

  //Calculo del tiempo partiendo del total de segundos faltantes
  const diasFaltantes = Math.floor(totalSegundos / 3600 / 24);
  const horasFaltantes = Math.floor(totalSegundos / 3600) % 24;
  const minutosFaltantes = Math.floor(totalSegundos / 60) % 60;
  const segundosFaltantes = Math.floor(totalSegundos % 60);

  //Insertar calculos en el DOM
  dias.innerHTML = diasFaltantes;
  horas.innerHTML = horasFaltantes;
  minutos.innerHTML = minutosFaltantes;
  segundos.innerHTML = segundosFaltantes;
}

//Ejecucion de la funcion
contadorDeTiempo();

//Hacemos que la funcion se repita cada segundo
setInterval(contadorDeTiempo, 1000)