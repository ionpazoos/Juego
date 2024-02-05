import { Game, Tile,particleState,particleID, SpriteID } from "./constants.js";
import globals from "./globals.js";
import { initLevel } from "./initialize.js";
import { Level } from "./levels.js";

//Funcion que renderiza los grarficos
export default function render(){

    //Change what the game is doing based on the game state
    switch(globals.gameState){

        case Game.LOADING:
            //Draw loading spinner
            break;

        case Game.PLAYING:
            drawGame();
            
            break;

        case Game.NEWGAME:
                drawNewGame();
                break;
        case Game.HISTORIA:
                historia();
                break;

        case Game.CONTROLS:
                controls();
                break;
        case Game.HIGHSCORE:
                highScore();
                break;
        case Game.GAMEOVER:
                GAMEOVER();
                break;
        case Game.WIN:
                winning();
                break;

        default:
            console.error("Error: Game State invalid");
    }

function drawGame(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    moveCamera();

    // Dibujamos el mapa (nivel)
    renderMap();

    //Pintamos los FPS en pantalla
    //globals.ctx.fillText("FPS: " + 1 / globals.deltaTime, 30, 30);

    //  console.log(globals.deltaTime);
    drawSprites();
    restoreCamera();
    //Dibujamos el HUD
    renderHUD();
    renderParticles();
    

}

function drawNewGame(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    renderTitle();


globals.ctx.drawImage(globals.tileSets[0], 10, globals.canvas.width +30, globals.canvas.height, 200, 0, 0, globals.canvas.width+20, globals.canvas.height);


  
    renderMap();
 

    renderMenu();
    drawSprites();
    renderParticles();

}

function controls(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);
    globals.ctx.drawImage(globals.tileSets[0], 10, globals.canvas.width +30, globals.canvas.height, 200, 0, 0, globals.canvas.width+20, globals.canvas.height);


    renderTitle();
    renderMap();
    rendercontrols();

}

function highScore(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);
    globals.ctx.drawImage(globals.tileSets[0], 10, globals.canvas.width +30, globals.canvas.height, 200, 0, 0, globals.canvas.width+20, globals.canvas.height);


    renderTitle();
    renderMap();

    renderscore();

}




function historia (){
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);
    renderTitle();
   
    renderbook(globals.selectedPaperIndex);
 
}

function GAMEOVER(){
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height); // Limpia todo el canvas
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    renderTitle();

    // Rellena el fondo negro
    globals.ctx.fillStyle = 'black';
    globals.ctx.fillRect(0, 0, globals.canvas.width, globals.canvas.height);

    // Estilo del texto "Game Over"
    globals.ctx.fillStyle = 'darkturquoise'; // Cambié el color a azul turquesa oscuro
    globals.ctx.font = 'bold 24px monospace'; // Usé la fuente genérica "monospace"

    // Centrar el texto horizontalmente y verticalmente
    globals.ctx.textAlign = 'center';
    globals.ctx.textBaseline = 'middle';

    // Agregar efecto 3D con sombras cuadradas
    globals.ctx.shadowColor = 'darkturquoise'; // Cambié el color de la sombra a azul turquesa oscuro
    globals.ctx.shadowBlur = 5; // Difuminado de la sombra
    globals.ctx.shadowOffsetX = 0; // Desplazamiento X de la sombra (sin desplazamiento)
    globals.ctx.shadowOffsetY = 0; // Desplazamiento Y de la sombra (sin desplazamiento)

    // Dibujar el texto en el centro
    globals.ctx.fillText("Game Over", globals.canvas.width / 2, globals.canvas.height / 2 - 40);

    // Texto "Try again?"
    globals.ctx.fillStyle = 'white';
    globals.ctx.font = '16px monospace'; // Usé la misma fuente genérica "monospace" para el texto "Try again?"

    // Restaurar el estilo de sombra
    globals.ctx.shadowColor = 'transparent';
    globals.ctx.shadowBlur = 0;
    globals.ctx.shadowOffsetX = 0;
    globals.ctx.shadowOffsetY = 0;
    
    globals.ctx.fillText("Insert coin", globals.canvas.width / 2, globals.canvas.height / 2 + 20);


}

