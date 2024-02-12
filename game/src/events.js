import {Key,Sounds} from "./constants.js"
import globals from "./globals.js"
import updatekeytime from "./gameLogic.js"


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

