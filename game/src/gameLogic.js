import { Colisions, Game, SpriteID, State } from "./constants.js";
import globals from "./globals.js";
import  detectCollision from "./collisions.js"


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
    detectCollision();
    updatelife();
    
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
function updatelife(){
    for(let i= 1 ; i < globals.sprites.length;i++){
        const sprite = globals.sprites[i];

        if (sprite.isColisionPlayer){
            globals.life--;
        }
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
        case SpriteID.BEE:
            updatebee(sprite);
            break;

        case SpriteID.VILLAN:
                updatevillan(sprite);
                break;
        case SpriteID.CABALLERO:
                    updateCaballero(sprite);
                    break;
        //Otros
        default:
            
            break;
    }
}

//Funcion que actualiza el personaje
function updateplayer(sprite){

    //Aqui actualizariamos el estado de las variables del player

    if( sprite.isColisionBotton){
        sprite.physics.isOnGround = true;
        
    }
    else{
        sprite.physics.isOnGround = false;
    }



      readKeyboardAndAssignState(sprite);
 
    switch (sprite.state){
        case State.RUNNING_RIGHT:
            sprite.physics.ax = 200;
            break;
        case State.RUNNING_LEFT:
                sprite.physics.ax = -200;
                break;
        default: sprite.physics.ax = 0;
            break;

    }
    
    

     sprite.physics.vx += sprite.physics.ax * globals.deltaTime;
     sprite.physics.vy += sprite.physics.ay * globals.deltaTime;


     



    
    
    
    if(!sprite.physics.isOnGround ){
        
        if( sprite.physics.vy < 0 ){
            sprite.state = State.AIR_WIZZARD_UP;}
        else if(sprite.physics.vy > 50){sprite.state = State.AIR_WIZZARD_down;
            
        }
        
        


    }
    else{
        
        if(globals.action.moveUp){
             sprite.physics.isOnGround = false;
            sprite.physics.vy += sprite.physics.jumpforce;

        }


    }
//fricion
    if (sprite.physics.isOnGround) {
        // Coeficiente de fricción (ajusta según sea necesario)
        const friction = 0.2;
        
        // Aplicar fricción en la dirección opuesta al movimiento
        sprite.physics.vx -= sprite.physics.vx * friction;

        // Detener completamente la velocidad si es muy pequeña
        if (Math.abs(sprite.physics.vx) < 0.1) {
            sprite.physics.vx = 0;
        }

        if(sprite.physics.vx>0){sprite.state = State.RUNNING_RIGHT;}
        else if(sprite.physics.vx < 0){sprite.state = State.RUNNING_LEFT;}
    }



sprite.physics.vy += 250 * globals.deltaTime;
// Actualizar posición en el eje y
sprite.yPos += sprite.physics.vy * globals.deltaTime;

sprite.xPos += sprite.physics.vx * globals.deltaTime;
sprite.yPos += sprite.physics.vy * globals.deltaTime;

    updateAnimationFrame(sprite);
    


}
function updateenemi(sprite){

    //Aqui actualizariamos el estado de las variables del player
    

    //  sprite.state = State.RUNNING_LEFT_ESKELETON;

    switch (sprite.state){
        case State.RUNNING_RIGHT_ESKELETON:
            sprite.physics.vx = sprite.physics.vlimit;
            break;
        case State.RUNNING_LEFT_ESKELETON:
                sprite.physics.vx = -sprite.physics.vlimit;
                break;
        default: sprite.physics.vx = 0;
            break;
    }
    sprite.xPos += sprite.physics.vx * globals.deltaTime;
    updateAnimationFrame(sprite);

     updateDirectionRandom(sprite);



}

function updatevillan(sprite){

    //Aqui actualizariamos el estado de las variables del player
    

    //  sprite.state = State.RUNNING_LEFT_ESKELETON;

     switch (sprite.collisionBorder){
         case Colisions.BORDER_RIGHT:
            sprite.physics.vx = -sprite.physics.vlimit;
            sprite.state = State.RUNNING_RIGHT_VILLAN;
          
            break;
         case Colisions.BORDER_LEFT:
                 sprite.physics.vx = sprite.physics.vlimit;
                 sprite.state = State.RUNNING_LEFT_VILLAN;
                 
                 break;
        default: 
        
            
     }
     sprite.xPos += sprite.physics.vx * globals.deltaTime;
    updateAnimationFrame(sprite);


   calculateColision(sprite);



}

function calculateColision(sprite){
    if(sprite.xPos + sprite.imageSet.xSize > globals.canvas.width){
        sprite.collisionBorder = Colisions.BORDER_RIGHT;

    }

    else if(sprite.xPos < 0 ){
        sprite.collisionBorder = Colisions.BORDER_LEFT;
    }

    else{
        sprite.collisionBorder = Colisions.NO_COLISIONS;
    }
}

function updatebee(sprite){


    sprite.physics.angle += sprite.physics.omega * globals.deltaTime;
    setPositionBee(sprite);


    updateAnimationFrame(sprite);




}


function updateCaballero(sprite){

const amplitud = 20;

sprite.physics.vx = -sprite.physics.vlimit;
sprite.physics.angle += sprite.physics.omega * globals.deltaTime;

sprite.xPos += sprite.physics.vx * globals.deltaTime;
sprite.yPos = sprite.physics.yRef + amplitud * Math.sin(sprite.physics.angle);
   
    


    updateAnimationFrame(sprite);




}

 function setPositionBee(sprite){
    const radius = 25;

    sprite.xPos = sprite.physics.xRotorCenter + radius * Math.cos(sprite.physics.angle);
    sprite.yPos = sprite.physics.yRotorCenter + radius * Math.sin(sprite.physics.angle);

    sprite.xPos -= sprite.imageSet.xSize /2;
    sprite.yPos -= sprite.imageSet.ySize /2;

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

function swapDirectio(sprite){
    sprite.state = sprite.state === State.RUNNING_RIGHT_ESKELETON ? State.RUNNING_LEFT_ESKELETON : State.RUNNING_RIGHT_ESKELETON
}
function updateDirectionRandom(sprite){
    sprite.directionChangeCounter += globals.deltaTime;

    if(sprite.directionChangeCounter > sprite.maxTimeToChangeDirection){
        
        sprite.directionChangeCounter = 0;
        sprite.maxTimeToChangeDirection = Math.floor(Math.random()*8)+1;

        swapDirectio(sprite);
    }
}

}