function winning(){
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height); // Limpia todo el canvas
globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

renderTitle();

// Rellena el fondo negro
globals.ctx.fillStyle = 'black';
globals.ctx.fillRect(0, 0, globals.canvas.width, globals.canvas.height);

// Estilo del texto "You Win!"
globals.ctx.fillStyle = 'green'; // Cambié el color a verde
globals.ctx.font = 'bold 24px monospace'; // Usé la fuente genérica "monospace"

// Centrar el texto horizontalmente y verticalmente
globals.ctx.textAlign = 'center';
globals.ctx.textBaseline = 'middle';

// Agregar efecto 3D con sombras cuadradas
globals.ctx.shadowColor = 'green'; 
globals.ctx.shadowBlur = 5; 
globals.ctx.shadowOffsetX = 0; 
globals.ctx.shadowOffsetY = 0; 

// Dibujar el texto en el centro
globals.ctx.fillText("You Win!", globals.canvas.width / 2, globals.canvas.height / 2 - 40);

// Texto "Try again?"
globals.ctx.fillStyle = 'white';
globals.ctx.font = '16px monospace'; 

// Restaurar el estilo de sombra
globals.ctx.shadowColor = 'transparent';
globals.ctx.shadowBlur = 0;
globals.ctx.shadowOffsetX = 0;
globals.ctx.shadowOffsetY = 0;


}


// function renderbook(selectedPaper) {
//     // Dibujar el fondo del libro
//     globals.ctx.drawImage(globals.tileSets[0], 0, 769, 1920, 1080, 0, 0, 1000, 360);

//     const separatedBySpaces = globals.story.split(' ');

    
// if(selectedPaper === 1 ){
//     // Restablecer la transformación a la identidad al final para evitar problemas futuros
// globals.ctx.setTransform(2.1, 0, 0, 2, -110, -70);


// const maxWidth = 50;  // Ancho máximo por línea
// let currentLine = '';
// let texty = 50;

// globals.ctx.font = '5px Arial';
// globals.ctx.fillStyle = '#000';

// for (let i = 0; i < 40; i++) {
//     const word = separatedBySpaces[i];
//     const wordWidth = globals.ctx.measureText(word).width;

//     // Verificar si agregar la palabra excede la anchura máxima
//     if (globals.ctx.measureText(currentLine + word).width > maxWidth && i > 0) {
//         globals.ctx.fillText(currentLine, 130, texty);
//         texty += 5;  // Ajusta según el espaciado entre líneas
//         currentLine = word + ' ';
//     } else {
//         currentLine += word + ' ';
//     }
// }




// }
// else if(selectedPaper === 2 ){
//     // Restablecer la transformación a la identidad al final para evitar problemas futuros
// globals.ctx.setTransform(2.1, 0, 0, 2.1, -110, -170);

// }
// else if(selectedPaper === 3 ){
//     // Restablecer la transformación a la identidad al final para evitar problemas futuros
// globals.ctx.setTransform(2.8, 0, 0, 2.8, -550, -50);


// const maxWidth = 40;  // Ancho máximo por línea
// let currentLine = '';
// let texty = 42;

// globals.ctx.font = '5px Arial';
// globals.ctx.fillStyle = '#000';

// for (let i = 40; i < 50; i++) {
//     const word = separatedBySpaces[i];
//     const wordWidth = globals.ctx.measureText(word).width;

//     // Verificar si agregar la palabra excede la anchura máxima
//     if (globals.ctx.measureText(currentLine + word).width > maxWidth && i > 0) {
//         globals.ctx.fillText(currentLine, 300, texty);
//         texty += 5;  // Ajusta según el espaciado entre líneas
//         currentLine = word + ' ';
//     } else {
//         currentLine += word + ' ';
//     }
// }


// }

// else if(selectedPaper === 4 ){
//     // Restablecer la transformación a la identidad al final para evitar problemas futuros
// globals.ctx.setTransform(2, 0, 0, 2, -450, -130);

