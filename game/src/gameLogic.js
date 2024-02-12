import { Colisions, Game, Sounds, SpriteID, State, particleID, particleState} from "./constants.js";
import globals from "./globals.js";
import  detectCollision from "./collisions.js"
import { initSprites,initExplosion, initSpritesNewGame,initRain, initvillan,initGrass,initShine, initplayers, initconfeti,initKeyEventsGameOver } from "./initialize.js";




export default function update(){

    //Change what the game is doing based on the game state
    switch(globals.gameState){

        case Game.LOADING:
            console.log("Loading assets...");
            break;

        case Game.PLAYING:
            
            playGame();
           
            break;
        case Game.LOADING_MENU:
                globals.sprites = [];
                loadNewGame();
                console.log("Loading Menu assets");
                break;
    
        case Game.LOADING_PLAY:
                loadPlaying();
                break;
        case Game.LOADING_HIGHSCORE:
                    initplayers();
              globals.sprites = [];
            globals.currentlevel = 3;
            globals.level = globals.levels[globals.currentlevel];
            globals.gameState = Game.HIGHSCORE;
                    
                break; 

        case Game.NEWGAME:
                newgame();
          
                break;
        case Game.HISTORIA:
             playhistori();
             
              break;
        case Game.HIGHSCORE:
            moveCameraRight();
            interacthigscores();
            createRandomconfetiParticle();
            updateparticles();
               
                 break; 
        case Game.CONTROLS:
           
        break;
        case Game.LOADING_GAMEOVER:
           globals.particles = [];
           globals.sprites = [];
           globals.gameState = Game.GAMEOVER;
        break;
        case Game.GAMEOVER:
        //    mostrarFormulario();
        createRandomShineParticle();
        updateparticles();
        interactgameover();
        updatekeyTime();

        break;
    

        default:
            console.error("Error: Game State invalid");
    }


function playGame(){
   
    updateSprites();
    updateLevelTime();
    updatelifeTime();
    detectCollision();
    updatelife();
    updateCamera();
    updatescore();
    updateparticles();
    playSound();
    dificulti();
    
}

function newgame(){
    
    updateSprites();
    detectCollision();
    interactMenu();
    createRandomRainParticle();
    updateparticles();
    
}
function loadPlaying(){
    restoreDefaultValues();
    console.log("Loading game...");
    globals.currentlevel = 0;
     globals.level = globals.levels[globals.currentlevel];
    initSprites();
    globals.gameState = Game.PLAYING
    console.log("GAME LOADED");
}
function playhistori(){
     interactstory();
}
function loadNewGame(){
    console.log("Ha entrado en loadNewGame");
    globals.currentlevel = 1;
    globals.level = globals.levels[globals.currentlevel];
    initSpritesNewGame();    
    globals.gameState = Game.NEWGAME;
}

function updateSprites(){
    for (let i = 0; i < globals.sprites.length; ++i){

        const sprite = globals.sprites[i];

        if(sprite.state === State.DEAD){
            const indexSpriteRemove1 = globals.sprites.indexOf(sprite);
            globals.sprites.splice(indexSpriteRemove1, 1);
        }
        else{
            updateSprite(sprite);
        }
        
        
    }

    // updateSprite(globals.sprites_hud[0]);
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
               if( globals.sprites[0].frames.frameCounter > 4){
                globals.sprites[0].frames.frameCounter = 0;
               }

            }
        }

        
    

        updatelifesprite();


    
}
 
