import globals from "./globals.js";
import {Block,State} from "./constants.js"

function rectIntersect(x1,y1,w1,h1,x2,y2,w2,h2){
    let isOverlap;

    if(x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 +y2 ){
        isOverlap = false;
    }
    else{
        isOverlap = true;
    }

    return isOverlap;
}

export default function detectCollision(){
    for(let i = 1; i < globals.sprites.length;i++){
        const sprite = globals.sprites[i];
        detectCollisionBetweenPlayerAndSprites(sprite);
        
    }
    detectCollisionBetweenPlayerAndObstacles();
    
    
}
function getMapTiled(xPos, yPos) {
    const brickSize = globals.level[0].imageSet.gridSize;
    const levelData = globals.level[0].data;

    // Calculate the grid position based on player's position
    const col = Math.floor(xPos / brickSize);
    const row = Math.floor(yPos / brickSize);



    // Check if the grid position is within bounds
    if (row >= 0 && row < levelData.length && col >= 0 && col < levelData[0].length) {
        return levelData[row][col];
    } else {
        console.error("Player is out of bounds or level data is incorrect.");
        return undefined; // or handle the case appropriately based on your needs
    }
}


function isCollidingWithObstacleAt(xPos, yPos, obstacleId){

    let isColliding;

    const id = getMapTiled(xPos, yPos);

    console.log(id);

    //Calculamos colision con bloque de tierra de la izquierda
    if (id === obstacleId){
        isColliding = true;
        
    }
    else{
        isColliding = false;
    }

    return isColliding;
}


