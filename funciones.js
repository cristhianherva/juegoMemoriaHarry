// variables globales
const d= document;
let imgN1= [
    {nombre:"harry1",url:"imagenes/harry1.jpeg "},
    {nombre:"harry2",url:"imagenes/harry2.jpeg "},
    {nombre:"harry3",url:"imagenes/harry3.jpeg "},
    {nombre:"harry4",url:"imagenes/harry4.jpeg "},
    {nombre:"harry5",url:"imagenes/harry5.jpeg "},
    {nombre:"harry6",url:"imagenes/harry6.jpeg "},
    {nombre:"harry1",url:"imagenes/harry1.jpeg "},
    {nombre:"harry2",url:"imagenes/harry2.jpeg "},
    {nombre:"harry3",url:"imagenes/harry3.jpeg "},
    {nombre:"harry4",url:"imagenes/harry4.jpeg "},
    {nombre:"harry5",url:"imagenes/harry5.jpeg "},
    {nombre:"harry6",url:"imagenes/harry6.jpeg "}
];
let imgN2= [
    {nombre:"harry1",url:"imagenes/harry1.jpeg "},
    {nombre:"harry2",url:"imagenes/harry2.jpeg "},
    {nombre:"harry3",url:"imagenes/harry3.jpeg "},
    {nombre:"harry4",url:"imagenes/harry4.jpeg "},
    {nombre:"harry5",url:"imagenes/harry5.jpeg "},
    {nombre:"harry6",url:"imagenes/harry6.jpeg "},
    {nombre:"harry1",url:"imagenes/harry1.jpeg "},
    {nombre:"harry2",url:"imagenes/harry2.jpeg "},
    {nombre:"harry3",url:"imagenes/harry3.jpeg "},
    {nombre:"harry4",url:"imagenes/harry4.jpeg "},
    {nombre:"harry5",url:"imagenes/harry5.jpeg "},
    {nombre:"harry6",url:"imagenes/harry6.jpeg "},
    {nombre:"harry7",url:"imagenes/harry7.jpeg "},
    {nombre:"harry7",url:"imagenes/harry7.jpeg "},
    {nombre:"harry8",url:"imagenes/harry8.jpeg "},
    {nombre:"harry8",url:"imagenes/harry8.jpeg "}
];
let imgN3= [
    {nombre:"harry1",url:"imagenes/harry1.jpeg "},
    {nombre:"harry2",url:"imagenes/harry2.jpeg "},
    {nombre:"harry3",url:"imagenes/harry3.jpeg "},
    {nombre:"harry4",url:"imagenes/harry4.jpeg "},
    {nombre:"harry5",url:"imagenes/harry5.jpeg "},
    {nombre:"harry6",url:"imagenes/harry6.jpeg "},
    {nombre:"harry1",url:"imagenes/harry1.jpeg "},
    {nombre:"harry2",url:"imagenes/harry2.jpeg "},
    {nombre:"harry3",url:"imagenes/harry3.jpeg "},
    {nombre:"harry4",url:"imagenes/harry4.jpeg "},
    {nombre:"harry5",url:"imagenes/harry5.jpeg "},
    {nombre:"harry6",url:"imagenes/harry6.jpeg "},
    {nombre:"harry7",url:"imagenes/harry7.jpeg "},
    {nombre:"harry7",url:"imagenes/harry7.jpeg "},
    {nombre:"harry8",url:"imagenes/harry8.jpeg "},
    {nombre:"harry8",url:"imagenes/harry8.jpeg "},
    {nombre:"harry9",url:"imagenes/harry9.jpeg "},
    {nombre:"harry9",url:"imagenes/harry9.jpeg "},
    {nombre:"harry10",url:"imagenes/harry10.jpeg "},
    {nombre:"harry10",url:"imagenes/harry10.jpeg "}
];
let tablero=d.querySelector(".tablero");
let imagenNombre=[];// guardar nombres de imagen
let imagenID=[];//guardar posiciones de imagen
let aciertos=0;
let totalIntentos=0;
let totalTiempo=0;
let tiempoSobrante=0;
let intentos=0;
let tiempo =60;
let nivel=1;
let mostrarNivel=d.querySelector(".nivel");
let mostrarIntentos=d.querySelector(".intentos");
let mostrarAciertos=d.querySelector(".aciertos");
let mostrarTiempo=d.querySelector(".tiempo");
let tiempoTranscurrido;
let btn_iniciar=d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyjugando=false;
let sonidoSeleccionar= new Audio("./sonidos//protego.mp3");
let sonidoAdivinar= new Audio("./sonidos//button.mp3");
let sonidoFallar= new Audio("./sonidos//fail.mp3");
let sonidoPerdio= new Audio("./sonidos//gameover.mp3");
let sonidoGanar= new Audio("./sonidos//winner.mp3");
let mostrarJugador= d.querySelector(".jugador");
let tabla= d.querySelector(".records tbody");
let fondeoBody=d.querySelector("body");

d.addEventListener("DOMContentLoaded",()=>{
    fondeoBody.classList.add("fondo1");
    mostraDatos();
})


