import {Key,Sounds} from "./constants.js"
import globals from "./globals.js"
import { initplayers } from "./initialize.js";




export function keyDownHandeler(event){

    switch(event.keyCode){
        case Key.UP:
            globals.action.moveUp = true;
            console.log("up");
            break;

            case Key.DOWN:
                globals.action.moveDown = true;
                break;
            case Key.LEFT:
                    globals.action.moveLeft = true;
                    break;
            case Key.RIGHT:
                    globals.action.moveRight = true;

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
    }
}



export function getData()
{
    console.log("OK");



    //Ruta o absoluta o relativa al fichero que hace la petición (html)
    const url = "http://localhost:3000/game/SERVER/routes/getAllClassic.php";
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
                    console.log (resultJSON);
                    if(globals.playerName === ""){globals.playerId = 0;
                    }
                    else{globals.playerId = resultJSON.length;
                        console.log("0");}
                    
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
    const url = "http://localhost:3000/game/SERVER/routes/postClassic.php";
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            
            if (this.status == 200) {
                
                if (this.responseText != null) {
                    
                        const resultJSON = JSON.parse(this.responseText);
                        console.log("resultJSON: "+resultJSON);
                        
                        // Inicializar los datos
                        initplayers(resultJSON);
                        
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
    console.log(globals.Players);
}
function findactualplayer(){
    for(let i = 0;i < globals.Players.length;i++){
        if(globals.playerId === globals.Players[i].id){
            console.log("asignado");
            globals.player = globals.Players[i];
            
            break;

        }
        else{
            globals.player = globals.Players[0];
            console.log("player"+globals.player);
        }
        
    }
    
}

