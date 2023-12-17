export default class Physics
{
    constructor(vlimit,omega = 0, angle = 0, xRotorCenter = 100,yRotorCenter = 100)
    {
        this.vx     = 0;
        this.vy     = 0;
        this.vlimit = vlimit;

        this.omega = omega;
        this.angle = angle;
        this.xRotorCenter = xRotorCenter;
        this.yRotorCenter = yRotorCenter;
    }
}

