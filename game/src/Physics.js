export default class Physics {
    constructor(vlimit, omega = 0, angle = 0, xRotorCenter = 100, yRotorCenter = 100, yRef = 0, jumpforce = 0,ax=0,ay=0) {
        this.vx = 0;
        this.vy = 0;
        this.ax = ax; // Aceleración en el eje x
        this.ay = ay; // Aceleración en el eje y
        this.vlimit = vlimit;

        this.omega = omega;
        this.angle = angle;
        this.xRotorCenter = xRotorCenter;
        this.yRotorCenter = yRotorCenter;

        this.yRef = yRef;

        // Salto
        this.jumpforce = jumpforce;
        this.isOnGround = true;
    }
}


