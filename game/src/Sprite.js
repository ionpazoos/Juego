import { Colisions } from "./constants.js";

//Clase gestora de los sprites
export default class Sprite{

    constructor(id, state, xPos, yPos, imageSet, frames,physics,hitbox){

        this.id         = id;               //Tipo de Sprite
        this.state      = state;            //Estado de animacion del sprite
        this.xPos       = xPos;             //Posicion en X en Canvas
        this.yPos       = yPos;             //Posicion en Y en Canvas
        this.imageSet   = imageSet;         //Datos de las imagenes del sprite
        this.frames     = frames;           //Datos de los frames de animacion
        this.physics    = physics; 
        this.hitbox     = hitbox;
        this.isColisionPlayer = false;
    }


}
export class Ladron extends Sprite
{
    constructor(id,state,xPos,yPos,imageSet,frames,physics,maxTimeToChangeDirection,hitbox)
    {
        super(id,state,xPos,yPos,imageSet,frames,physics,hitbox);

        this.directionChangeCounter = 0;
        this.maxTimeToChangeDirection = maxTimeToChangeDirection;
    }
}

export class Ladron_j extends Sprite
{
    constructor(id,state,xPos,yPos,imageSet,frames,physics,hitbox)
    {
        super(id,state,xPos,yPos,imageSet,frames,physics,hitbox);

        this.collisionBorder = Colisions.NO_COLISIONS;
    }
}