function gameover(){

    const brickSize = globals.level.imageSet.gridSize;
    const row = Math.floor(globals.sprites[0].yPos / brickSize);

    if(globals.life <=0){
        globals.gameState = Game.LOADING_GAMEOVER;
    }
    if(row >= 30){

        globals.gameState = Game.LOADING_GAMEOVER;
            
    }
}
function mostrarFormulario() {
    document.getElementById('scoreFor').style.display = 'block';
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
    if(sprite.physics.isOnGround){
        sprite.physics.vy -= 50;
    }
   
    

    if(sprite.physics.vx < 0){
        sprite.physics.vx += 250;
    }
    else{
        sprite.physics.vx -= 250;
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
function updatekeyTime(){
    globals.keytime.timeChangeCounter += globals.deltaTime;
    if(globals.keytime.timeChangeCounter > globals.keytime.timeChangeValue){
        globals.keytime.value--;
        globals.keytime.timeChangeCounter = 0;

    }

    if(globals.keytime.value <= 0){
        globals.keytime.value=0;
    }
}
function updatedeadtimer(sprite){
    
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
            case SpriteID.MONEDA:
                // updateMoneda(sprite);
                break;
        //Otros
        default:
            
            break;
    }
}

function updateparticles(){
    for (let i = 0; i < globals.particles.length; ++i){

        const particle = globals.particles[i];
        updateParticle(particle);
    }
}
function updateParticle(particle){
    const type = particle.id;
    switch(type){
        case particleID.EXPLOSION:
            updateExplosion(particle);
            break;
        case particleID.RAIN:
                updateRainParticle(particle);
                break;
        case particleID.GRASS:
                updategrassparticle(particle);
                break;
        case particleID.SHINE:
                updateShineParticle(particle);
                break;
         case particleID.CONFETI:
                updateConfetiParticle(particle);
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
            // if(sprite.isColisionBotton){
                    initGrass((sprite.xPos - globals.camara.x ),sprite.yPos - globals.camara.y + sprite.hitbox.ySize  + sprite.hitbox2.ySize +20); 
               // } 
            break;
        case State.RUNNING_LEFT:
                sprite.physics.ax = -350;
                // if(sprite.isColisionBotton){
                    initGrass((sprite.xPos - globals.camara.x + sprite.hitbox.xSize + sprite.hitbox2.xSize),sprite.yPos - globals.camara.y + sprite.hitbox.ySize  + sprite.hitbox2.ySize +20);
                //}
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
            
           globals.sounds[Sounds.JUMP].play();
           globals.sounds[Sounds.JUMP].volume = 1;
        }

        

    }
    const friction = 0.15;
        
    // Aplicar fricción en la dirección opuesta al movimiento
    sprite.physics.vx -= sprite.physics.vx * friction;
//fricion
    if (sprite.physics.isOnGround) {
        // Coeficiente de fricción (ajusta según sea necesario)

        
        // Detener completamente la velocidad si es muy pequeña
        if (Math.abs(sprite.physics.vx) < 0.5) {
            sprite.physics.vx = 0;
        }

        if(sprite.physics.vx>0){sprite.state = State.RUNNING_RIGHT;}
        else if(sprite.physics.vx < 0){sprite.state = State.RUNNING_LEFT;}
    }



sprite.physics.vy += 250 * globals.deltaTime;
// Actualizar posición en el eje y

if(sprite.physics.vy < -300){
    sprite.physics.vy = -300
}

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
     if(sprite.isColidingHead){
        updatedeadtimer(sprite);
        if(sprite.deadTimer.value === 3 ){
            sprite.frames.frameCounter = 0;
        }
        sprite.state = State.DEAD_ESKELETON;
    
        sprite.damage = 0;
        
        sprite.frames.framesPerState = 6;
        sprite.frames.speed = 11;
    
        if(sprite.deadTimer.value <= 0){
            console.log("explosion");
            const explosionX = sprite.xPos + (sprite.hitbox.xSize/2) ;
            const explosionY = sprite.yPos + (sprite.hitbox.ySize/2) ;
            initExplosion(explosionX, explosionY);
            sprite.state = State.DEAD;
           
        }
     }



}
function interactMenu(){
    
    updatekeyTime();
    if( globals.keytime.value === 0 ){
         
        
        if(globals.action.moveUp){

            globals.selectedOption--;

        }
        else if(globals.action.moveDown){
            globals.selectedOption++;

        }

        if(globals.selectedOption > globals.menuOptions.length -1){
            globals.selectedOption = globals.menuOptions.length-1;
        }
        else if(globals.selectedOption < 0){

            globals.selectedOption = 0;

        }

        if(globals.action.space){
            if(globals.selectedOption === 0){
                globals.gameState = Game.LOADING_PLAY;
            }
            else if(globals.selectedOption === 1){
                globals.gameState = Game.CONTROLS;
            }
            else if(globals.selectedOption === 2){
                globals.gameState = Game.HISTORIA;
            }
            else if(globals.selectedOption === 3){
                globals.gameState = Game.LOADING_HIGHSCORE;
            }

            globals.sounds[Sounds.GAME_MUSIC].play();
            globals.sounds[Sounds.GAME_MUSIC].volume = 1;
        }


    }

    else{
        if( globals.action.esc){
            globals.gameState = Game.NEWGAME;
        }
    }
    globals.keytime.value = 1;

}
function interactstory(){
    updatekeyTime();
    console.log(globals.keytime.value);
    
        
        if(globals.action.moveRight){

            globals.selectedPaperIndex++;
            
        }
        
        else if(globals.action.moveLeft){
            globals.selectedPaperIndex--;

        }

       
        else if(globals.selectedPaperIndex < 0){

            globals.selectedPaperIndex = 0;

        }
        if(globals.selectedPaperIndex > 5){
            globals.selectedPaperIndex = 5;
        }
        if( globals.action.esc){
            globals.gameState = Game.NEWGAME;
        }
        
        
    
    globals.keytime.value = 1;


}
function interactgameover() {
   


    if (globals.action.esc) {
        globals.gameState = Game.LOADING_MENU;
    } else if (globals.action.space) {
        // Verificar si se han ingresado tres letras
        if (globals.playerName.length === 3) {
            // Guardar el nombre del jugador y pasar al estado de carga de los puntajes altos
            globals.gameState = Game.LOADING_HIGHSCORE;
        } else {
            console.log('Por favor, ingresa tres letras para tu nombre.');
        }
    }
    
    initKeyEventsGameOver();

   
}