function detectCollisionBetweenPlayerAndObstacles(){

    const player = globals.sprites[0];

    //Variables to use
    let xPos;
    let yPos;
    let isCollidingOnPos1; //Arriba derecha
    let isCollidingOnPos2; //Abajo derecha
    let isCollidingOnPos3; //Abajo izquierda
    let isCollidingOnPos4; //Arriba izquierda

    const brickSize = globals.level[0].imageSet.gridSize;

    //Obtener la cantidad de bloques
    const blockIDs = Object.values(Block);
    const totalObstacles = blockIDs.length;

    //Reset collision state
    player.isCollidingWithObstacleOnTheBottom   = false;
    player.isCollidingWithObstacleOnTheRight    = false;
    player.isCollidingWithObstacleOnTheLeft     = false;
    player.isCollidingWithObstacleOnTheTop      = false;

    // Colisiones (4 puntos posibles)
    // 4----------------1
    // ------------------
    // ------------------
    // 3----------------2

    let overlapX;
    let overlapY;

    //Un for para recorrer todos los bloques del TileSet
    
    //Calculamos colisiones en los 4 puntos

for (let i = 0; i < totalObstacles; ++i){
    const obstacleId = blockIDs[i] ;

    if (player.physics.vx >= 0){ //Movimiento derecha

        //Punto 4
        //Primera coloision en (xPos, yPos)
        xPos = player.xPos + player.hitbox.xOffset;
        yPos = player.yPos + player.hitbox.yOffset;
        isCollidingOnPos4 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);

        if (isCollidingOnPos4){ //Hay colision en punto 4

            //Su trata de una esquina. Puede haber overLap en X y en Y

            //Calculamos overlap solo en Y
            overlapY = brickSize - Math.floor(yPos) % brickSize;

            //Colision en eje Y
            player.yPos += overlapY;
            player.physics.vy = 0;

        }

        //Punto 3
        //Ultima colision en (xPos, yPos + ySize -1)
        xPos = player.xPos + player.hitbox.xOffset;
        yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
        isCollidingOnPos3 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);
        
        if (isCollidingOnPos3){ //Hay colision en punto 3

            //Se trata de una esquina. Puede haber overLap en X y en Y

            //Calculamos overlap solo en Y
            overlapY = Math.floor(yPos) % brickSize;

            //Colision en eje Y
            player.yPos -= overlapY;
            player.isCollidingWithObstacleOnTheBottom = true;
            player.physics.vy = 0;
            player.physics.isOnGround = true;

           
        }


        //Punto 1
        //Vemos si hay colision en (xPos + xSize - 1, yPos)
        xPos = player.xPos + player.hitbox.xOffset + player.hitbox.xSize - 1;
        yPos = player.yPos + player.hitbox.yOffset;
        isCollidingOnPos1 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);

        if (isCollidingOnPos1){ //Hay colision en punto 1

            //Se trata de una esquina. Puede haber overLap en X y en Y

            //Calculamos overLap en X y en Y con el player
            overlapX = Math.floor(xPos) % brickSize + 1;
            overlapY = brickSize - Math.floor(yPos) % brickSize;

            if (overlapX <= overlapY){
                
                //Colision en eje X
                player.xPos -= overlapX;
                player.physics.vx = 0;

            } else {

                //Colision en eje Y
                if (player.physics.vy > 0){

                    player.yPos += overlapY;

                } else {

                    player.yPos += overlapY;
                     player.physics.vy = 0;
                }
            }
        }

        //Punto 2
        //Vemos si hay colision en (xPos + xSize - 1, yPos + ySize - 1)
        xPos = player.xPos + player.hitbox.xOffset + player.hitbox.xSize - 1;
        yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
        isCollidingOnPos2 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);

        // console.log("Abajo derecha hacia la derecha: " +isCollidingOnPos2);
        if (isCollidingOnPos2) { // Hay colision en punto 2

            // Se trata de una esquina. Puede haber overlap en X y en Y

            // Calculamos overLap en X y en Y con el player
            overlapX = brickSize - Math.floor(xPos) % brickSize;
            overlapY = Math.floor(yPos) % brickSize;

            if (overlapX <= overlapY) {
                
                // Colision en eje X

                player.xPos += overlapX;
                player.physics.vx = 0;
            } else {

                // Colision en eje Y
                if (player.physics.vy > 0) {

                    player.yPos -= overlapY;

                } else {
                    player.yPos -= overlapY;
                    // player.physics.vy = 0;
        
                }
            }
        }

    }
    else { // Movimiento izquierda

        // Punto 1
        // Vemos si hay colisión en (xPos - 1, yPos)
        xPos = player.xPos + player.hitbox.xOffset + player.hitbox.xSize - 1;
        yPos = player.yPos + player.hitbox.yOffset;
        isCollidingOnPos1 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);

        if (isCollidingOnPos1){ //Hay colision en punto 1

            //Su trata de una esquina. Puede haber overLap en X y en Y
            //Calculamos overlap solo en Y
            overlapY = brickSize - Math.floor(yPos) % brickSize;

            //Colision en eje Y
            player.yPos += overlapY;
            player.physics.vy = 0;

        }

        // Punto 2
        xPos = player.xPos + player.hitbox.xOffset + player.hitbox.xSize - 1;
        yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
        isCollidingOnPos2 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);

        if (isCollidingOnPos2){ //Hay colision en punto 3

            //Se trata de una esquina. Puede haber overLap en X y en Y

            //Calculamos overlap solo en Y
            overlapY = Math.floor(yPos) % brickSize;

            //Colision en eje Y
            player.yPos -= overlapY;
            player.isCollidingWithObstacleOnTheBottom = true;
            player.physics.vy = 0;
            player.physics.isOnGround = true;
        }


        // Punto 3
        xPos = player.xPos + player.hitbox.xOffset;
        yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
        isCollidingOnPos3 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);

        if (isCollidingOnPos3) { // Hay colision en punto 3

            // Se trata de una esquina. Puede haber overlap en X y en Y

            // Calculamos overLap en X y en Y con el player
            overlapX = brickSize - Math.floor(xPos) % brickSize + 1;
            overlapY = Math.floor(yPos) % brickSize;

            if (overlapX <= overlapY) {
                
                // Colision en eje X

                player.xPos += overlapX;
                player.physics.vx = 0;
            } else {

                // Colision en eje Y
                if (player.physics.vy > 0) {

                    player.yPos += overlapY;

                } else {
                    player.yPos -= overlapY;
                    player.physics.vy = 0;
                }
                player.physics.isOnGround = true; 
            }
        }


        // Punto 4
        xPos = player.xPos + player.hitbox.xOffset;
        yPos = player.yPos + player.hitbox.yOffset;
        isCollidingOnPos4 = isCollidingWithObstacleAt(xPos, yPos, obstacleId);

        if (isCollidingOnPos4){ //Hay colision en punto 4

            //Se trata de una esquina. Puede haber overLap en X y en Y

            //Calculamos overLap en X y en Y con el player
            overlapX = brickSize - Math.floor(xPos) % brickSize + 1;
            overlapY = brickSize - Math.floor(yPos) % brickSize;
            
            if (overlapX <= overlapY){
                
                //Colision en eje X
                player.xPos += overlapX;
                player.physics.vx = 0;

            } else {

                //Colision en eje Y
                if (player.physics.vy > 0){

                    player.yPos -= overlapY;

                } else {

                    player.yPos += overlapY;
                    player.physics.vy = 0;
                }
            }
        }

    }

}
if(player.isCollidingWithObstacleOnTheBottom){
    player.physics.isOnGround = true;
}
}

