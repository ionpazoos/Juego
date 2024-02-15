import { Colisions } from "./constants.js";

//Clase gestora de los sprites
export default class Sprite{

    constructor(id, state, xPos, yPos, imageSet, frames,physics,hitbox,hitbox2,deadTimer){

        this.id         = id;               //Tipo de Sprite
        this.state      = state;            //Estado de animacion del sprite
        this.xPos       = xPos;             //Posicion en X en Canvas
        this.yPos       = yPos;             //Posicion en Y en Canvas
        this.imageSet   = imageSet;         //Datos de las imagenes del sprite
        this.frames     = frames;           //Datos de los frames de animacion
        this.physics    = physics; 
        this.hitbox     = hitbox;
        this.hitbox2    = hitbox2;
        this.isColisionPlayer = false;
        this.isColisionTop = false;
        this.isColisionBotton = false;
        this.isColisionLeft = false;
        this.isColisionRight = false;
        this.deadTimer = deadTimer;
        
    }


}
export class Ladron extends Sprite
{
    constructor(id,state,xPos,yPos,imageSet,frames,physics,maxTimeToChangeDirection,hitbox,damage,hitbox2,deadTimer,score)
    {
        super(id,state,xPos,yPos,imageSet,frames,physics,hitbox,hitbox2,deadTimer);

        this.directionChangeCounter = 0;
        this.maxTimeToChangeDirection = maxTimeToChangeDirection;
        this.damage = damage;
        this.score = score;
       
       
        this.isColidingHead = false;
    }
}

export class Ladron_j extends Sprite
{
    constructor(id,state,xPos,yPos,imageSet,frames,physics,hitbox,damage,hitbox2,deadTimer,score)
    {
        super(id,state,xPos,yPos,imageSet,frames,physics,hitbox,hitbox2,deadTimer);

        this.collisionBorder = Colisions.NO_COLISIONS;
        this.damage = damage;
        this.score = score;
    
        this.isColidingHead = false;
    }
}