//agregar evento al boton para poder iniciar el juego
btn_iniciar.addEventListener("click",function(){
    //alert("juego iniciado");
    //comprobar que el juego este activo
    if (estoyjugando==false && nivel==1) {
        ventanaModal();
    }else if(estoyjugando==false && nivel==2){
        estoyjugando= true;
        nivel2();
    }else if(estoyjugando==false && nivel==3){
        estoyjugando= true;
        nivel3();
    }
})
function agregarImagenes() {
    // Limpiar el tablero antes de agregar nuevas imágenes
    tablero.innerHTML = "";

    // Agregar imágenes dependiendo del nivel
    if (nivel == 1) {
        imagenNivel = imgN1;
    } else if (nivel == 2) {
        imagenNivel = imgN2;
    } else if (nivel == 3) {
        imagenNivel = imgN3;
    }

    // Colocar las imágenes de manera aleatoria
    imagenNivel.sort(() => Math.random() - 0.5);

    // Recorrer con un forEach las imágenes del array
    imagenNivel.forEach((imagen, i) => {
        let div = d.createElement("div");// Crear la etiqueta div
        div.className = "col-3";// Agregar la clase de col-3 al div 
        let img = d.createElement("img");// Crear la etiqueta img
        img.className = "img-fluid altura-img";// Agregar la clase img-fluid
        img.id = i;// Enumerar todas las imágenes
        img.src = "imagenes/ocultar.jpg";// Agregar la ubicación de la imagen
        img.addEventListener("click", mostrarImg);// Agregar un evento click a la imagen
        div.appendChild(img);// Agregar la imagen al div
        tablero.appendChild(div);// Agregar los div al tablero
    });
}
// //funcion para agregar las imagenes al tablero
// function agregarImagenes(){
//     //agregar imagenes dependiendo del nivel
//     if (nivel==1) {
//         imagenNivel= imgN1;
//     }else if(nivel==2){
//         imagenNivel=imgN2;
//     }else if(nivel==3){
//         imagenNivel=imgN3;
//     }

//     //colocar las imagenes en aleatoreas
// imagenNivel.sort(()=>Math.random()-0.5);

//     // recorrer con un forEach las imagenes del array
//     imagenNivel.forEach((imagen,i)=>{
//         let div = d.createElement("div");// crear  la etiqueta div
//         div.className="col-3";// agregar la clase de col-3 al div 
//         let img=d.createElement("img");//crear la etiqueta img
//         img.className="img-fluid altura-img";//agregamos la clase img-fluid
//         img.id=i;//enumera todas las imagenes
//         img.src= "imagenes/ocultar.png";//agregar la ubicacion de la imagen
//         img.addEventListener("click",mostrarImg);//agregar un evento click a la imagen
//         div.appendChild(img);//agregar la imagen al div
//         tablero.appendChild(div);//agregar los div al tablero
//     });
// }

//funcion para mostrar las imagenes ocultas
function mostrarImg(){
    sonidoSeleccionar.play();
    let imgId =this.getAttribute("id");
    // alert("# de imagen: "+imgId);
    this.src=imagenNivel[imgId].url;
    imagenNombre.push(imagenNivel[imgId].nombre);//guardar el nombre  de la imagen
    imagenID.push(imgId);//guardar las posiciones de la imagen
    
    if (imagenNombre.length==2) {
        setTimeout(compararImg ,300);
        
    }
};
function compararImg() {
    let imagenesTablero = d.querySelectorAll(".tablero > div > img");
    if (imagenNombre[0] == imagenNombre[1]) {
        if (imagenID[0] != imagenID[1]) {
            // alert("Felicidades Adivinaste");
            sonidoAdivinar.play();
            imagenesTablero[imagenID[0]].classList.add('matched');
            imagenesTablero[imagenID[1]].classList.add('matched');
            aciertos++;
            mostrarAciertos.textContent = aciertos;
        } else {
            alert("debes escoger otra imagen")
            imagenesTablero[imagenID[0]].src = "imagenes/ocultar.jpg"
            intentos++;
            mostrarIntentos.textContent = intentos;
        }
    } else {
        // alert("fallaste");
        sonidoFallar.play();
        imagenesTablero[imagenID[0]].src = "imagenes/ocultar.jpg"
        imagenesTablero[imagenID[1]].src = "imagenes/ocultar.jpg"
        intentos++;
        mostrarIntentos.textContent = intentos;
    }
    imagenNombre = [];
    imagenID = [];

    // comprobar si se adivinaron todas las imágenes
    if (nivel == 1 && aciertos == 6) {
        alert("¡Felicidades, pasaste de nivel!");
        fondeoBody.classList.replace("fondo1","fondo2");
        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (60 - tiempo);
        obtenerDatos();
        sonidoGanar.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido); // Detener el intervalo de tiempo
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyjugando = false;
        quitarImg();
        agregarImagenes();
    } else if (nivel == 2 && aciertos == 8) {
        alert("¡Felicidades, pasaste de nivel!");
        sonidoGanar.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido); // Detener el intervalo de tiempo
        tiempo = 40;
        mostrarTiempo.textContent = tiempo;
        estoyjugando = false;
        quitarImg();
    } else if (nivel == 3 && aciertos == 10) {
        alert("¡Felicidades, ganaste el juego!");
        sonidoGanar.play();
        clearInterval(tiempoTranscurrido); // Detener el intervalo de tiempo
        alert.reload();
    }
}