// const maxWidth = 40;  // Ancho máximo por línea
// let currentLine = '';
// let texty = 90;

// globals.ctx.font = '5px Arial';
// globals.ctx.fillStyle = '#000';

// for (let i = 50; i < 75 ; i++) {
//     const word = separatedBySpaces[i];
//     const wordWidth = globals.ctx.measureText(word).width;

//     // Verificar si agregar la palabra excede la anchura máxima
//     if (globals.ctx.measureText(currentLine + word).width > maxWidth && i > 0) {
//         globals.ctx.fillText(currentLine, 300, texty);
//         texty += 5;  // Ajusta según el espaciado entre líneas
//         currentLine = word + ' ';
//     } else {
//         currentLine += word + ' ';
//     }
// }
// }
// else if(selectedPaper === 5 ){
//     // Restablecer la transformación a la identidad al final para evitar problemas futuros
// globals.ctx.setTransform(2, 0, 0, 2, -550, -180);

// const maxWidth = 80;  // Ancho máximo por línea
// let currentLine = '';
// let texty = 130;

// globals.ctx.font = '6px Arial';
// globals.ctx.fillStyle = '#000';

// for (let i = 75; i < 87 ; i++) {
//     const word = separatedBySpaces[i];
//     const wordWidth = globals.ctx.measureText(word).width;

//     // Verificar si agregar la palabra excede la anchura máxima
//     if (globals.ctx.measureText(currentLine + word).width > maxWidth && i > 0) {
//         globals.ctx.fillText(currentLine, 385, texty);
//         texty += 5;  // Ajusta según el espaciado entre líneas
//         currentLine = word + ' ';
//     } else {
//         currentLine += word + ' ';
//     }
// }
// }


// else{
//     globals.ctx.setTransform(1, 0, 0, 1, 0, 0);
// }
    



//     }

function renderBook(selectedPaper) {
    // Dibujar el fondo del libro
    globals.ctx.drawImage(globals.tileSets[0], 0, 769, 1920, 1080, 0, 0, 1000, 360);

    const separatedBySpaces = globals.story.split(' ');

    let transformValues = [1, 0, 0, 1, 0, 0];
    let maxWidth = 50;
    let startingIndex = 0;
    let totalWords;
    let textx = 130;  // Ajusta según la posición inicial en x para cada papel
    let texty = 50;

    if (selectedPaper === 1) {
        transformValues = [2.1, 0, 0, 2, -110, -70];
        totalWords = 40;
    } else if (selectedPaper === 2) {
        transformValues = [2.1, 0, 0, 2.1, -110, -170];
        totalWords = 40;
    } else if (selectedPaper === 3) {
        transformValues = [2.8, 0, 0, 2.8, -550, -50];
        maxWidth = 40;
        startingIndex = 40;
        texty = 42;
        totalWords = 50;
    } else if (selectedPaper === 4) {
        transformValues = [2, 0, 0, 2, -450, -130];
        maxWidth = 40;
        startingIndex = 50;
        texty = 90;
        totalWords = 75;
    } else if (selectedPaper === 5) {
        transformValues = [2, 0, 0, 2, -550, -180];
        maxWidth = 80;
        startingIndex = 75;
        texty = 130;
        totalWords = 87;
    }

    // Restablecer la transformación a la identidad al final para evitar problemas futuros
    globals.ctx.setTransform(...transformValues);

    globals.ctx.font = '5px Arial';
    globals.ctx.fillStyle = '#000';

    function drawText(index) {
        const word = separatedBySpaces[index];
        const wordWidth = globals.ctx.measureText(word).width;

        // Verificar si agregar la palabra excede la anchura máxima
        if (globals.ctx.measureText(currentLine + word).width > maxWidth && index > startingIndex) {
            globals.ctx.fillText(currentLine, textx, texty);
            texty += 5;  // Ajusta según el espaciado entre líneas
            currentLine = word + ' ';
        } else {
            currentLine += word + ' ';
        }

        if (index < totalWords - 1) {
            setTimeout(() => {
                drawText(index + 1);
            }, 100); // Puedes ajustar el valor del retardo según tus preferencias
        } else {
            // Finalizar la animación o realizar cualquier otra acción al completar el dibujo del texto
        }
    }

    let currentLine = '';
    drawText(startingIndex);
}
    