function interacthigscores(){
    updatekeyTime();
    
    


        if( globals.action.esc){
            globals.gameState = Game.LOADING_MENU;
        }
    
        
    
    globals.keytime.value = 1;


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
   if(sprite.isColidingHead){
    updatedeadtimer(sprite);
    if(sprite.deadTimer.value === 3 ){
        sprite.frames.frameCounter = 0;
    
        }
    
        sprite.state = State.DEAD_VILLAN;
        sprite.physics.vx = 0;
        sprite.damage = 0;
    
        sprite.frames.framesPerState = 6;
        sprite.frames.speed = 15;
   }
   if(sprite.deadTimer.value <= 0){
    console.log("explosion");
    const explosionX = sprite.xPos + (sprite.hitbox.xSize/2) ;
    const explosionY = sprite.yPos + (sprite.hitbox.ySize/2) ;
    initExplosion(explosionX, explosionY);   
    sprite.state = State.DEAD;        
}



}

function calculateColision(sprite){
    if(sprite.xPos + sprite.imageSet.xSize > globals.canvas.width-10){
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


    

    if(sprite.isColidingHead){
        updatedeadtimer(sprite);
        if(sprite.deadTimer.value === 3 ){
            sprite.frames.frameCounter = 0;
        }

        if(sprite.isColidingHead){
            sprite.state = State.DEAD_BEE;
    
            sprite.damage = 0;
            sprite.physics.vx = 0;
            sprite.physics.vy = 0;
            sprite.physics.omega = 0;
            sprite.frames.framesPerState = 6;
            sprite.frames.speed = 11;
        
            if(sprite.deadTimer.value <= 0){
                console.log("explosion");
                const explosionX = sprite.xPos + (sprite.hitbox.xSize/2) ;
                const explosionY = sprite.yPos + (sprite.hitbox.ySize/2) ;
                initExplosion(explosionX, explosionY);   
                sprite.state = State.DEAD;        
            }
        }

    }
    updateAnimationFrame(sprite);

  

}


function updateCaballero(sprite){

const amplitud = 20;

sprite.physics.vx = -sprite.physics.vlimit;
sprite.physics.angle += sprite.physics.omega * globals.deltaTime;

sprite.xPos += sprite.physics.vx * globals.deltaTime;
sprite.yPos = sprite.physics.yRef + amplitud * Math.sin(sprite.physics.angle);
   
if(sprite.isColidingHead){
    updatedeadtimer(sprite);
    sprite.state = State.DEAD_CABALLERO;

    sprite.damage = 0;
    sprite.physics.vx = 0;
    sprite.physics.vy = 0;
    sprite.physics.omega = 0;
    sprite.frames.framesPerState = 6;
    sprite.frames.speed = 11;

    if(sprite.deadTimer.value <= 0){
        console.log("explosion");
        const explosionX = sprite.xPos + (sprite.hitbox.xSize/2) ;
        const explosionY = sprite.yPos + (sprite.hitbox.ySize/2) ;
        initExplosion(explosionX, explosionY);   
        sprite.state = State.DEAD;        
    }
}


    updateAnimationFrame(sprite);




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
function updateMoneda(sprite){
    
    verifyIfSpriteIsDead(sprite);
    updateAnimationFrame(sprite);

    
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
    const brickSize = globals.level.imageSet.gridSize;
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
function moveCameraRight(timestamp) {
    
    
    // Actualiza el tiempo del último fotograma
    globals.lastFrameTime = timestamp;

    const brickSize = globals.level.imageSet.gridSize;
    const nivelAncho = 70 * brickSize; // Ancho del nivel
    
    globals.camara.y = 20; // Ajustar la posición vertical de la cámara

    // Establecer límites para la posición de la cámara
    const minX = 0;  // Límite mínimo en el eje X
    const maxX = nivelAncho - globals.canvas.width;  // Límite máximo en el eje X

    // Calcular la posición final deseada de la cámara
    const desiredX = globals.camara.x + 1; // Mover la cámara 1 unidad a la derecha (ajustar la velocidad aquí)

    // Definir la velocidad de desplazamiento de la cámara (muy lenta)
    const cameraSpeed = 1; // Puedes ajustar esta velocidad según tus necesidades

    // Calcular el nuevo valor de la posición de la cámara
    globals.camara.x += cameraSpeed;

    // Ajustar la posición de la cámara dentro de los límites
    globals.camara.x = Math.max(minX, Math.min(maxX, globals.camara.x));

    // Verificar si se alcanzó la posición final deseada
    if (globals.camara.x >= desiredX) {
        // Detener el movimiento de la cámara
        return;
    }

    // Solicitar el siguiente fotograma de animación
    requestAnimationFrame(moveCameraRight);
}

function updateExplosion(particle){

    particle.fadeCounter += globals.deltaTime;

    switch(particle.state){
        case particleState.ON:
            if(particle.fadeCounter > particle.timeToFade ){
                particle.fadeCounter = 0;
                particle.state = particleState.FADE;
            } 
            break;

        case particleState.FADE:
            particle.alpha -= 0.25;

            if(particle.alpha <= 0){
                particle.state = particleState.OFF;
            }
            break;

        case particleState.OFF:
            const indexSpriteRemove1 = globals.particles.indexOf(particle);
            globals.particles.splice(indexSpriteRemove1, 1);
            break;
            default:
    }

   
   
    particle.physics.vx += particle.physics.ax * globals.deltaTime;
    particle.physics.vy += particle.physics.ay * globals.deltaTime;
    const velModule = Math.sqrt(Math.pow(particle.physics.vx,2) + Math.pow(particle.physics.vy,2));

    if(velModule < 1 ){
        particle.physics.vx = 0;
        particle.physics.vy = 0;

    }

    particle.xPos += (particle.physics.vx * globals.deltaTime);
    particle.yPos += (particle.physics.vy * globals.deltaTime);




}

function updategrassparticle(particle){
    particle.fadeCounter += globals.deltaTime;

    switch(particle.state){
        case particleState.ON:
            if(particle.fadeCounter > particle.timeToFade ){
                particle.fadeCounter = 0;
                particle.state = particleState.FADE;
            } 
            break;

        case particleState.FADE:
            particle.alpha -= 0.25;

            if(particle.alpha <= 0){
                particle.state = particleState.OFF;
            }
            break;

        case particleState.OFF:
            const indexSpriteRemove1 = globals.particles.indexOf(particle);
            globals.particles.splice(indexSpriteRemove1, 1);
            break;
            default:
    }
    particle.physics.vx += particle.physics.ax * globals.deltaTime;
    particle.physics.vy += particle.physics.ay * globals.deltaTime;

    particle.xPos += (particle.physics.vx * globals.deltaTime);
    particle.yPos += (particle.physics.vy * globals.deltaTime);



}

function restoreDefaultValues() {
    globals.leveltime.value     = 140
    globals.leveltime.timeChangeCounter = 0

    globals.sprites             = []

    globals.life                = 300

    globals.score               = 0

    globals.particles           = []

    globals.level               = []
}
function playSound(){
    if(globals.currentSound != Sounds.NO_SOUND)
    {
        globals.sounds[globals.currentSound].currentTime = 0;
        globals.sounds[globals.currentSound].play();

        globals.currentSound = Sounds.NO_SOUND;


    }
}

function  updateRainParticle(particle){

    particle.fadeCounter += globals.deltaTime;

    switch(particle.state){
        case particleState.ON:
            if(particle.fadeCounter > particle.timeToFade ){
                particle.fadeCounter = 0;
                particle.state = particleState.FADE;
            } 
            break;

        case particleState.FADE:
            particle.alpha -= 0.25;

            if(particle.alpha <= 0){
                particle.state = particleState.OFF;
            }
            break;

        case particleState.OFF:
            const indexSpriteRemove1 = globals.particles.indexOf(particle);
            globals.particles.splice(indexSpriteRemove1, 1);
            break;
            default:
    }
    particle.physics.vy += particle.physics.ay * globals.deltaTime;


    particle.yPos += (particle.physics.vy * globals.deltaTime);
}
function  updateConfetiParticle(particle){

    particle.fadeCounter += globals.deltaTime;

    switch(particle.state){
        case particleState.ON:
            if(particle.fadeCounter > particle.timeToFade ){
                particle.fadeCounter = 0;
                particle.state = particleState.FADE;
            } 
            break;

        case particleState.FADE:
            particle.alpha -= 0.25;

            if(particle.alpha <= 0){
                particle.state = particleState.OFF;
            }
            break;

        case particleState.OFF:
            const indexSpriteRemove1 = globals.particles.indexOf(particle);
            globals.particles.splice(indexSpriteRemove1, 1);
            break;
            default:
    }

    particle.physics.vy += particle.physics.ay * globals.deltaTime;
    particle.yPos += (particle.physics.vy * globals.deltaTime);

       // Mover la partícula de lado a lado con una oscilación más lenta en el eje X
       const swayAmount = 10; // Ajusta este valor según lo deseado para el balanceo
       const swaySpeed = 0.2; // Ajusta este valor para controlar la velocidad de la oscilación en X, cuanto menor, más lento
       particle.xPos += Math.sin(particle.yPos * 0.1) * swayAmount * swaySpeed;
}
function  updateShineParticle(particle){

    particle.fadeCounter += globals.deltaTime;

    switch(particle.state){
        case particleState.ON:
            if(particle.fadeCounter > particle.timeToFade ){
                particle.fadeCounter = 0;
                particle.state = particleState.FADE;
            } 
            break;

        case particleState.FADE:
            particle.alpha -= 0.25;

            if(particle.alpha <= 0){
                particle.state = particleState.OFF;
            }
            break;

        case particleState.OFF:
            const indexSpriteRemove1 = globals.particles.indexOf(particle);
            globals.particles.splice(indexSpriteRemove1, 1);
            break;
            default:
    }
    particle.physics.vy += particle.physics.ay * globals.deltaTime;


    particle.yPos += (particle.physics.vy * globals.deltaTime);
}

function createRandomRainParticle() {
    const xPos = Math.random() * globals.canvas.width; // Posición x aleatoria
    const yPos = 0; // Siempre desde la parte superior del lienzo
      initRain(xPos, yPos);

     
}

function createRandomShineParticle() {
    const xPos = (Math.random() * globals.canvas.width); // Posición x aleatoria
    const yPos = globals.canvas.height; // Siempre desde la parte superior del lienzo
      initShine(xPos, yPos);
}

function createRandomconfetiParticle() {
    const xPos = (Math.random() * 1100 ); // Posición x aleatoria
    const yPos = 20; // Siempre desde la parte superior del lienzo
      initconfeti(xPos, yPos);

     
}

function dificulti(){
     
    
    if((globals.lastTimeSpawn - 10) === globals.leveltime.value){
        
        initvillan(globals.sprites[0].xPos + 100,globals.sprites[0].xPos - 30);
        globals.lastTimeSpawn = globals.leveltime.value;
        console.log("spawn")
    }

    if(globals.sprites[0].xPos > 200){
        
        //por completar
    }
}
}




    