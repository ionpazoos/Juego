//Variables globales
import { Game } from "./constants.js";

export default {

    //Acceso al canvas y context
    canvas: {},
    ctx: {},
    canvasHUD: {},
    ctxHUD: {},

    cycleRealTime:0,

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
    sprites_hud: [],
    spritesMenu: [],

    // Datos del nivel
    level: {},
    levels: [],
    currentlevel: {},

    leveltime: {},
    lifetime: {},
    keytime:{},
    spawntime:{},

    action: {},

    life: 0,

    camara:{},

    particles: [],

    sounds: [],

    currentSound: -1,

    score: 0,
    highScore: 100,
    menuOptions : ["New Game", "Controls", "Story", "High Score"],
    selectedOption:0,

    //papers
    Papers:[],
    selectedPaperIndex: 0,
    zoomProgress:0.01,

    name: {} ,

    player:{},
    Players:[],
    playerName:"",
    playerId: 0,

    lastFrameTime:0,
    lastTimeSpawn: 130,

    eventpass: false,
    enemikilled:0,

    textfinished: false,



};