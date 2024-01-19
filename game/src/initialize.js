import Frames from "./Frames.js";
import ImageSet from "./ImageSet.js";
import physics from "./Physics.js";
import Sprite, { Ladron, Ladron_j } from "./Sprite.js";
import { FPS, Game, SpriteID, State,particleID,particleState } from "./constants.js";
import globals from "./globals.js";
import { Level, level1,menu,highScore,controls} from "./levels.js";
import Time from "./timer.js"
import Physics from "./Physics.js";
import { keyDownHandeler,keyupHandeler } from "./events.js";
import HitBox from "./Hitbox.js";
import Camera from "./camara.js";
import ExplosionParticles from "./particle.js";

//Funcion que inicializa los elementos HTML
function initHTMLelements(){

    //Canvas, context Screen
    globals.canvas = document.getElementById('gameScreen');
    globals.ctx = globals.canvas.getContext('2d');

    //Canvas, context HUD
    globals.canvasHUD = document.getElementById('gameHUD');
    globals.ctxHUD = globals.canvasHUD.getContext('2d');

    //Eliminacion del Anti-Aliasing
    globals.ctx.imageSmoothingEnabled = false;

}

//Funcion que inicializa las variables del juego
function initVars(){

    //Inicializamos las variables de gestion de tiempo
    globals.previousCycleMilliSecons = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS; //Frame time in seconds
    globals.life = 300;

    //Inicializamos el estado del juego
    globals.gameState = Game.PLAYING

    globals.action = {
        moveLeft: false,
        moveRight:false,
        moveUp:false,
        moveDown:false
    }


    
}
function initEvents(){
    window.addEventListener("keydown",keyDownHandeler,false);
    window.addEventListener("keyup",keyupHandeler,false);
}
function initTimers(){
    globals.leveltime = new Time(360,0.5);
    globals.lifetime = new Time(15,1);
    
}

//Carga de activos: TILEMAPS, IMAGES, SOUNDS
function loadAssets(){

    let tileSet;
    let sprites;

    //Load the spritesheet image index 1
    sprites = new Image();
    sprites.addEventListener("load", loadHandler, false);
    sprites.src = "./images/sprites.png"; //La ruta es relativa al HTML no al JS
    globals.tileSets.push(sprites);
    globals.assetsToLoad.push(sprites);
    

    //Load the spritesheet image index 2
    tileSet = new Image();
    tileSet.addEventListener("load", loadHandler, false);
    tileSet.src = "./images/tiles.png"; //La ruta es relativa al HTML no al JS
    globals.tileSets.push(tileSet);
    globals.assetsToLoad.push(tileSet);

   
}

//Funcion que se llama cada vez que se carga un activo
function loadHandler(){

    globals.assetsLoaded++;

    //Una ves se han cargado todos los activos pasamos
    if (globals.assetsLoaded === globals.assetsToLoad.length){

        //UPDATE.Remove the load event listener
        for (let i = 0; i < globals.tileSets.length; ++i){

            globals.tileSets[i].removeEventListener("load", loadHandler, false);
        }
        

        console.log("Assets finished loading");

        //Start the game
        globals.gameState = Game.NEWGAME;
        console.log("modo cambiado");
    }
}

function initSprites() {
if(globals.gameState === Game.PLAYING){}
    //Añadimos
    initskeleton(150);
    initbee();
    initcaballero();
    initsupersayan();
    // initbook();
}
function initSpritesNewGame(){
    initplayer();
    initvillan();
}
function initsprites260(){
    for(let i = 0;i<5;i++){
        initskeleton(100);
    }



}
function initspritespos300(){
    
        initskeleton(500);
    

}




function initplayer(){

    //Creamos las propiedades de las imagenes:initFil: any, initCol: any, xSize: any, ySize: any, gridSize: any, xOffset: any, yOffSet: any, imgpath: any
    const imageSet = new ImageSet(0, 0,  32, 32, 32, 0, -1);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(5, 4);

    const physics = new Physics(40,0,0,0,0,0,-200,0,0);
    const hitbox =  new HitBox(13,32,8,0);
    const hitbox2 =  new HitBox(13,1,8,32);
    const deadtime = new Time(3,1);

    //Creamos nuestro sprite
    const player = new Sprite(SpriteID.PLAYER, State.STILL_RIGHT, 30, 100, imageSet, frames,physics,hitbox,hitbox2,deadtime);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(player);
}
function initvillan(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32, 0, -3,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(6,3);

    const physics = new Physics(50);
    const hitbox =  new HitBox(13,25,5,7);
    const hitbox2 =  new HitBox(13,7,5,0);
    const deadtime = new Time(3,1);


    //Creamos nuestro sprite
    const villan = new Ladron_j (SpriteID.VILLAN, State.RUNNING_LEFT_VILLAN, 60, 10, imageSet, frames,physics,hitbox,50,hitbox2,deadtime);

     villan.physics.vx = 50;
   


    //Añadimos el pirata al array de sprites
    globals.sprites.push(villan);
}

