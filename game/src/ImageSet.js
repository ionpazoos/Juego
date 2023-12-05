//Clase que gestiona el tileSet de un sprite
export default class ImageSet{

    constructor (initFil, initCol, xSize, ySize, gridSize, xOffset, yOffSet,imgpath){

        this.initFil            = initFil;      //Fila de inicio de nuestro ImageSet
        this.initCol            = initCol;      //Columna de inicio de nuestro ImageSet
        this.xSize              = xSize;        //Tamaño en pixeles de la imagen (X)
        this.ySize              = ySize;        //Tamaño en pixeles de la imagen (Y)
        this.xOffset            = xOffset;      //Offset en X de comienzo de dibujo del personaje respectivo de la rejilla
        this.yOffset            = yOffSet;      //Offset en Y de comienzo de dibujo del personaje respectivo de la rejilla
        this.gridSize           = gridSize;     //Tamaño en pixeles de la rejilla contenedora de la imagen (X e Y)
        this.imgpath            = imgpath;      //ruta de la imagen para el sprite.
    }
}