function renderMenu() {
   
    const ctx = globals.canvas.getContext("2d");

    
    const optionHeight = 8;
    const optionSpacing = 20;
    const selectedOption = globals.selectedOption; // Índice de la opción seleccionada


    // Establecemos el estilo de fuente y alineación
    ctx.fillStyle = "black";
    ctx.font = "15px Arial";
    ctx.textAlign = "center";

    // Ciclo para dibujar las opciones del menú
    for (let i = 0; i < globals.menuOptions.length; i++) {
        const text = globals.menuOptions[i];
        const x = globals.canvas.width / 2;
        const y = 20 + i * (optionHeight + optionSpacing);

        

        // Si es la opción seleccionada, resaltamos con un rectángulo
        if (i === selectedOption) {
            ctx.fillStyle = "blue";
            ctx.fillRect(x - 50, y - 10, 8, optionHeight);
            ctx.fillStyle = "#fff"; // Restauramos el color de relleno
        }
        ctx.fillStyle = "black"; // Restauramos el color de relleno
        // Dibujamos el texto de la opción
        ctx.fillText(text, x, y);
    }
}


function renderscore(){
    let score = 500;
    let x = 150;
    globals.ctx.font = '16px ';
    for(var i = 0;i<5;i++){
        globals.ctx.fillText((i+1)+". name:" + score, x , 100);
        globals.ctx.drawImage(globals.tileSets[0], 30,0 , 32, 32, x, 110, 32, 32);
        x += 80; 
        score -=50;
        
    }

}

function renderMap() {
    const brickSize = globals.level.imageSet.gridSize;
    const levelData = globals.level.data;
    const imagepath = globals.level.imageSet.imgpath;
  

    // Dibujamos el mapa
    const num_fil = levelData.length;
    const num_col = levelData[0].length;

    // Ajustamos el número de tiles por fila
    const tilesPerRow = 400 / brickSize;

    for (let i = 0; i < num_fil; ++i) {
        for (let j = 0; j < num_col; ++j) {
            const tileIndex = levelData[i][j] - 1;

            // Ajustamos las coordenadas para la imagen de 400x400 con tiles de 16x16
            const xTile = (tileIndex % tilesPerRow) * brickSize;
            const yTile = Math.floor(tileIndex / tilesPerRow) * brickSize;

            // Ajustamos las coordenadas de posición multiplicando por 16 (el tamaño del tile)
            const xPos = j * brickSize;
            const yPos = i * brickSize;

            // Dibujamos el nuevo fotograma del sprite en la posición adecuada
            globals.ctx.drawImage(
                globals.tileSets[imagepath -1],
                xTile, yTile,
                brickSize, brickSize,
                xPos, yPos,
                brickSize, brickSize
            );
        }
    }

    
}





    

}

function renderSprite(sprite)
{
    
    //Calculamos la posicion del tile de inicio
    const xPosInit = sprite.imageSet.initCol * sprite.imageSet.gridSize;
    const yPosInit = sprite.imageSet.initFil * sprite.imageSet.gridSize;

    //Calculamos la posicion en el tilemap a dibujar
    const xTile = xPosInit + sprite.frames.frameCounter * sprite.imageSet.gridSize + sprite.imageSet.xOffset;
    const yTile = yPosInit + sprite.state * sprite.imageSet.gridSize + sprite.imageSet.yOffset;

    const xPos = Math.floor(sprite.xPos);
    const yPos = Math.floor(sprite.yPos);


    //Dibujamos el nuevo fotograma del sprite en la posicion adecuada
    globals.ctx.drawImage(
        globals.tileSets[0],                 //The image file
        xTile, yTile,                                   //The source x and y position
        sprite.imageSet.xSize, sprite.imageSet.ySize,   //The source height and width
        xPos, yPos,                                     //The destination x and y position
        sprite.imageSet.xSize, sprite.imageSet.ySize    //The destination height and width
    );

    
}

