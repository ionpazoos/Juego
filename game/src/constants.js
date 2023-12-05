//Constants

//Estados del juego

export const Game = {
    INVALID:    -1,
    LOADING:    0,
    PLAYING:    1,
    OVER:       2
};

//Identificador de tipo Sprite (ID)
export const SpriteID = {
    PLAYER: 0,
    VILLAN:1,
    SKELETON:2
}

//Identificador de estado de sprite (direccion)
export const State = {

   
    IDLE: 0 ,
    RUNNING: 1
}

//Diferentes TileSets
export const Tile = {
    SIZE_64: 0,     //Sprites 64 x 64
    SIZE_32: 1, 
    VILLAN: 2     //Tiles de mapa 32 x 32
}

// id de bloque del mapa
export const Block = {

}

//Velocidad del juego
export const FPS = 30;

