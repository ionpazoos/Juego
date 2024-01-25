import globals from "./globals.js";
import {Block,Game, SpriteID} from "./constants.js"

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
         detectCollisionBetweenSpriteAndMap(sprite);
       
        
    }

         
    detectCollisionBetweenPlayerAndObstacles();
    
    
    
}

function getMapTiled(xPos, yPos) {
    const brickSize = globals.level.imageSet.gridSize;
    const levelData = globals.level.data;

    // Calculate the grid position based on player's position
    const col = Math.floor(xPos / brickSize);
    const row = Math.floor(yPos / brickSize);



    // Check if the grid position is within bounds
    if (row >= 0 && row < levelData.length && col >= 0 && col < levelData[0].length) {
        return levelData[row][col];
    } else {
       
        return undefined; // or handle the case appropriately based on your needs
    }
}


function isCollidingWithObstacleAt(xPos, yPos){

    let isColliding;

    const id = getMapTiled(xPos, yPos);
    const blockIDs = Object.values(Block);
    const totalObstacles = blockIDs.length;
    
    

    for (let i = 0; i < totalObstacles; ++i){
       
        const obstacleId = blockIDs[i] ;

    //Calculamos colision con bloque de tierra de la izquierda
    if (id === obstacleId){
        isColliding = true;
        break;
        
    }
    else{
        isColliding = false;
    }

    
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

    const brickSize = globals.level.imageSet.gridSize;

    //Obtener la cantidad de bloques
   
    

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



    if (player.physics.vx >= 0){ //Movimiento derecha

        //Punto 4
        //Primera coloision en (xPos, yPos)
        xPos = player.xPos + player.hitbox.xOffset;
        yPos = player.yPos + player.hitbox.yOffset;
        isCollidingOnPos4 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos3 = isCollidingWithObstacleAt(xPos, yPos);
        
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
        isCollidingOnPos1 = isCollidingWithObstacleAt(xPos, yPos );

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

                    player.yPos -= overlapY;

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
        isCollidingOnPos2 = isCollidingWithObstacleAt(xPos, yPos );

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
        isCollidingOnPos1 = isCollidingWithObstacleAt(xPos, yPos );

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
        isCollidingOnPos2 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos3 = isCollidingWithObstacleAt(xPos, yPos);

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

                    player.yPos -= overlapY;

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
        isCollidingOnPos4 = isCollidingWithObstacleAt(xPos, yPos );

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


if(player.isCollidingWithObstacleOnTheBottom){
    player.physics.isOnGround = true;
}
}


function detectCollisionBetweenSpriteAndMap(sprite) {

  
        
    const player = sprite;

    

    //Variables to use
    let xPos;
    let yPos;
    let isCollidingOnPos1; //Arriba derecha
    let isCollidingOnPos2; //Abajo derecha
    let isCollidingOnPos3; //Abajo izquierda
    let isCollidingOnPos4; //Arriba izquierda

    const brickSize = globals.level.imageSet.gridSize;

    //Obtener la cantidad de bloques
   
    

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



    if (player.physics.vx >= 0){ //Movimiento derecha

        //Punto 4
        //Primera coloision en (xPos, yPos)
        xPos = player.xPos + player.hitbox.xOffset;
        yPos = player.yPos + player.hitbox.yOffset;
        isCollidingOnPos4 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos3 = isCollidingWithObstacleAt(xPos, yPos);
        
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
        isCollidingOnPos1 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos2 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos1 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos2 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos3 = isCollidingWithObstacleAt(xPos, yPos);

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
        isCollidingOnPos4 = isCollidingWithObstacleAt(xPos, yPos);

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
   




function detectCollisionBetweenPlayerAndSprites(sprite){

    //sprite hits player
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

    let isOverlap = rectIntersect(x1,y1,w1,h1,x2,y2,w2,h2);
    if(isOverlap){
        sprite.isColisionPlayer = true;
    }

    //player hits sprite

    

    //datos player principal

    const x3 = player.xPos + player.hitbox2.xOffset;
    const y3 = player.yPos + player.hitbox2.yOffset;
    const h3 = player.hitbox2.ySize;
    const w3 = player.hitbox2.xSize;

    //datos de los demas sprites

    const x4 = sprite.xPos + sprite.hitbox2.xOffset;
    const y4 = sprite.yPos + sprite.hitbox2.yOffset;
    const h4 = sprite.hitbox2.xSize;
    const w4 = sprite.hitbox2.ySize;

     isOverlap = rectIntersect(x3,y3,w3,h3,x4,y4,w4,h4);
    if(isOverlap){
        sprite.isColidingHead = true;
        console.log("Le he dado en la cabeza "+ sprite.id + sprite.isColidingHead );
        player.physics.vy -= 300;
    }




}