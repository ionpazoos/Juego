import Frames from "./Frames.js";
import ImageSet from "./ImageSet.js";
import Sprite from "./Sprite.js";
import { FPS, Game, SpriteID, State } from "./constants.js";
import globals from "./globals.js";
import { Level, level1 } from "./levels.js";

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
    globals.gameState = Game.LOADING;
}

//Carga de activos: TILEMAPS, IMAGES, SOUNDS
function loadAssets(){

    let tileSet;
    let tileSetw;
    let tileSetv;
    let tileSets;
    let tileSetb;

    //Load the spritesheet image index 1
    tileSetw = new Image();
    tileSetw.addEventListener("load", loadHandler, false);
    tileSetw.src = "./images/wizzard/idle/idle.png"; //La ruta es relativa al HTML no al JS
    globals.tileSets.push(tileSetw);
    globals.assetsToLoad.push(tileSetw);
    

    //Load the spritesheet image index 2
    tileSet = new Image();
    tileSet.addEventListener("load", loadHandler, false);
    tileSet.src = "./images/tiles.png"; //La ruta es relativa al HTML no al JS
    globals.tileSets.push(tileSet);
    globals.assetsToLoad.push(tileSet);

    //Load the spritesheet villan index 3
        tileSetv = new Image();
        tileSetv.addEventListener("load", loadHandler, false);
        tileSetv.src = "./images/rogue/idle/idle-sheet.png"; //La ruta es relativa al HTML no al JS
        globals.tileSets.push(tileSetv);
        globals.assetsToLoad.push(tileSetv);

        //Load the spritesheet villan index 4
        tileSets = new Image();
        tileSets.addEventListener("load", loadHandler, false);
        tileSets.src = "./images/SkeletonCrew/SkeletonMage/Idle/Idle-Sheet.png"; //La ruta es relativa al HTML no al JS
        globals.tileSets.push(tileSets);
        globals.assetsToLoad.push(tileSets);

        //Load the spritesheet villan index 4
        tileSetb = new Image();
        tileSetb.addEventListener("load", loadHandler, false);
        tileSetb.src = "./images/SmallBee/Fly/Fly-Sheet.png"; //La ruta es relativa al HTML no al JS
        globals.tileSets.push(tileSetb);
        globals.assetsToLoad.push(tileSetb);
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

    }
}

function initSprites() {
    //Añadimos
    initplayer();
    initvillan();
    initskeleton();
    initbee();

}

function initplayer(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 34, 60, 34, 0, 0,0);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4);

    //Creamos nuestro sprite
    const player = new Sprite(SpriteID.PLAYER, State.IDLE, 20, 110, imageSet, frames);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(player);
}
function initvillan(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 34, 60, 34, 0, 0,2);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4);

    //Creamos nuestro sprite
    const villan = new Sprite(SpriteID.VILLAN, State.IDLE, 60, 110, imageSet, frames);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(villan);
}
function initskeleton(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 34, 60, 34, 0, 0,3);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4);

    //Creamos nuestro sprite
    const Skeleton = new Sprite(SpriteID.SKELETON, State.IDLE, 100, 110, imageSet, frames);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(Skeleton);
}
function initbee(){

    //Creamos las propiedades de las imagenes: xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 64, 60, 34, 0, 0,4);

    //Creamos los datos de la animacion. 8 frames / state
    const frames = new Frames(4);

    //Creamos nuestro sprite
    const bee = new Sprite(SpriteID.BEE, State.IDLE, 400, 10, imageSet, frames);

    //Añadimos el pirata al array de sprites
    globals.sprites.push(bee);
}
function initLevel(){

    //Creamos las propiedades de las imagenes del mapa: initFil, initCol, xSize, ySize, gridSize, xOffset, yOffset
    const imageSet = new ImageSet(0, 0, 16, 16, 16, 0, 0,2);

    //Creamos y guardamos nuestro nivel
    globals.level = new Level(level1, imageSet);
}

//Exportamos las funciones
export {
    initHTMLelements, initLevel, initSprites,
    initVars, loadAssets
};