function renderSprite_hud(sprite)
{
    
    //Calculamos la posicion del tile de inicio
    const xPosInit = sprite.imageSet.initCol * sprite.imageSet.gridSize;
    const yPosInit = sprite.imageSet.initFil * sprite.imageSet.gridSize;

    //Calculamos la posicion en el tilemap a dibujar
    const xTile = xPosInit + sprite.frames.frameCounter * sprite.imageSet.gridSize + sprite.imageSet.xOffset;
    const yTile = yPosInit + sprite.state * sprite.imageSet.gridSize + sprite.imageSet.yOffset;

    const xPos = Math.floor(sprite.xPos);
    const yPos = Math.floor(sprite.yPos);


    //Dibujamos el nuevo fotograma del sprite en la posicion adecuada
    globals.ctxHUD.drawImage(
        globals.tileSets[0],                 //The image file
        xTile, yTile,                                   //The source x and y position
        sprite.imageSet.xSize, sprite.imageSet.ySize,   //The source height and width
        xPos, yPos,                                     //The destination x and y position
        sprite.imageSet.xSize, sprite.imageSet.ySize    //The destination height and width
    );

    
}

function drawSprites(){

    for (let i = 0; i < globals.sprites.length; ++i){
        
        const sprite = globals.sprites[i];

        //TEST: Dibuja un rectangulo alrededor del sprite
        drawSpriteRectangle(sprite);

        renderSprite(sprite);

        // drawHitbox(sprite);
    
    }
}

function drawSpriteshud(){

    for (let i = 0; i < globals.sprites_hud.length; ++i){
        
        const sprite = globals.sprites_hud[i];

        
        drawSpriteRectangle_hud(sprite);

        renderSprite_hud(sprite);

        
    
    }
}


function drawHitbox(sprite){
    const x1 = Math.floor(sprite.xPos) + Math.floor(sprite.hitbox.xOffset);
    const y1 = Math.floor(sprite.yPos) + Math.floor(sprite.hitbox.yOffset);
    const w1 = sprite.hitbox.xSize;
    const h1 = sprite.hitbox.ySize;

    globals.ctx.strokeStyle = "red";
    globals.ctx.strokeRect(x1,y1,w1,h1);

   

   
        
        const x2 = Math.floor(sprite.xPos) + Math.floor(sprite.hitbox2.xOffset);
        const y2 = Math.floor(sprite.yPos) + Math.floor(sprite.hitbox2.yOffset);
        const w2 = sprite.hitbox2.xSize;
        const h2 = sprite.hitbox2.ySize;
    
        globals.ctx.strokeStyle = "blue";
        globals.ctx.strokeRect(x2,y2,w2,h2);
    


}

function drawSpriteRectangle(sprite){

    //Datos del sprite
    const x1 = Math.floor(sprite.xPos);
    const y1 = Math.floor(sprite.yPos);
    const w1 = sprite.imageSet.xSize;
    const h1 = sprite.imageSet.ySize;

    globals.ctx.fillStyle = "transparent";
    globals.ctx.fillRect(x1, y1, w1, h1);

}

function drawSpriteRectangle_hud(sprite){

    //Datos del sprite
    const x1 = Math.floor(sprite.xPos);
    const y1 = Math.floor(sprite.yPos);
    const w1 = sprite.imageSet.xSize;
    const h1 = sprite.imageSet.ySize;

    globals.ctxHUD.fillStyle = "transparent";
    globals.ctxHUD.fillRect(x1, y1, w1, h1);

}