function initskeleton(x){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32, 0, 0,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4,4);

    const physics = new Physics(30);
    const hitbox =  new HitBox(13,25,8,7);
    const hitbox2 =  new HitBox(13,7,5,0);
    const deadtime = new Time(3,1);

    const initTimeToChancheDirection = Math.floor(Math.random()*3)+1;

    //Creamos nuestro sprite
    const Skeleton = new Ladron(SpriteID.SKELETON, State.RUNNING_LEFT_ESKELETON, x, 0, imageSet, frames,physics,initTimeToChancheDirection,hitbox,30,hitbox2,deadtime);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(Skeleton);
}
function initbee(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 64, 40, 64, 0, 0,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(3,2);

    const initangle = 90*Math.PI * 180;
    const omega = 1.5;
    const xRotorCenter = 460;
    const yRotorCenter = 80;

    const physics = new Physics(30,omega,initangle,xRotorCenter,yRotorCenter);
    const hitbox =  new HitBox(20,15,0,23);
    const hitbox2 =  new HitBox(20,7,0,15);
    const deadtime = new Time(3,1);

    //Creamos nuestro sprite
    const bee = new Ladron_j(SpriteID.BEE, State.STILL_RIGHT_BEE, 10, 10, imageSet, frames,physics,hitbox,100,hitbox2,deadtime);



    //Añadimos el pirata al array de sprites
    globals.sprites.push(bee);
}

function initcaballero(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32,0, 0,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(3,2);

    const initangle = 90*Math.PI * 180;
    const omega = 1.5;
    const yRef = 20;

    const physics = new Physics(30,omega,initangle,0,0,yRef);
    const hitbox =  new HitBox(20,32,0,0);
    const hitbox2 =  new HitBox(13,7,5,0);
    const deadtime = new Time(3,1);

    //Creamos nuestro sprite
    const caballero = new Ladron_j(SpriteID.CABALLERO, State.IDLE_CABALLERO, 450, 15, imageSet, frames,physics,hitbox,100,hitbox2,deadtime);



    //Añadimos el pirata al array de sprites
    globals.sprites.push(caballero);
}
function initsupersayan(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32, 1, 0,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(3,3);

    const deadtime = new Time(3,1);
    //Creamos nuestro sprite
    const super_sayan = new Sprite(SpriteID.SUPER_SAYAN, State.SUPER_SAYAN1, 360, 10, imageSet, frames,0,0,0,deadtime);

    //Añadimos el pirata al array de sprites
    globals.sprites_hud.push(super_sayan);
}


function initbook(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 1920, 1080, 400, 100, 100,1);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(1);


    //Creamos nuestro sprite
    const book = new Sprite(SpriteID.BOOK, State.IDLE, 500, 10, imageSet, frames,0,0,0,0);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(book);
}
function initLevel(){

    //Creamos las propiedades de las imagenes del mapa: initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
  

                //Creamos y guardamos nuestro nivel
     const imageSet = new ImageSet(0, 0, 16, 16, 16, 0, 0,2);
    globals.level[0] = new Level(level1, imageSet);


    globals.level[1] = new Level(menu, imageSet);

    globals.level[2] = new Level(controls, imageSet);
    globals.level[3] = new Level(highScore, imageSet);

}

function initCamera(){
    globals.camara = new Camera(0,0);
}

function initparticles(){
    initExplosion();
}
function initExplosion(){
    const numparticles = 4;
    const xInit = 100;
    const yInit = 100;
    const timeToFadeMax =5;
    const alpha = 1.0;

    for(let i = 0; i< numparticles;i++){
        const velocity = Math.random()*25 + 5;
        const physics = new Physics(velocity);

        const timeToFade = timeToFadeMax * Math.random()+1;
        const particle = new ExplosionParticles(particleID.GRASS,particleState.ON,xInit,yInit,alpha,physics,timeToFade);

        const angle = 40 * Math.PI * 2;
        particle.physics.vx = particle.physics.vLimit * Math.cos(angle);
        particle.physics.vy = particle.physics.vLimit * Math.sin(angle);
        
        globals.particles.push(particle);
    }
}



//Exportamos las funciones
export {
    initHTMLelements, initLevel, initSprites,
    initVars, loadAssets, initTimers, initEvents,initCamera,initparticles,initSpritesNewGame,initsprites260,initspritespos300
};

