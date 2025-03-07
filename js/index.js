/* Desarrollar un código en javascript que permita jugar al ahorcado. 
El usuario debe adivinar una palabra de 5 letras.
El usuario tiene 6 oportunidades para adivinar la palabra.
Si el usuario adivina la palabra, se muestra un mensaje de felicitaciones.
Si el usuario se queda sin oportunidades, se muestra un mensaje de derrota.
El usuario puede jugar de nuevo.
*/

let listaPalabras = ["gato", "perro", "casa", "mesa", "silla", "libro", "lápiz", "papel", "árbol", "flor","sol", "luna", "estrella", "nube", "agua", "fuego", "tierra", "viento", "montaña", "río","mar", "playa", "arena", "cielo", "pájaro", "pez", "tortuga", "elefante", "león", "tigre","oso", "mono", "jirafa", "cebra", "caballo", "vaca", "cerdo", "gallina", "pato", "abeja","mariposa", "araña", "serpiente", "ratón", "conejo", "ardilla", "cocodrilo", "delfín", "ballena", "tiburón","pulpo", "caracol", "hormiga", "mosquito", "murciélago", "camello", "pingüino", "foca", "lobo", "zorro","búho", "águila", "halcón", "loro", "colibrí", "canguro", "koala", "panda", "rinoceronte", "hipopótamo","jirafa", "cangrejo", "langosta", "medusa", "erizo", "lagarto", "iguana", "camaleón", "dragón", "unicornio","fantasma", "bruja", "vampiro", "zombi", "robot", "nave", "cohete", "planeta", "galaxia", "estrella","cometa", "meteorito", "satélite", "astronauta", "alienígena", "ovni", "telescopio", "microscopio","laboratorio", "científico","químico", "físico", "biólogo", "geólogo", "arqueólogo", "historiador", "matemático", "filósofo", "poeta", "escritor","pintor", "escultor", "músico", "cantante", "bailarín", "actor", "director", "película", "teatro", "ópera","ballet", "concierto", "festival", "museo", "galería", "biblioteca", "escuela", "universidad", "profesor", "estudiante","libro", "cuaderno", "lápiz", "bolígrafo", "pincel", "pintura", "escultura", "fotografía", "cámara", "computadora","teléfono", "televisión", "radio", "internet", "red", "página", "blog", "video", "música", "canción","instrumento", "guitarra", "piano", "violín", "batería", "flauta", "trompeta", "saxofón", "arpa", "tambor","maracas", "xilófono", "acordeón", "armónica", "bajo", "ukelele", "mandolina", "banjo", "violonchelo", "contrabajo","clarinete", "oboe", "fagot", "tuba", "corno", "trompa", "campana", "triángulo", "platillos", "gong","castañuelas", "pandereta", "cajón", "bongó", "congas", "timbales", "celesta", "órgano", "sintetizador", "theremín","armonio", "clavecín", "clavicordio", "virginal", "espineta", "laud", "cítara", "dulcimer", "koto", "shamisen"];
let palabraSecreta = "";
let palabraProgreso = "";
let intentosRestantes = 6;
let letrasUsadas = [];


document.getElementById("jugar").disabled = false;
document.getElementById("validar").disabled = true;
document.getElementById("reiniciar").disabled = true;

//Función para obtener la palabra segun los aciertos del usuario
function obtenerPalabraProgreso() {
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letrasUsadas[letrasUsadas.length-1]){
            palabraProgreso[i] = palabraSecreta[i];
        }
    }
    return palabraProgreso.join(" ");
}
function initPalabraProgreso(){
    palabraProgreso = Array(palabraSecreta.length).fill("_");
    document.getElementById("palabra").textContent = palabraProgreso.join(" ");
}
//Función para iniciar el juego
function jugar() {
    intentosRestantes = 6;
    letrasUsadas = [];
    palabraSecreta = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    initPalabraProgreso();
    document.getElementById("intentosRestantes").textContent = intentosRestantes;
    document.getElementById("letrasUsadas").textContent = letrasUsadas;
    document.getElementById("jugar").disabled = true;
    document.getElementById("validar").disabled = false;
    document.getElementById("reiniciar").disabled = false;
}   

//Función para reiniciar el juego
function reiniciar() {
    document.getElementById("jugar").disabled = false;
    document.getElementById("reiniciar").disabled = true;
}

//Función para validar la letra ingresada por el usuario
function validarLetra() {
    let letra = document.getElementById("letra").value;
    letra = letra[0];
    if (letrasUsadas.includes(letra)) {
        alert("La letra ya ha sido usada");
    } else {
        letrasUsadas.push(letra)
        document.getElementById("palabra").textContent = obtenerPalabraProgreso();
        intentosRestantes--;
        document.getElementById("letrasUsadas").textContent = letrasUsadas.join(" ");
    }
}