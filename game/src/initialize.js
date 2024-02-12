import Frames from "./Frames.js";
import ImageSet from "./ImageSet.js";
import Sprite, { Ladron, Ladron_j } from "./Sprite.js";
import { FPS, Game, Sounds, SpriteID, State,particleID,particleState } from "./constants.js";
import globals from "./globals.js";
import { Level, level1,menu,highScore,controls, level2} from "./levels.js";
import Time from "./timer.js"
import Physics from "./Physics.js";
import { keyDownHandeler,keyupHandeler,updateMusic,handleKeyPressAZ } from "./events.js";
import HitBox from "./Hitbox.js";
import Camera from "./camara.js";
import {ExplosionParticles,particles} from "./particle.js";
import Jugador from "./highscore.js";
import {cargarMejoresPuntuaciones,enviarPuntuacion} from "./serverconnection.js";




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
    globals.gameState = Game.LOADING_MENU;

    globals.action = {
        moveLeft: false,
        moveRight:false,
        moveUp:false,
        moveDown:false
    }

    globals.currentSound = Sounds.NO_SOUND;


    
}
function initEvents(){
    window.addEventListener("keydown",keyDownHandeler,false);
    window.addEventListener("keyup",keyupHandeler,false);

        // Agrega un EventListener al botón
        document.getElementById('enviarPuntuacionButton').addEventListener('click', function() {
            console.log("click");
            // Llamada a la función enviarPuntuacion
            enviarPuntuacion();
        });

    
}

function initKeyEventsGameOver(){
    document.addEventListener('keydown', function(event) {
        handleKeyPressAZ(event.key);
        console.log(event.key);
    });
}
function initTimers(){
    globals.leveltime = new Time(360,0.5);
    globals.lifetime = new Time(15,1);
    globals.keytime = new Time(1,0.08);
    globals.villantime = new Time(10,1);
    
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

    let gameMusic = document.querySelector('#gameMusic');
    gameMusic.addEventListener("canplaytrhough",loadHandler,false);
    gameMusic.addEventListener("timeupdate",updateMusic,false);
    gameMusic.load();
    globals.sounds.push(gameMusic);
    globals.assetsToLoad.push(gameMusic);

    let jumpSound = document.querySelector('#jumpSound');
    jumpSound.addEventListener("canplaytrhough",loadHandler,false);
    jumpSound.addEventListener("timeupdate",updateMusic,false);
    jumpSound.load();
    globals.sounds.push(jumpSound);
    globals.assetsToLoad.push(jumpSound);

   
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

        for (let i = 0; i < globals.sounds.length; ++i){

            globals.sounds[i].removeEventListener("canplaythrough", loadHandler, false);
        }
        

        console.log("Assets finished loading");

        //Start the game
        globals.gameState = Game.LOADING_MENU;
        console.log("modo cambiado");



    }
}

function initSprites() {
    //funcion para iniciar sprites del playing
    initplayer();
    initskeleton(150);
    initskeleton(2600);
    initbee();
    initcaballero();
    initsupersayan();
    initvillan(800);
    initvillan(2000);
    // initmoneda();
}
function initSpritesNewGame(){
    initvillan(60);
    
}


