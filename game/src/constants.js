//Constants

//Estados del juego

export const Game = {
    INVALID:    -1,
    LOADING:    0,
    PLAYING:    1,
    NEWGAME:    2,
    OVER:       5,
    HISTORIA:   6,
    CONTROLS:   3,
    HIGHSCORE:  4,
    GAMEOVER:   7,
    LOADING_MENU: 8,
    LOADING_PLAY: 9,
    WIN:10,
    LOADING_HIGHSCORE:12,
    LOADING_GAMEOVER:13,
};

//Identificador de tipo Sprite (ID)
export const SpriteID = {
    PLAYER: 0,
    VILLAN:1,
    SKELETON:2,
    BEE:3,
    ERUDITO:4,
    BOOK: 5,
    CABALLERO:6,
    SUPER_SAYAN:7,
    MONEDA:8,
}

//Identificador de estado de sprite (direccion)
export const State = {

   
    IDLE: 0 ,
    IDLE_CABALLERO:59.5,
    RUNNING_RIGHT: 1,
    RUNNING_RIGHT_ESKELETON: 11.8,
    RUNNING_RIGHT_VILLAN: 58.6,
    RUNNING_LEFT: 53.1,
    RUNNING_LEFT_ESKELETON: 54.1,
    RUNNING_LEFT_VILLAN: 8.2,
    STILL_UP: 20,
    RIGHT: 3,
    STILL_DOWN: 30,
    STILL_LEFT:52.1,
    STILL_RIGHT:0,
    STILL_RIGHT_BEE:2.17,
    AIR_WIZZARD_UP:60.5,
    AIR_WIZZARD_down:61.5,
    SUPER_SAYAN3:57.4,
    SUPER_SAYAN2:56.3,
    SUPER_SAYAN1:55.2,
    DEAD_ESKELETON:62.6,
    DEAD_VILLAN:9.5,
    DEAD_BEE:2.8,
    DEAD_CABALLERO:62.6,
    MONEDA:136.73,
    DEAD: -1,

}
export const Block = {
  
    GRASS: 27,
    GRASS2:29,
    GRASS3:26,
    GRASS4:28,
    GRASS5:30,
    GRASS6:31,
    GRASS7:107,
    GRASS8:108,
  
    // WATER: 457,
    TREE:  161,
    TREE2: 109,
    TREE3: 138,
    TREE4: 38,
    TREE5: 112,
    TREE6: 134,
    TREE7: 136,
    TREE8: 111,
    TREE9:  161,
    TREE10:  162,
    TREE11:  236,
    TREE12:  237,
    TREE13:  160,
    TREE14:  235,
    TREE15:  236,
    TREE16:  135,
    TREE17:  110,
    TREE18:  85,
    TREE19:  84,
    TREE20:  60,
    TREE21:  86,
    TREE22:  61,
    TREE23:  35,
    TREE24:  36,
    TREE25:  286,
    TREE26:  287,
    TREE27:  288,
    TREE28:  289,
    TREE29:  137,
    TREE30:  138,
    BEEHOUSE:88,


    ROCK:151,
    ROCK2:152,
    ROCK3:278,
    ROCK4:253,
    ROCK6:153,
    ROCK7:154,
    ROCK8:180,
    ROCK9:205,
    ROCK10:278,
    ROCK11:178,
    ROCK12:275,
    ROCK13:276,
    ROCK14:277,
    ROCK15:279, 
    ROCK16:278,
    ROCK17:203,
    ROCK18:204,
    ROCK19:205,

    WOOD_BRIDGE:230,
    WOOD_BRIDGE2:231,
    WOOD_BRIDGE3:232,
    WOOD_BRIDGE4:233,
    WOOD_BRIDGE5:234,
    MUD1:76,
    MUD2:77,
    MUD3:78,
    MUD4:176,
    MUD5:177,
    MUD6:178,
    MUD7:51,
    MUD8:79,
    MUD9:179,

    STONE:360,
    STONE2:385,
    STONE3:410,
    STONE4:388,
    STONE5:387,

    PLATAFORMA: 155,
    PLATAFORMA1: 156,
    PLATAFORMA2: 157,
    PLATAFORMA3: 158,


    
}

export const Colisions = {
    NO_COLISIONS: -1,
    BORDER_UP: 0,
    BORDER_DOWN: 1,
    BORDER_LEFT: 2,
    BORDER_RIGHT: 3

}

//Diferentes TileSets
export const Tile = {
    SIZE_64: 0,     
    SIZE_32: 1, 
    VILLAN: 2     
}

// id de bloque del mapa
export const Key = {

UP:     38,
DOWN:   40,
RIGHT:  39,
LEFT:   37,
Space: 32,
esc:  27,

}

//Velocidad del juego
export const FPS = 30;

export const particleID = {
    GRASS: 0,
    EXPLOSION: 1,
    RAIN: 2,
    SHINE: 3,
    CONFETI:4,

}
export const particleState = {
    ON:1,
    OFF:0,
    FADE: -1

}

export const Sounds = {
    NO_SOUND: -1,     
    GAME_MUSIC: 0, 
    JUMP: 1,
    HIGHSCORE:2,
    MENU:3,
    GAMEOVER:4,
}
