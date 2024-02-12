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

    action: {},

    life: 0,

    camara:{},

    particles: [],

    sounds: [],

    currentSound: -1,

    score: 50,
    highScore: 100,
    menuOptions : ["New Game", "Controls", "History", "High Score"],
    selectedOption:0,

    //papers
    Papers:[],
    selectedPaperIndex: 0,
    zoomProgress:0.01,

    story: "In the City of Evil Tongues, X.G., born into a family of blind magicians, grapples with chaotic impulses. Sent to Master Silvano, a reflective-material goldsmith, he undergoes an Alchemical Trial in the Forest of Essences. Guided by Silvano, X.G faces magical challenges, mastering potion use and enhancing his skills with rare plants. Progressing, he learns precise potion dosing, emphasizing harmony and self-control. Conquering each trial, X.G and Silvano reach a luminous core, deepening his connection to alchemical magic. The first part of his journey concludes.",

    name: {} ,

    player:[],
    Players:[],
    playerName:"",

    lastFrameTime:0,
    lastTimeSpawn: 130,



};