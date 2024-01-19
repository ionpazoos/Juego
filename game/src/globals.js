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
    sprites_hud: [],
    spritesMenu: [],

    // Datos del nivel
    level: [],

    leveltime: {},
    lifetime: {},

    action: {},

    life: 0,

    camara:{},

    particles: [],

    score: 50,
    highScore: 100,
    menuOptions : ["New Game", "Controls", "History", "High Score"],
    selectedOption:0,

    //papers
    Papers:[],
    selectedPaperIndex: 0,
    zoomProgress:0.01,

    story: "In the City of Evil Tongues, the heir to a family of blind magicians is born, the wise X.G.. From childhood, his psychotic impulses appear, creating chaos around him. Worried about his lack of control, the elders of the family send X.G to an old master, known as Master Silvano, an expert in reflective material goldsmithing.Master Silvanus, instead of taking X.G to the Labyrinth of Evil Tongues, shows another option: the Alchemical Trial in the Forest of Essences. This magical forest is filled with enchanted creatures and rare plants, each with unique alchemical properties.Guided by Master Silvano, X.G must use his alchemical skills to overcome series of challenges. Instead of dealing with illusions in the maze, he now encounters magical creatures that require the proper use of his potions to calm or neutralize them. He also finds plants that can help him strengthen his skills or create new policies. As he progresses, X.G learns to dose his potions with precision, finding the perfect balance to maintain harmony in and out of the forest. Master Silvanus advises him on the importance of understanding the nature of each creature and plant, as well as the need for self-control when manipulating alchemical magic. Finally, after overcoming each alchemical challenge, X.G and Master Silvanus reach a light in the heart of the Forest of Essences. Here, X.G feels a deeper connection to alchemical magic and renewed emotional clarity. It is in this quiet place that the first part of his journey ends, and the next stage of his odyssey begins there.",




};