function initplayer(){

    //Creamos las propiedades de las imagenes:initFil: any, initCol: any, xSize: any, ySize: any, gridSize: any, xOffset: any, yOffSet: any, imgpath: any
    const imageSet = new ImageSet(0, 0,  32, 32, 32, 0, -1);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(5, 4);

    const physics = new Physics(40,0,0,0,0,0,0,-200,0,0);
    const hitbox =  new HitBox(13,32,8,0);
    const hitbox2 =  new HitBox(13,1,8,32);
    const deadtime = new Time(3,1);

    //Creamos nuestro sprite
    const player = new Sprite(SpriteID.PLAYER, State.STILL_RIGHT, 30, 100, imageSet, frames,physics,hitbox,hitbox2,deadtime);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(player);
}
function initmoneda(){

    //Creamos las propiedades de las imagenes:initFil: any, initCol: any, xSize: any, ySize: any, gridSize: any, xOffset: any, yOffSet: any, imgpath: any
    const imageSet = new ImageSet(0, 0,  15, 15, 15, 0, 0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4, 4);
    
    const hitbox =  new HitBox(15,15,0,0);
    const deadtime = new Time(3,1);

    //Creamos nuestro sprite
    const Moneda = new Ladron_j(SpriteID.MONEDA, State.MONEDA, 1590, 100, imageSet, frames,0,0,-50,hitbox,deadtime);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(Moneda);
}
function initvillan(x){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32, 0, -3,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(6,3);

    const physics = new Physics(50);
    const hitbox =  new HitBox(13,25,5,7);
    const hitbox2 =  new HitBox(13,7,5,0);
    const deadtime = new Time(3,1);


    //Creamos nuestro sprite
    const villan = new Ladron_j (SpriteID.VILLAN, State.RUNNING_LEFT_VILLAN, x, 5, imageSet, frames,physics,hitbox,50,hitbox2,deadtime);

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
    const hitbox2 =  new HitBox(13,7,8,0);
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

    const physics = new Physics(30,0,omega,initangle,xRotorCenter,yRotorCenter);
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
    const yRef = 100;

    const physics = new Physics(30,0,omega,initangle,0,0,yRef);
    const hitbox =  new HitBox(20,25,0,7);
    const hitbox2 =  new HitBox(13,7,5,0);
    const deadtime = new Time(3,1);

    //Creamos nuestro sprite
    const caballero = new Ladron_j(SpriteID.CABALLERO, State.IDLE_CABALLERO, 1250, 105, imageSet, frames,physics,hitbox,100,hitbox2,deadtime);



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

function initLevel(){

    //Creamos las propiedades de las imagenes del mapa: initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
  

                //Creamos y guardamos nuestro nivel
     const imageSet = new ImageSet(0, 0, 16, 16, 16, 0, 0,2);
    globals.levels[0] = new Level(level1, imageSet);
    globals.levels[1] = new Level(menu, imageSet);
    globals.levels[2] = new Level(controls, imageSet);
    globals.levels[3] = new Level(highScore, imageSet);
    globals.levels[4] = new Level(level2, imageSet);

}

function initCamera(){
    globals.camara = new Camera(0,0);
}

function initExplosion(x,y){
    const numparticles = 300;
    const xInit = x;
    const yInit = y;
    const radius = 1;
    const timeToFadeMax = 2;
    const alpha = 1.0;

    for(let i = 0; i< numparticles;i++){
        const velocity = Math.random()*25 + 5;
        const aceleration = 2;
        const physics = new Physics(velocity,aceleration);

    

        const timeToFade = timeToFadeMax;
        const particle = new ExplosionParticles(particleID.EXPLOSION,particleState.ON,xInit,yInit,radius,alpha,physics,timeToFade);

        const angle = Math.random() * Math.PI * 2;
        particle.physics.vx = particle.physics.vlimit * Math.cos(angle);
        particle.physics.vy = particle.physics.vlimit * Math.sin(angle);
        
        particle.physics.ax = particle.physics.aLimit * Math.cos(angle);
        particle.physics.ay = 100;
        
        globals.particles.push(particle);
    }
}


function initRain(x,y){
    const velocity = Math.random()*25 + 5;
    const aceleration = 200;
    const timeToFade = 1;
    const physics = new Physics(velocity,aceleration);
    const particle = new ExplosionParticles(particleID.RAIN,particleState.ON , x, y, 0.5, 1,physics,timeToFade);

    
    particle.physics.vy = particle.physics.vlimit;
        
   
    particle.physics.ay = particle.physics.aLimit;
    
    globals.particles.push(particle);
}
function initconfeti(x,y){
    const velocity = Math.random()*25 + 5;
    const aceleration = 200;
    const timeToFade = 10;
    const physics = new Physics(velocity,aceleration);
    const particle = new ExplosionParticles(particleID.CONFETI,particleState.ON , x, y, 0.5, 1,physics,timeToFade);

    
    particle.physics.vy = particle.physics.vlimit;
        
   
    particle.physics.ay = particle.physics.aLimit;
    
    globals.particles.push(particle);
}
function initShine(x,y){
    const velocity = Math.random()*25 + 5;
    const aceleration = 200;
    const timeToFade = 5;
    const physics = new Physics(velocity,aceleration);
    const particle = new ExplosionParticles(particleID.SHINE,particleState.ON , x, y, 0.5, 1,physics,timeToFade);

    
    particle.physics.vy = particle.physics.vlimit;
        
   
    particle.physics.ay = -particle.physics.aLimit;
    
    globals.particles.push(particle);
}

function initGrass(x,y){

    const velocity =- Math.random()* 60 + 5;
    const aceleration = 100;
    const timeToFade = 0.6;
    const physics = new Physics(velocity,aceleration);
    const particle = new ExplosionParticles(particleID.GRASS,particleState.ON , x, y, 0.5, 1,physics,timeToFade);

    
    particle.physics.vy = particle.physics.vlimit;
        
   console.log(globals.particles.length);
    particle.physics.ay = particle.physics.aLimit;
    
    globals.particles.push(particle);

}

async function initplayers() {
    try {
        // Espera a que se resuelva la promesa devuelta por cargarMejoresPuntuaciones()
        const playersinfo = await cargarMejoresPuntuaciones();
        
        console.log(playersinfo);

        // Itera sobre los datos de los puntajes recibidos y crea objetos Jugador
        for (let i = 0; i < playersinfo.length; i++) {
            const jugadorData = playersinfo[i];
            console.log(playersinfo[i]);
            const jugador = new Jugador(0, jugadorData.player_name, jugadorData.best_score);
            // Agrega el jugador creado al arreglo de jugadores
            globals.Players.push(jugador);
        }
        
        console.log(globals.Players); // Asegúrate de que los jugadores se hayan agregado correctamente
    } catch (error) {
        console.error('Error al inicializar los jugadores:', error);
    }
}



//Exportamos las funciones
export {
    initHTMLelements, initLevel, initSprites,
    initVars, loadAssets, initTimers, initEvents,initCamera,initSpritesNewGame,
    initcaballero,initskeleton,initvillan,initExplosion,initRain,initGrass,initShine,initplayers,initconfeti,initKeyEventsGameOver
};

