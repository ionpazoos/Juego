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
    GAMEOVER:   7
};

//Identificador de tipo Sprite (ID)
export const SpriteID = {
    PLAYER: 0,
    VILLAN:1,
    SKELETON:2,
    BEE:3,
    ERUDITO:4,
    BOOK: 5,
    CABALLERO:6
}

//Identificador de estado de sprite (direccion)
export const State = {

   
    IDLE: 0 ,
    IDLE_CABALLERO:59.5,
    RUNNING_RIGHT: 1,
    RUNNING_RIGHT_ESKELETON: 1.2,
    RUNNING_RIGHT_VILLAN: 58.6,
    RUNNING_LEFT: 53.1,
    RUNNING_LEFT_ESKELETON: 43.53,
    RUNNING_LEFT_VILLAN: 8.2,
    STILL_UP: 20,
    RIGHT: 3,
    STILL_DOWN: 30,
    STILL_LEFT:52.1,
    STILL_RIGHT:0,
    AIR_WIZZARD_UP:60.5,
    AIR_WIZZARD_down:61.5

}
export const Block = {
  
    GRASS: 27,
    GRASS2:29,
    // WATER: 457,
    TREE:  161,
    TREE2: 109,
    TREE3: 483,
    TREE4: 484,
    TREE5: 485,
    TREE6: 134,
    TREE7: 135,
    TREE8: 110,
    TREE9:  161,
    TREE10:  162,
    TREE11:  236,
    TREE12:  237,
    
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
LEFT:   37

}

//Velocidad del juego
export const FPS = 30;

