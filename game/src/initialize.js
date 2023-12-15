import Frames from "./Frames.js";
import ImageSet from "./ImageSet.js";
import physics from "./Physics.js";
import Sprite from "./Sprite.js";
import { FPS, Game, SpriteID, State } from "./constants.js";
import globals from "./globals.js";
import { Level, level1,menu,highScore,controls} from "./levels.js";
import Time from "./timer.js"
import Physics from "./Physics.js";
import { keyDownHandeler,keyupHandeler } from "./events.js";
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
    window.addEventListener("keydown",keyupHandeler,false);
}
function initTimers(){
    globals.leveltime = new Time(200,0.5);
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
        globals.gameState = Game.PLAYING;
        console.log("modo cambiado");
    }
}

function initSprites() {
    //Añadimos
    initplayer();
    initvillan();
    initskeleton();
    initbee();
    
    initbook();

}

function initplayer(){

    //Creamos las propiedades de las imagenes:initFil: any, initCol: any, xSize: any, ySize: any, gridSize: any, xOffset: any, yOffSet: any, imgpath: any
    const imageSet = new ImageSet(0, 0,  32, 32, 32, 0, 0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4, 3);

    const physics = new Physics(40);

    //Creamos nuestro sprite
    const player = new Sprite(SpriteID.PLAYER, State.RUNNING_RIGHT, 30, 110, imageSet, frames,physics);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(player);
}
function initvillan(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32, 30, 220,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4);

    //Creamos nuestro sprite
    const villan = new Sprite(SpriteID.VILLAN, State.IDLE, 60, 110, imageSet, frames);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(villan);
}
function initskeleton(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 32, 32, 32, 30, 340,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4);

    //Creamos nuestro sprite
    const Skeleton = new Sprite(SpriteID.SKELETON, State.IDLE, 100, 110, imageSet, frames);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(Skeleton);
}
function initbee(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 64, 40, 32, 30, 140,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4);

    //Creamos nuestro sprite
    const bee = new Sprite(SpriteID.BEE, State.STILL_RIGHT, 420, 10, imageSet, frames);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(bee);
}


function initbook(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 1920, 1080, 400, 100, 100,1);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(1);

    //Creamos nuestro sprite
    const book = new Sprite(SpriteID.BOOK, State.IDLE, 500, 10, imageSet, frames);

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


//Exportamos las funciones
export {
    initHTMLelements, initLevel, initSprites,
    initVars, loadAssets, initTimers, initEvents
};

