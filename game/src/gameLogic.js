import { Colisions, Game, SpriteID, State, particleState } from "./constants.js";
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
    updatelifeTime();
    detectCollision();
    updatelife();
    updateCamera();
    updatescore();
    
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

    updateSprite(globals.sprites_hud[0]);
}

function updatelife() {
  
        for (let i = 1; i < globals.sprites.length; i++) {
            const sprite = globals.sprites[i];
            if (sprite.isColisionPlayer && globals.lifetime.value > 4) {
                damagecalculation(sprite);
                globals.lifetime.value = 0;
                whenPlayerGetHit(globals.sprites[0]);
                
            }
            if(globals.lifetime.value > 4){
                globals.sprites[0].frames.framesPerState = 5;
                globals.sprites[0].frames.speed = 4;
            }
        }

        updatelifesprite();


    
}
 
function gameover(){

    const brickSize = globals.level[0].imageSet.gridSize;
    const row = Math.floor(globals.sprites[0].yPos / brickSize);

    if(globals.life <=0){
        globals.gameState = Game.GAMEOVER;
    }
    if(row >= 30){

        globals.gameState = Game.GAMEOVER;

    }
}
function updatelifesprite(){
        let life = globals.life;

        if(life >= 200 && life <= 300){
            globals.sprites_hud[0].state = State.SUPER_SAYAN1;
        }
        else if(life >= 100 && life <= 200){
            globals.sprites_hud[0].state = State.SUPER_SAYAN2;
        }
        else{
            globals.sprites_hud[0].state = State.SUPER_SAYAN3;
        }
}
function damagecalculation(sprite){
    globals.life -= sprite.damage;
}
function whenPlayerGetHit(sprite){
    sprite.physics.vy -= 150;
    

    if(sprite.physics.vx < 0){
        sprite.physics.vx += 150;
    }
    else{
        sprite.physics.vx -= 150;
    }

sprite.frames.framesPerState = 7;
sprite.frames.speed = 4;


}

function updateLevelTime(){
    globals.leveltime.timeChangeCounter += globals.deltaTime;
    if(globals.leveltime.timeChangeCounter > globals.leveltime.timeChangeValue){
        globals.leveltime.value--;
        globals.leveltime.timeChangeCounter = 0;

    }

    if(globals.leveltime.value <= 0){
        globals.leveltime.value = 0;
    }
}
function updatelifeTime(){
    globals.lifetime.timeChangeCounter += globals.deltaTime;
    if(globals.lifetime.timeChangeCounter > globals.lifetime.timeChangeValue){
        globals.lifetime.value++;
        globals.lifetime.timeChangeCounter = 0;

    }

    if(globals.lifetime.value <= 0){
        globals.lifetime.value=0;
    }
}
function updatedeadtimer(sprite){
    console.log(sprite.deadTimer.value);
    sprite.deadTimer.timeChangeCounter += globals.deltaTime;
    if(sprite.deadTimer.timeChangeCounter > sprite.deadTimer.timeChangeValue){
        sprite.deadTimer.value--;
        sprite.deadTimer.timeChangeCounter = 0;

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
        case SpriteID.SUPER_SAYAN:
            updatesupersayan(sprite);
            break;
        //Otros
        default:
            
            break;
    }
}