function applyPhysics(sprite) {
    const gravity = 0.5;  // Puedes ajustar este valor según tus necesidades

    // Gravedad
    sprite.physics.vy += gravity;

    // Aplicar velocidad vertical
    sprite.yPos += sprite.physics.vy;

    // Aplicar velocidad horizontal
    sprite.xPos += sprite.physics.vx;

    // Detección de colisiones con el suelo y las paredes
    // detectCollisionBetweenSpriteAndMap(sprite);
}

function detectCollisionBetweenSpriteAndMap(sprite) {
    const brickSize = globals.level[0].imageSet.gridSize;
    const obstacleId = Block.WALL;  // Puedes ajustar esto según tus necesidades

    // Obtener la posición del sprite en la cuadrícula del mapa
    const col = Math.floor(sprite.xPos / brickSize);
    const row = Math.floor(sprite.yPos / brickSize);

    // Detección de colisiones con el suelo
    const tileBelow = getMapTiled(sprite.xPos, sprite.yPos + sprite.hitbox.yOffset + sprite.hitbox.ySize);
    if (tileBelow === obstacleId) {
        sprite.isCollisionBottom = true;
        sprite.yPos -= sprite.physics.vy; // Retroceder para evitar la colisión
        sprite.physics.vy = 0; // Detener la velocidad vertical
    }

    // Detección de colisiones con las paredes
    const tileLeft = getMapTiled(sprite.xPos + sprite.hitbox.xOffset, sprite.yPos + sprite.hitbox.yOffset);
    const tileRight = getMapTiled(sprite.xPos + sprite.hitbox.xOffset + sprite.hitbox.xSize, sprite.yPos + sprite.hitbox.yOffset);
    
    if (tileLeft === obstacleId || tileRight === obstacleId) {
        sprite.isCollisionWall = true;
        sprite.xPos -= sprite.physics.vx; // Retroceder para evitar la colisión
        sprite.physics.vx = 0; // Detener la velocidad horizontal
    }
}

export function updateSprites() {
    for (let i = 1; i < globals.sprites.length; i++) {
        const sprite = globals.sprites[i];

        // Realizar la detección de colisiones con el jugador
        detectCollisionBetweenPlayerAndSprites(sprite);

        // Aplicar físicas a los sprites
        applyPhysics(sprite);
    }

    detectCollisionBetweenPlayerAndObstacles();
}

function detectCollisionBetweenPlayerAndSprites(sprite){

    sprite.isColisionPlayer = false;

    const player = globals.sprites[0];

    //datos player principal

    const x1 = player.xPos + player.hitbox.xOffset;
    const y1 = player.yPos + player.hitbox.yOffset;
    const h1 = player.hitbox.ySize;
    const w1 = player.hitbox.xSize;

    //datos de los demas sprites

    const x2 = sprite.xPos + sprite.hitbox.xOffset;
    const y2 = sprite.yPos + sprite.hitbox.yOffset;
    const h2 = sprite.hitbox.xSize;
    const w2 = sprite.hitbox.ySize;

    const isOverlap = rectIntersect(x1,y1,w1,h1,x2,y2,w2,h2);
    if(isOverlap){
        sprite.isColisionPlayer = true;
    }
  


}