import { Game, SpriteID, State } from "./constants.js";
import globals from "./globals.js";

export default function update(){

    //Change what the game is doing based on the game state
    switch(globals.gameState){

        case Game.LOADING:
            console.log("Loading assets...");
            break;

        case Game.PLAYING:
            playGame();
            break;

        default:
            console.error("Error: Game State invalid");
    }

function playGame(){
    // ... A completar
    updateSprites();
}

function updateSprites(){
    for (let i = 0; i < globals.sprites.length; ++i){

        const sprite = globals.sprites[i];
        updateSprite(sprite);
    }
}

function updateSprite(sprite){

    const type = sprite.id;
    switch (type){

        //Caso del jugador
        case SpriteID.BIRD:
            updateplayer(sprite);
            break;

        //Otros
        default:
            break;
    }
}

//Funcion que actualiza el personaje
function updateplayer(sprite){

    //Aqui actualizariamos el estado de las variables del player

    sprite.xPos = 222.5;
    sprite.yPos = 0;

    sprite.state = State.IDLE;
}
}

