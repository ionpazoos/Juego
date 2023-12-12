export class Level{

    constructor(data, imageSet){

        this.data       = data;         //Array bidimensional de datos del mapa
        this.imageSet   = imageSet;     //Datos de las imagenes del mapa
    }
}

//  Datos del nivel 1
export const level1 = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 36, 37, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 61, 62, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 86, 87, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 112, 113, 13, 63, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 137, 138, 38, 88, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 162, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 110, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 457, 458, 459, 460, 4, 4, 4, 4, 134, 135, 3, 2, 2, 2, 2],
    [27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 29, 482, 483, 484, 485, 29, 29, 29, 29, 236, 237, 27, 27, 27, 27, 27],
    [52, 53, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54],
    [77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
    [77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77],
    [77, 78, 79, 79, 77, 77, 77, 77, 78, 79, 77, 78, 79, 77, 77, 77, 77, 77, 78, 77, 77, 77, 78, 77, 77, 77, 78, 77, 78, 77],
    [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 78, 77, 77, 77, 77, 78, 77, 77, 78, 79, 77, 77, 77, 78, 77]];


    export const menu = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 822, 823, 824, 0, 0, 0, 0, 0, 0, 822, 823, 824, 0, 0, 0, 0, 0, 822, 823, 824, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 847, 848, 849, 0, 0, 0, 0, 0, 0, 847, 848, 849, 0, 0, 0, 0, 0, 847, 848, 849, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 872, 873, 874, 0, 0, 0, 0, 0, 0, 872, 873, 874, 0, 0, 0, 0, 0, 872, 873, 874, 0, 0, 0, 0, 0, 0],
    [626, 627, 627, 626, 897, 898, 899, 630, 626, 627, 628, 627, 627, 897, 898, 899, 629, 630, 626, 627, 628, 897, 898, 899, 627, 628, 629, 626, 627, 628],
    [651, 652, 652, 651, 652, 653, 654, 655, 651, 652, 653, 652, 652, 653, 652, 653, 654, 655, 651, 652, 653, 654, 655, 651, 652, 653, 654, 651, 652, 653],
    [677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677,677],
    [677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677, 677,677],
];


