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

        case Game.NEWGAME:
                playGame();
                break;
        case Game.HISTORIA:
             playhistori();
              break;
        case Game.HIGHSCORE:
                playhistori();
                 break;   
    

        default:
            console.error("Error: Game State invalid");
    }

function playGame(){
    // ... A completar
    updateSprites();
    updateLevelTime();
}
function playhistori(){
    // ... A completar
     updateSprites();
}

function updateSprites(){
    for (let i = 0; i < globals.sprites.length; ++i){

        const sprite = globals.sprites[i];
        updateSprite(sprite);
    }
}
function updateLevelTime(){
    globals.leveltime.timeChangeCounter += globals.deltaTime;
    if(globals.leveltime.timeChangeCounter > globals.leveltime.timeChangeValue){
        globals.leveltime.value--;
        globals.leveltime.timeChangeCounter = 0;

    }

    if(globals.leveltime.value <= 0){
        globals.leveltime.value=0;
    }
}

function updateSprite(sprite){

    const type = sprite.id;
    switch (type){

        //Caso del jugador
        case SpriteID.PLAYER:
            updateplayer(sprite);
            break;

        case SpriteID.SKELETON:
                updateenemi(sprite);
              break;

        //Otros
        default:
            break;
    }
}

//Funcion que actualiza el personaje
function updateplayer(sprite){

    //Aqui actualizariamos el estado de las variables del player

     //sprite.xPos = 20;
    // sprite.yPos = 110;
    // sprite.physics.vLimit = 4;
    
      //sprite.state = State.RUNNING_LEFT;

      readKeyboardAndAssignState(sprite);
      console.log(sprite.state);

    switch (sprite.state){
        case State.RUNNING_RIGHT:
            sprite.physics.vx = sprite.physics.vlimit;
            break;
        case State.RUNNING_LEFT:
                sprite.physics.vx = -sprite.physics.vlimit;
                break;
        default: sprite.physics.vx = 0;
            break;

    }

    sprite.xPos += sprite.physics.vx * globals.deltaTime;
    updateAnimationFrame(sprite);


}
function updateenemi(sprite){

    //Aqui actualizariamos el estado de las variables del player

    sprite.xPos = 100;
    sprite.yPos = 110;

    sprite.state = State.IDLE;



}

function updateAnimationFrame(sprite){
    sprite.frames.frameChangeCounter++;

    if(sprite.frames.frameChangeCounter === sprite.frames.speed){
        sprite.frames.frameCounter++;
        sprite.frames.frameChangeCounter = 0;
    }

    if(sprite.frames.frameCounter === sprite.frames.framesPerState){
        sprite.frames.frameCounter = 0;
    }
}


function readKeyboardAndAssignState(sprite)
{
   
sprite.state =  globals.action.moveLeft         ? State.RUNNING_LEFT : 
                globals.action.moveRight        ? State.RUNNING_RIGHT:
                // globals.action.moveUp           ? State.STILL_UP:
                // globals.action.moveDown         ? State.STILL_DOWN:
                sprite.state === State.RUNNING_LEFT     ? State.STILL_LEFT:   
                sprite.state === State.RUNNING_RIGHT    ? State.STILL_RIGHT:
                sprite.state;
}

}