//Funcion que actualiza el personaje
function updateplayer(sprite){

    //Aqui actualizariamos el estado de las variables del player



      readKeyboardAndAssignState(sprite);

    switch (sprite.state){
        case State.RUNNING_RIGHT:
            sprite.physics.ax = 350;
           
            break;
        case State.RUNNING_LEFT:
                sprite.physics.ax = -350;
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
    const friction = 0.15;
        
    // Aplicar fricción en la dirección opuesta al movimiento
    sprite.physics.vx -= sprite.physics.vx * friction;
//fricion
    if (sprite.physics.isOnGround) {
        // Coeficiente de fricción (ajusta según sea necesario)

        
        // Detener completamente la velocidad si es muy pequeña
        if (Math.abs(sprite.physics.vx) < 0.1) {
            sprite.physics.vx = 0;
        }

        if(sprite.physics.vx>0){sprite.state = State.RUNNING_RIGHT;}
        else if(sprite.physics.vx < 0){sprite.state = State.RUNNING_LEFT;}
    }



sprite.physics.vy += 250 * globals.deltaTime;
// Actualizar posición en el eje y

sprite.xPos += sprite.physics.vx * globals.deltaTime;
sprite.yPos += sprite.physics.vy * globals.deltaTime;

    updateAnimationFrame(sprite);
    gameover();
    


}

function updatescore(){
    
    globals.score += globals.deltaTime * 10  ;

    if(globals.score > globals.highScore){
        globals.highScore =  globals.score;
    }
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

    sprite.physics.vy += 250 * globals.deltaTime;
// Actualizar posición en el eje y

sprite.xPos += sprite.physics.vx * globals.deltaTime;
sprite.yPos += sprite.physics.vy * globals.deltaTime;

    
    updateAnimationFrame(sprite);
    

     updateDirectionRandom(sprite);

     verifyIfSpriteIsDead(sprite);

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
        break;

        
            
     }
    
     sprite.physics.vy += 250 * globals.deltaTime;
     // Actualizar posición en el eje y
     
     sprite.xPos += sprite.physics.vx * globals.deltaTime;
     sprite.yPos += sprite.physics.vy * globals.deltaTime;
    updateAnimationFrame(sprite);
    

   calculateColision(sprite);
   verifyIfSpriteIsDead(sprite);


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

    verifyIfSpriteIsDead(sprite);


}


function updateCaballero(sprite){

const amplitud = 20;

sprite.physics.vx = -sprite.physics.vlimit;
sprite.physics.angle += sprite.physics.omega * globals.deltaTime;

sprite.xPos += sprite.physics.vx * globals.deltaTime;
sprite.yPos = sprite.physics.yRef + amplitud * Math.sin(sprite.physics.angle);
   
    


    updateAnimationFrame(sprite);

    verifyIfSpriteIsDead(sprite);


}

function updatesupersayan(sprite){
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

function updateCamera() {
    const player = globals.sprites[0];
    const brickSize = globals.level[0].imageSet.gridSize;
    const nivelAncho = 300 * brickSize;

    // Calcular la posición deseada de la cámara centrada en el jugador
    const desiredX = Math.floor(player.xPos) + Math.floor((player.imageSet.xSize - globals.canvas.width / 2));
    const desiredY = Math.floor(player.yPos) + Math.floor((player.imageSet.ySize - globals.canvas.height / 2));

    // Establecer límites para la posición de la cámara
    const minX = 0;  // Límite mínimo en el eje X
    const maxX = nivelAncho - globals.canvas.width;  // Límite máximo en el eje X

    // Ajustar la posición de la cámara dentro de los límites
    globals.camara.x = Math.max(minX, Math.min(maxX, desiredX));
    globals.camara.y = desiredY;


}

function verifyIfSpriteIsDead(sprite){
    if(sprite.isColidingHead){
// Si el sprite es First_Aid, se elimina
        updatedeadtimer(sprite);
        
        switch (sprite.id){
            case SpriteID.VILLAN: 
                break;
            case SpriteID.SKELETON:
                sprite.state = State.DEAD_ESKELETON;
                
                sprite.frames.framesPerState = 6;
                sprite.frames.speed = 18;

                break;
        }
            
    }

    if(sprite.deadTimer.value <=0){
        const indexSpriteRemove1 = globals.sprites.indexOf(sprite);
        globals.sprites.splice(indexSpriteRemove1, 1);
    }
    if(sprite.deadTimer.value === 3){
        sprite.frames.frameChangeCounter = 0;
    }

}

}

    