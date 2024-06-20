import {Key,Sounds} from "./constants.js"
import globals from "./globals.js"
import { initplayers } from "./initialize.js";




export function keyDownHandeler(event){

    switch(event.keyCode){
        case Key.UP:
            globals.action.moveUp = true;
            break;
        case Key.DOWN:
            globals.action.moveDown = true;
            break;
        case Key.LEFT:
            globals.action.moveLeft = true;
            break;
        case Key.RIGHT:
                globals.action.moveRight = true;
                break;
        case Key.Space:
            globals.action.space = true;
            break;
        case Key.esc:
            globals.action.esc = true;    
            break;
                             
    }
}


export function keyupHandeler(event){

    switch(event.keyCode){
        case Key.UP:
            globals.action.moveUp = false;
            break;
        case Key.DOWN:
            globals.action.moveDown = false;
            break;
        case Key.LEFT:
                globals.action.moveLeft = false;
                break;
        case Key.RIGHT:
            globals.action.moveRight = false;
            break;
        case Key.Space:
            globals.action.space = false;              
            break;
        case Key.esc:
            globals.action.esc = false;
            break;
    }
}

export function updateMusic(){
    const buffer = 0.28;
    const music = globals.sounds[Sounds.GAME_MUSIC];
    if(music.currentTime > music.duration - buffer )
    {
        music.currentTime = 0;
        music.play();
    }
}
// Función para manejar la entrada de teclado
export function handleKeyPressAZ(key) {
    
    // Verificar si el jugador ha presionado una tecla alfabética
    console.log(globals.keytime.value);
    if (key.match(/[a-zA-Z]/) && globals.playerName.length < 3 && globals.keytime.value === 0) {
      
        globals.playerName += key; // Agregar la letra al nombre del jugador
        console.log('Nombre actual:', globals.playerName);

        globals.keytime.value = 1;
    }   else if (key === 'Backspace' && globals.playerName.length > 0) {
        //Borrar el nombre
        globals.playerName = "";
        console.log('Nombre actual:', globals.playerName);
    }
}



export function getData()
{
    console.log("OK");



    //Ruta o absoluta o relativa al fichero que hace la petición (html)
    const url = "https://juego-mu.vercel.app/SERVER/routes/getAllClassic.php";
    const request = new XMLHttpRequest();

    request.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            if(this.status == 200)
            {
                if(this.responseText != null)
                {
                    const resultJSON = JSON.parse(this.responseText);
                    
                    if(globals.playerName === ""){
                        globals.playerId = 0;
                        console.log (globals.playerId);
                    }
                    else{
                        globals.playerId = resultJSON.length - 1;
                        console.log("0");}
                    globals.Players = [];
                    //INiciamos los datos del juego
                    initplayers(resultJSON);
                    ordenarPorScore();
                    findactualplayer();
                }
                else
                    alert("Communication error: no data received");
            }
            else
                alert("Communication error: " + this.statusText);
        }
    }

    request.open('GET', url, true);
    request.responseType = "text";
    request.send();
}

export function SendData(event) {
    console.log("Data send to the BD");

    
    let score = Math.round(globals.score);

    // Objeto para enviar como JSON
    const objectToSend = {
        nombre: globals.playerName,
        score: score,
    };

 
        const dataToSend = 'nombre=' + encodeURIComponent(objectToSend.nombre) + '&score=' + encodeURIComponent(objectToSend.score);


    console.log(dataToSend);

    // Ruta relativa al archivo que maneja la petición
    const url = "https://juego-mu.vercel.app/SERVER/routes/postClassic.php";
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            
            if (this.status == 200) {
                
                if (this.responseText != null) {
                    
                        const resultJSON = JSON.parse(this.responseText);
                        console.log("resultJSON: "+resultJSON);
                    }
                 else {
                    alert("Communication error: No data received");
                }
            } else {
                alert("Communication error: " + this.statusText);
            }
        }
    };

    request.responseType = "text";
    request.send(dataToSend);
}

function ordenarPorScore() {
    let n = globals.Players.length;
    
    for (let i = 0; i < n - 1; i++) {
       
        for (let j = 0; j < n - i - 1; j++) {
            if (globals.Players[j].score < globals.Players[j + 1].score) {
                // Intercambiar elementos si el puntaje del Highscore en j es menor que el puntaje del Highscore en j + 1
                let temp = globals.Players[j];
                globals.Players[j] = globals.Players[j + 1];
                globals.Players[j + 1] = temp;
                
            }
        }
    }
    
}
function findactualplayer() {
    if (globals.playerName === "") {
        // Si no hay un nombre de jugador ingresado, establece el playerId como el del primer jugador en el array
        globals.playerId = 0;
    } else {
        // Si hay un nombre de jugador ingresado, establece el playerId como el último jugador en el array
        globals.playerId = globals.Players.length;
    }
    
    // Buscar el jugador en el array cuyo ID coincida con globals.playerId
    for (let i = 0; i <= globals.Players.length ; i++) {
        console.log("playerid" + globals.playerId);
        if (globals.Players[i].id === globals.playerId) {
            // Establecer el jugador actual como aquel cuyo ID coincide con globals.playerId
            globals.player = globals.Players[i];
            console.log("jugador encontrado");
            globals.playerId = i;
            break; // Salir del bucle una vez que se encuentre el jugador
            
        }

    }
}

