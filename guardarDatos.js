//variables Globales
let nombreJugador= d.querySelector(".jugador");
let listaJugadores= "jugadores";

//funcion para obtener los datos
function obtenerDatos() {
    //crear objero pa los datos del jugador
    let datosJugador= {
        "nombre" : nombreJugador.textContent,
        "intentos" : totalIntentos,
        "tiempoTotal" : totalTiempo,
        "tiempoSobrante": tiempoSobrante
    }
    console.log(datosJugador)
    //pasar los datos del jugador
    guardarDatos(datosJugador);
}

//funcion para guardar los datos en localStorage
function guardarDatos(datos) {
    //arraypara los datos  antiguos y nuevos
    let jugadores = [];
    //tomar los datos que esta en localstorage previamente guardados
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosPrevios != null) {
        jugadores=datosPrevios
    }
    //guardar jugadores en el array
    jugadores.push(datos);
    //guardar los datos en localStorage
    localStorage.setItem(listaJugadores,JSON.stringify(jugadores));
    
}

function mostraDatos() {
    //arraypara los datos  antiguos y nuevos
    let jugadores = [];
    //tomar los datos que esta en localstorage previamente guardados
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosPrevios != null) {
        jugadores=datosPrevios
    }

    //organizar los  jugadores
    jugadores.sort((a,b)=>{
        if(a.tiempoTotal<b.tiempoTotal){
            return -1;
        }
        if(a.intentos<b.intentos){
             return 1;
        }
    });

    //mostrar los datos de la tabla
    jugadores.forEach((jugador, i) => {
        //crear fila
        let fila = d.createElement("tr");
        fila.innerHTML=`
        <td>${i+1} </td>
        <td>${jugador.nombre} </td>
        <td>${jugador.tiempoTotal} </td>
        <td>${jugador.intentos} </td>
        <td>${jugador.tiempoSobrante} </td>
        `;
        tabla.appendChild(fila);
    });

}

