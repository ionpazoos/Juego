class particles{
    constructor(id,state,xPos,yPos,alpha,physics){

        this.id = id;
        this.state = state;
        this.xPos = xPos
        this.yPos = yPos;
        this.alpha = alpha;
        this.physics = physics;


    }
}

export default class ExplosionParticles extends particles
{
    constructor(id,state,xPos,yPos,alpha,physics,timeToFade){
        super(id,state,xPos,yPos,alpha,physics);

        this.fadecounter = 0;
        this.timeToFade = timeToFade;
    }
}