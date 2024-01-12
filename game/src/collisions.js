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
    detectCollisionBetweenPlayerAndMapObstacle();
    
    
}
function getMapTiled(xPos, yPos) {
    const brickSize = globals.level[0].imageSet.gridSize;
    const levelData = globals.level[0].data;

    // Calculate the grid position based on player's position
    const col = Math.floor(xPos / brickSize );
    const row = Math.floor(yPos / brickSize);



    // Check if the grid position is within bounds
    if (row >= 0 && row < levelData.length && col >= 0 && col < levelData[0].length) {
        return levelData[row][col];
    } else {
        console.error("Player is out of bounds or level data is incorrect.");
        return undefined; // or handle the case appropriately based on your needs
    }
}


function isCollisionWithObstacle(xPos,yPos, obstacleId){
    let isColliding;

    const id = getMapTiled(xPos,yPos);

    if(id === obstacleId){
        isColliding = true;
    }
    else{
        isColliding = false;
    }

    return isColliding;


}

function detectCollisionBetweenPlayerAndMapObstacle() {
    const player = globals.sprites[0];
    player.isCollisionRight = false;
    player.isCollisionLeft = false;
    player.isCollisionTop = false;
    player.isColisionBotton = false;

    let xPos;
    let yPos;
    let isColliding;
    let overlap;

    const brickSize = globals.level[0].imageSet.gridSize;
    const direction = player.state;

    for (let i = 0; i < Object.keys(Block).length; i++) {
        const obstacleType = Object.keys(Block)[i];
        const obstacleId = Block[obstacleType];

        switch (direction) {
            case State.RUNNING_RIGHT:
                xPos = player.xPos + player.hitbox.xOffset + player.hitbox.xSize;
                yPos = player.yPos + player.hitbox.yOffset;
                isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);
                
                if (isColliding) {
                    player.isCollisionRight = true;
                    overlap = (Math.floor(xPos) % brickSize);
                    player.xPos -= overlap;
                    console.log("collision right");
            
                }
                yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
                xPos = player.xPos + player.hitbox.xOffset;
                isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);

                if (isColliding) {
                    player.isColisionBotton = true;
                    overlap = Math.floor(yPos) % brickSize - 1;
                    player.yPos -= overlap - 1;

                    // Ajustar velocidad vertical al tocar el suelo
                    player.physics.isOnGround = true;
                    player.physics.vy = 0;
                }
                break;
            

                case State.RUNNING_LEFT:
                    xPos = player.xPos + player.hitbox.xOffset;
                    yPos = player.yPos + player.hitbox.yOffset;
                    isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);

                    if (isColliding) {
                        player.isCollisionLeft = true;
                        overlap = (Math.floor(xPos) % brickSize) - player.hitbox.xOffset -1 ;
                        player.xPos += overlap;
                        console.log("collision left");
                        
                    }

                    yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
                    xPos = player.xPos + player.hitbox.xOffset;
                    isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);

                    if (isColliding) {
                        player.isColisionBotton = true;
                        overlap = Math.floor(yPos) % brickSize - 1;
                        player.yPos -= overlap - 1;

                        // Ajustar velocidad vertical al tocar el suelo
                        player.physics.isOnGround = true;
                        player.physics.vy = 0;
                    }
                    break;


            case State.AIR_WIZZARD_UP:
                yPos = player.yPos + player.hitbox.yOffset;
                xPos = player.xPos + player.hitbox.xOffset;
                isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);

                if (isColliding) {
                    player.isCollisionTop = true;
                    overlap = brickSize - (Math.floor(yPos) % brickSize);
                    player.yPos += overlap - 1;
                    console.log("collision up");
                    player.physics.vy = 0;
                }
                break;

            case State.AIR_WIZZARD_down:
                yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
                xPos = player.xPos + player.hitbox.xOffset;
                isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);

                if (isColliding) {
                    player.isColisionBotton = true;
                    overlap = Math.floor(yPos) % brickSize - 1;
                    player.yPos -= overlap - 1;

                    // Ajustar velocidad vertical al tocar el suelo
                    player.physics.isOnGround = true;
                    player.physics.vy = 0;
                }
                

                break;

            case State.STILL_RIGHT:
                yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
                xPos = player.xPos + player.hitbox.xOffset;
                isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);
            

                if (isColliding) {
                    player.isColisionBotton = true;
                    overlap = Math.floor(yPos) % brickSize+1;
                    player.yPos -= overlap - 1;
                    console.log("collision down");
                    
                    player.physics.isOnGround = true;
                    player.physics.vy = 0;
                }

                break;
                case State.STILL_LEFT:
                yPos = player.yPos + player.hitbox.yOffset + player.hitbox.ySize - 1;
                xPos = player.xPos + player.hitbox.xOffset;
                isColliding = isCollisionWithObstacle(xPos, yPos, obstacleId);
                console.log(isColliding);

                if (isColliding) {
                    player.isColisionBotton = true;
                    overlap = Math.floor(yPos) % brickSize+1;
                    player.yPos -= overlap - 1;
                    console.log("collision down");
                    
                    player.physics.isOnGround = true;
                    player.physics.vy = 0;
                }

                break;

            default:
                console.error("Unhandled player state:", direction);
                break;
        }

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
    detectCollisionBetweenSpriteAndMap(sprite);
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

    detectCollisionBetweenPlayerAndMapObstacle();
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