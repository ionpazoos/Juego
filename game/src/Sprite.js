//Clase gestora de los sprites
export default class Sprite{

    constructor(id, state, xPos, yPos, imageSet, frames,physics){

        this.id         = id;               //Tipo de Sprite
        this.state      = state;            //Estado de animacion del sprite
        this.xPos       = xPos;             //Posicion en X en Canvas
        this.yPos       = yPos;             //Posicion en Y en Canvas
        this.imageSet   = imageSet;         //Datos de las imagenes del sprite
        this.frames     = frames;           //Datos de los frames de animacion
        this.physics    = physics; 
    }
}