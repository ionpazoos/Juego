//Variables globales
import { Game } from "./constants.js";

export default {

    //Acceso al canvas y context
    canvas: {},
    ctx: {},
    canvasHUD: {},
    ctxHUD: {},

    //Estado de juego. Inicializamos a INVALIDO
    gameState: Game.INVALID,

    //Tiempo de ciclo anterior (miliseconds)
    previousCycleMilliSecons: -1,

    //Tiempo de ciclo de juego real (seconds)
    deltaTime: 0,

    //Tiempo de ciclo objetivo (seconds, constante)
    frameTimeObj: 0,

    //Caja de texto para mostrar datos de depuracion
    txtPruebas: {},

    //Datos de imagen (tileSet). Modificamos por ARRAY
    tileSets: [],

    //Variables para gestionar la carga de activos
    assetsToLoad: [],
    assetsLoaded: 0,

    //Array con todos los sprites
    sprites: [],

    // Datos del nivel
    level: [],


};