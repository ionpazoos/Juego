export default class Frames {

    constructor(framesPerState,speed = 1){

        this.framesPerState     = framesPerState;   //Numero de frames por estado de animacion
        this.frameCounter       = 0;                //Contador de frames
        this.speed              = speed;
        this.frameChangeCounter = 0;
    }   


}