//funcion para comparar imagenes
// function compararImg() {
//     let imagenesTablero=d.querySelectorAll(".tablero > div > img");
//     if (imagenNombre[0]==imagenNombre[1] ) {
//         if (imagenID[0]!=imagenID[1]) {
//             // alert("Felicidades Adivinaste");
//             sonidoAdivinar.play();
//             imagenesTablero[imagenID[0]].classList.add('matched');
//             imagenesTablero[imagenID[1]].classList.add('matched');
//             aciertos++;
//             mostrarAciertos.textContent=aciertos;
//         }else{
//             alert("debes escoger otra imagen")
//             imagenesTablero[imagenID[0]].src ="imagenes/ocultar.png"
//             intentos++;
//             mostrarIntentos.textContent=intentos;

//         }
//     }else{
//         // alert("fallaste");
//         sonidoFallar.play();
//         imagenesTablero[imagenID[0]].src ="imagenes/ocultar.png"
//         imagenesTablero[imagenID[1]].src ="imagenes/ocultar.png"
//         intentos++;
//         mostrarIntentos.textContent=intentos;
//     }
//     imagenNombre=[];
//     imagenID=[];

//     //comprobar si se  adivinaron todas las imagenes

//     if ( nivel==1 && aciertos==6) {
//         alert("FECIDADES TERMIANSTE PASASTE DE NIVEL ")
//         //location.reload();//recargar la pagina , de manera temporal

//         totalIntentos+= intentos; 
//         totalIntentos+= tiempo;
//         tiempoSobrante+=(60-tiempo);mañ
//         obtenerDatos();
//         sonidoGanar.play();
//         nivel++;
//         mostrarNivel.textContent=nivel;
//         intentos=0;
//         mostrarIntentos.textContent=intentos;
//         aciertos=0;
//         mostrarAciertos.textContent=aciertos;
//         clearInterval(tiempoTranscurrido);
//         tiempo=50;
//         mostrarTiempo.textContent =tiempo;
//         estoyjugando= false;
//         quitarImg();

//         agregarImagenes();
//     }else if(nivel == 2 && aciertos==8){
//         alert("FECIDADES TERMIANSTE PASASTE DE NIVEL ")
//         sonidoGanar.play();
//         nivel++;
//         mostrarNivel.textContent=nivel;
//         intentos=0;
//         mostrarIntentos.textContent=intentos;
//         aciertos=0;
//         mostrarAciertos.textContent=aciertos;
//         clearInterval(tiempoTranscurrido);
//         tiempo=40;
//         mostrarTiempo.textContent =tiempo;
//         estoyjugando= false;
//         quitarImg();
//     }else if(nivel ==3 && aciertos==10){
//         alert("FECIDADES GANASTE EL JUEGO ")
//         sonidoGanar.play();
//         alert.reload();

//     }
// }

function nivel1(){
    //agregar las imagenes al tablero
    agregarImagenes();
    mostrarNivel.textContent= nivel;
    tiempoDeJuego();
}
function nivel2(){
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoDeJuego();
}
function nivel3(){
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoDeJuego();
}

function tiempoDeJuego(){
    tiempoTranscurrido = setInterval(()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo== 10) {
            alert("rapido!! se te agota el tiempo");
            mostrarTiempo.classList.add("tiempoAgotado");
        }else if(tiempo==0){
            alert("El tiempo se agoto perdiste")
            sonidoPerdio.play();
            clearInterval(tiempoTranscurrido);
            setTimeout(()=>{
                location.reload();
            },3000)
            
        }
    },1000);

}

function quitarImg() {
    let imagenQuitar= d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img)=>{
        img.remove();
    })
}

//mostrar ventana modal
function ventanaModal() {
    let mostrarModal= d.querySelector("#exampleModal");
    let cerrarModal= d.querySelectorAll(".cerrar");
    let inputJugador= d.querySelector(".nombreJugador");
    let btnJugador= d.querySelector(".Registrar-jugador");
    //botones para cerrar ventana modal
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            mostrarModal.classList.remove("show");
            mostrarModal.style.display="none";
        })
    })

    //mostrar ventana modal
    mostrarModal.classList.add("show");
    mostrarModal.style.display= "block";
    //evento click al boton del modal 
    btnJugador.addEventListener("click",()=>{
        //mostrar el nombre en el tablero
        mostrarJugador.textContent= inputJugador.value;
        //cerrar modal
        mostrarModal.classList.remove("show");
        mostrarModal.style.display="none";
        //iniciar nivel 1 
        estoyjugando= true;
        nivel1();

    });
}