function renderHUD(){

    //TEST: Datos metidos en bruto
    const score = Math.floor(globals.score);
    const highScore = Math.floor(globals.highScore);
    const time = globals.leveltime.value;



    //Draw score
    globals.ctxHUD.font = '17px upheavtt';
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("SCORE", 8, 16);
    globals.ctxHUD.fillStyle = 'lightgray';
    globals.ctxHUD.fillText(" " + score, 3, 32);

    //Draw High Score
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("Health", 72, 16);
    globals.ctxHUD.fillText("High Score", 125, 16);
    globals.ctxHUD.fillStyle = 'lightgray';
    globals.ctxHUD.fillText(" " + highScore, 120, 32);

    globals.ctxHUD.fillText(" " + globals.life, 77, 32);

    
    //Draw time
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("TIME", 221, 16);
    globals.ctxHUD.drawImage(globals.tileSets[1], 160,160 , 96, 32, 200, 14, time/3, 32);

     // rage
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("RAGE", 305, 25);

    
    drawSpriteshud();



}

function renderTitle(){
    globals.ctxHUD.font = '30px upheavtt';
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("Haserrearen esnatzea", 80, 26);
}

function rendercontrols(){

    //Flechas
    globals.ctx.drawImage(globals.tileSets[0], 5, 1315, 16, 16, 150, 5, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 24, 1315, 16, 16, 155, 32, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 56, 1315, 16, 16, 185, 32, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 40, 1315, 16, 16, 128, 32, 32, 32);
    globals.ctx.font = '15px upheavtt';
    globals.ctx.fillText("Move", 145, 76);

    globals.ctx.drawImage(globals.tileSets[0], 68, 1569, 32, 16, 250, 32, 64, 32);
    globals.ctx.font = '15px upheavtt';
    globals.ctx.fillText("Interact", 250, 76);


}

function moveCamera(){
    const xTranslation = -globals.camara.x;
    const yTranslation = -globals.camara.y+20;


    globals.ctx.translate(xTranslation,yTranslation);

      //fondo
     // Ajusta la posición del fondo en relación con la posición de la cámara
    const backgroundX = globals.camara.x-10;  // Ajusta según las necesidades
    const backgroundY = globals.camara.y -20;  // Ajusta según las necesidades

    // Dibuja la imagen de fondo ajustada a la posición de la cámara
    globals.ctx.drawImage(globals.tileSets[0], 0, globals.canvas.width +20, globals.canvas.height, 200, backgroundX, backgroundY, globals.canvas.width+20, globals.canvas.height);
}

function restoreCamera(){
    globals.ctx.setTransform(1,0,0,1,0,0);

}
function renderParticles(){
    for(let i = 0; i< globals.particles.length;i++){
        const particle = globals.particles[i];
        renderParticle(particle);
    }
}
function renderParticle(particle){
    const type = particle.id;
    
    switch(type){
        case particleID.GRASS:
             renderGrassParticle(particle);
            break;
        case particleID.EXPLOSION:
                renderExplison(particle);
               break;

        case particleID.RAIN:
                renderRainParticle(particle);
                
                break;
        default:
            break;
    }
}

 function renderGrassParticle(particle) {
    if (particle.state === particleState.ON) {

        console.log(particle.xPos);
        globals.ctx.fillStyle = "lightGreen";
        globals.ctx.beginPath();
        globals.ctx.rect(particle.xPos , particle.yPos , 1, 1);
        globals.ctx.fill();
        globals.ctx.closePath();
    } else {
        console.log("particle off");
    }
}

function renderRainParticle(particle){

 
    globals.ctx.beginPath();
    globals.ctx.rect(particle.xPos, particle.yPos, 0.8,1);
    globals.ctx.fillStyle = 'blue'; // Color de las gotas de lluvia
    globals.ctx.fill();
    globals.ctx.closePath();
}




function renderExplison(particle){
    if (particle.state === particleState.ON) {
        globals.ctx.fillStyle = "red";
        globals.ctx.globalAlpha = particle.alpha;
        globals.ctx.beginPath();
        console.log(particle.yPos);
        globals.ctx.rect(particle.xPos - globals.camara.x, particle.yPos - globals.camara.y,2,2);
        globals.ctx.fill();
        globals.ctx.globalAlpha = 1.0;
    } else {
        console.log("particle off");
    }
}
