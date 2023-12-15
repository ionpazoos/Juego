import globals from "./globals.js";

// Importamos loadAssets
import { initHTMLelements, initLevel, initSprites, initVars, loadAssets,initTimers ,initEvents} from "./initialize.js";

import update from "./gameLogic.js";
import render from "./gameRender.js";


///////////////////////////////////////////////////////////////
// GAME INIT
///////////////////////////////////////////////////////////////

window.onload = init;

function init(){

    //Inicializamos los elementos HMTL: Canvas, Context, Caja de texto de pruebas
    initHTMLelements();

    //Cargamos todos los activos: TILEMAPS, IMAGES, SOUNDS
    loadAssets();

    //Inicializamos los sprites
    initSprites();

    //Inicializacion de variables del juego
    initVars();

    //Inicializamos el mapa del juego
    initLevel();

    initTimers();

    initEvents();
    //Start the first frame request
    window.requestAnimationFrame(gameLoop);

}

//////////////////////////////////////////////////////////////
// GAME EXECUTE
//////////////////////////////////////////////////////////////

//Bucle principal de ejecucion
function gameLoop(timeStamp){

    //Keep requesting new frames
    window.requestAnimationFrame(gameLoop, globals.canvas);
    
    //Tiempo real de ciclo de ejecucion
    const elapsedCycleSeconds = (timeStamp - globals.previousCycleMilliSecons) / 1000; // seconds

    //Tiempo anterior de ciclo de ejecucion
    globals.previousCycleMilliSecons = timeStamp;

    //Variable que corrige el tiempo de frame debido a retrasos con respecto al tiempo objetivo (frameTimeObj)
    globals.deltaTime += elapsedCycleSeconds;

    // console.log(globals.deltaTime);
    // console.log("elapsed: " + elapsedCycleSeconds);
    // console.log("frame time object: " + globals.frameTimeObj);

    if (globals.deltaTime >= globals.frameTimeObj){

        //Update the game logic. gameLogic.js
        update();

        //Perform the drawing operation. gameRender.js
        render();

        //Corregimos los excesos de tiempo
        //globals.deltaTime -= globals.frameTimeObj;
        globals.deltaTime = 0;
        // console.log("DeltaTime finish: " + globals.deltaTime);
        
    }
}