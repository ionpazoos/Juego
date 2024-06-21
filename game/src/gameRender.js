import { Game,particleState,particleID } from "./constants.js";
import globals from "./globals.js";


//Funcion que renderiza los grarficos
export default function render(){

    //Change what the game is doing based on the game state
    switch(globals.gameState){

        case Game.LOADING:
            drawSpinnerAndMessage()
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

function drawSpinnerAndMessage() {
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);

    // Definir propiedades del spinner
    const centerX = globals.canvas.width / 2;
    const centerY = globals.canvas.height / 2;
    const radius = 10;
    const ballRadius = 5;
    const spinnerColor = '#000000'; // Color negro para la bola y el texto

    // Calcular la posición de la bola en función del tiempo
    const angle = Date.now() / 1000; // Velocidad de rotación

    // Calcular la posición de la bola
    const ballX = centerX + Math.cos(angle) * radius;
    const ballY = centerY + Math.sin(angle) * radius;

    // Dibujar el círculo del spinner
    globals.ctx.beginPath();
    globals.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    globals.ctx.lineWidth = 1;
    globals.ctx.strokeStyle = spinnerColor;
    globals.ctx.stroke();

    // Dibujar la bola
    globals.ctx.beginPath();
    globals.ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    globals.ctx.fillStyle = spinnerColor;
    globals.ctx.fill();

    // Dibujar texto "Presiona espacio para continuar"
    const message = "Press space to continue";
    globals.ctx.font = "8px Emulogic";
    globals.ctx.fillStyle = spinnerColor; // Color negro
    globals.ctx.textAlign = "center";
    globals.ctx.fillText(message, 250, 150);
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
    moveCamera();

    renderTitle();
    renderMap();
    renderParticles();
    renderscore();
    restoreCamera();
    
    

}




function historia (){
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);
    globals.ctx.drawImage(globals.tileSets[0], 0, 769, 1920, 1080, 0, 0, 1000, 360);
    renderTitle();
   
    renderBook(globals.selectedPaperIndex);
    
 
}

function GAMEOVER() {
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height); // Limpia todo el canvas
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    renderTitle();

    // Rellena el fondo negro
    globals.ctx.fillStyle = 'black';
    globals.ctx.fillRect(0, 0, globals.canvas.width, globals.canvas.height);
    renderParticles();

    // Estilo del texto "Game Over"
    globals.ctx.fillStyle = 'darkturquoise'; // Cambié el color a azul turquesa oscuro
    globals.ctx.font = 'bold 32px Emulogic'; // Usé la fuente genérica "monospace"

    // Centrar el texto horizontalmente y verticalmente
    globals.ctx.textAlign = 'center';
    globals.ctx.textBaseline = 'middle';

    // Agregar efecto 3D con sombras cuadradas
    globals.ctx.shadowColor = 'darkturquoise'; // Cambié el color de la sombra a azul turquesa oscuro
    globals.ctx.shadowBlur = 5; // Difuminado de la sombra
    globals.ctx.shadowOffsetX = 0; // Desplazamiento X de la sombra (sin desplazamiento)
    globals.ctx.shadowOffsetY = 0; // Desplazamiento Y de la sombra (sin desplazamiento)

    // Dibujar el texto "Game Over" en el centro
    globals.ctx.fillText("Game Over", globals.canvas.width / 2, globals.canvas.height / 2 - 40);

    // Establecer el estilo para el cuadro de entrada de nombre
    globals.ctx.fillStyle = 'white';
    globals.ctx.font = '16px Emulogic'; // Usé la misma fuente genérica "monospace" para el texto

    // Dibujar el recuadro para ingresar el nombre
    globals.ctx.fillRect(globals.canvas.width / 2 - 40, globals.canvas.height / 2 + 50, 80, 20);

    // Mostrar las tres letras del nombre del jugador si están disponibles
    globals.ctx.fillStyle = 'black'; // Color del texto negro
    globals.ctx.fillText(globals.playerName ? globals.playerName : '___', globals.canvas.width / 2, globals.canvas.height / 2 + 60); // Mostrar el nombre o tres guiones bajos si aún no se ha ingresado

    // Restaurar el estilo de sombra
    globals.ctx.shadowColor = 'transparent';
    globals.ctx.shadowBlur = 0;
    globals.ctx.shadowOffsetX = 0;
    globals.ctx.shadowOffsetY = 0;

    // Texto "Press space for high score"
    globals.ctx.fillText("Press space for high score", globals.canvas.width / 2, globals.canvas.height / 2 + 5);
    globals.ctx.fillText("Your Score: " + Math.floor(globals.score), globals.canvas.width / 2, globals.canvas.height / 2 + 30);
}


function winning() {
    // Limpia todo el canvas
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    // Rellena el fondo negro
    globals.ctx.fillStyle = 'black';
    globals.ctx.fillRect(0, 0, globals.canvas.width, globals.canvas.height);

    // Estilo del texto "You Win!"
    globals.ctx.fillStyle = 'green'; // Cambié el color a verde
    globals.ctx.font = 'bold 16px Emulogic'; // Usé la fuente genérica "monospace"

    // Centrar el texto horizontalmente y verticalmente
    globals.ctx.textAlign = 'center';
    globals.ctx.textBaseline = 'middle';

    // Agregar efecto 3D con sombras cuadradas
    globals.ctx.shadowColor = 'green'; 
    globals.ctx.shadowBlur = 5; 
    globals.ctx.shadowOffsetX = 0; 
    globals.ctx.shadowOffsetY = 0; 

    // Dibujar el texto "You Win!" en el centro
    globals.ctx.fillText("You Win!", globals.canvas.width / 2, globals.canvas.height / 2 - 40);

    // Restaurar el estilo de sombra
    globals.ctx.shadowColor = 'transparent';
    globals.ctx.shadowBlur = 0;
    globals.ctx.shadowOffsetX = 0;
    globals.ctx.shadowOffsetY = 0;

    // Pintar la siguiente historia debajo del mensaje de victoria
    const story = "Finally, after overcoming the challenges of the labyrinth, Master Silvano and X.G reach the top of a magnificent mountain called Serene Peak. From there, with a panoramic view of the City of Evil Tongues, X.G feels a renewed clarity of intelligence and control over his emotions. In that epic place ends the first part of his journey, where the next stage of his odyssey begins.";

    // Estilo del texto de la historia
    globals.ctx.fillStyle = 'white';
    globals.ctx.font = '8px Emulogic'; // Tamaño de fuente 8

    // Centrar el texto horizontalmente y dividirlo en líneas
    const maxWidth = 500; // Ancho máximo del texto
    const words = story.split(' ');
    let line = '';
    let y = globals.canvas.height / 2 ; // Posición vertical inicial

    for (let word of words) {
        let testLine = line + word + ' ';
        let metrics = globals.ctx.measureText(testLine);
        let testWidth = metrics.width;

        if (testWidth > maxWidth && line !== '') {
            globals.ctx.fillText(line, globals.canvas.width / 2, y);
            line = word + ' ';
            y += 10; // Espaciado entre líneas
        } else {
            line = testLine;
        }
    }
    // Dibujar la última línea
    globals.ctx.fillText(line, globals.canvas.width / 2, y);
}

function renderBook(selectedPaper) {
    // Dibujar el fondo del libro
    // (Asumiendo que esta parte queda fuera de la función)
    // globals.ctx.drawImage(globals.tileSets[0], 0, 769, 1920, 1080, 0, 0, 1000, 360);
     let story = "In the City of Evil Tongues, X.G., born into a family of blind magicians, grapples with chaotic impulses. Sent to Master Silvano, a reflective-material goldsmith, he undergoes an Alchemical Trial in the Forest of Essences. Guided by Silvano, X.G faces magical challenges, mastering potion use and enhancing his skills with rare plants. Progressing, he learns precise potion dosing, emphasizing harmony and self-control. Conquering each trial, X.G and Silvano reach a luminous core, deepening his connection to alchemical magic. The first part of his journey concludes.";

    const separatedBySpaces = story.split(' ');

    let transformValues = [1, 0, 0, 1, 0, 0];
    let maxWidth = 50;
    let startingIndex = 0;
    let totalWords;
    let textx = 130;  // Ajusta según la posición inicial en x para cada papel
    let texty = 50;

    if (selectedPaper === 1) {
        transformValues = [2.1, 0, 0, 2, -110, -70];
        totalWords = 28;
    } else if (selectedPaper === 2) {
        transformValues = [2.1, 0, 0, 2.1, -110, -170];
        
    } else if (selectedPaper === 3) {
        transformValues = [2.8, 0, 0, 2.8, -550, -50];
        maxWidth = 40;
        startingIndex = 40;
        textx = 300;  // Ajusta según la posición inicial en x para papel 3
        texty = 42;
        totalWords = 48;
    } else if (selectedPaper === 4) {
        transformValues = [2, 0, 0, 2, -450, -130];
        maxWidth = 40;
        startingIndex = 50;
        textx = 300;  // Ajusta según la posición inicial en x para papel 4
        texty = 90;
        totalWords = 65;
    } else if (selectedPaper === 5) {
        transformValues = [2, 0, 0, 2, -550, -180];
        maxWidth = 80;
        startingIndex = 75;
        textx = 385;  // Ajusta según la posición inicial en x para papel 5
        texty = 130;
        totalWords = 84;
    }

    // Restablecer la transformación a la identidad al final para evitar problemas futuros
    globals.ctx.setTransform(...transformValues);

    globals.ctx.font = '3px Emulogic';
    globals.ctx.fillStyle = '#000';

    // Función para dibujar el texto en las posiciones indicadas
    function drawText() {
        let line = '';
        let currentTextY = texty;

        // Recorre cada palabra del texto
        for (let i = startingIndex; i < totalWords; i++) {
            const word = separatedBySpaces[i];
            const wordWidth = globals.ctx.measureText(word).width;

            // Verifica si agregar la palabra excede la anchura máxima
            if (globals.ctx.measureText(line + word).width > maxWidth && i > startingIndex) {
                // Dibuja la línea actual en las coordenadas indicadas
                globals.ctx.fillText(line, textx, currentTextY);
                line = word + ' '; // Inicia una nueva línea con la palabra actual
                currentTextY += 5; // Ajusta según el espaciado entre líneas
            } else {
                line += word + ' '; // Agrega la palabra a la línea actual
            }
        }

        // Dibuja la última línea o en caso de ser un texto muy corto la única línea que haya
        globals.ctx.fillText(line, textx, currentTextY);
    }

    // Dibuja el texto en las posiciones indicadas
    drawText();
}




function getTextWidth(text, context)
{  
    let medidaTexto = context.measureText(text);
    return medidaTexto.width;
}

//Funcion para escribir un texto con un ancho designado en pantalla
function wrapText(context, text, x, y, maxWidth, lineHeight) 
{
    //Separaremos todo el texto en base a sus espacios y lo meteremos en un array que contendra cada palabra que se escribirá
    const textToType = text.split(' ');
    let line = '';
    
    //Recorre cada palabra del textoz
    for (let i = 0; i < textToType.length; i++) 
    {
        let testLine = line + textToType[i] + ' ';      //Escribimos una linea de prueba que contiene la palabra actual
        let metrics = context.measureText(testLine);    //Obtenemos los datos de la linea
        let testWidth = metrics.width;                  //Obtenemos el width de dicha linea

        //Si el width de la linea es mayor que el que hemos escogido nosotros y no estamos en la primera palabra, haremos el salto de linea
        if (testWidth > maxWidth && i > 0) 
        {
            context.fillText(line, x, y);               //Dibuja la linea en las coordenadas que hemos indicado
            line = textToType[i] + ' ';                 //Reinicia la linea con la palabra actual y ajusta las coordenadas para la proxima linea
            y += lineHeight;                            //Incrementamos la coordenada Y (para que se escriba mas abajo que la linea actual)
        } 
        else //Sino seguiremos construyendo la linea actual
        {
            line = testLine;                            
        }
    }

    context.fillText(line, x, y); //Dibuja la ultima linea o en caso de ser un texto muy corto la unica linea que haya
}



function renderMenu() {
   
    const ctx = globals.canvas.getContext("2d");

    
    const optionHeight = 8;
    const optionSpacing = 20;
    const selectedOption = globals.selectedOption; // Índice de la opción seleccionada


    // Establecemos el estilo de fuente y alineación
    ctx.fillStyle = "black";
    ctx.font = "8px Emulogic";
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


function renderscore() {
    let x = 0;
    let count = 0;

    globals.ctx.font = '8px Emulogic'; // Establecer el tamaño y la fuente del texto predeterminado
    globals.ctx.fillStyle = 'black';

    let startIndex = globals.playerId + 5;
    let endIndex = globals.playerId - 4;

    // Ajustar el índice de inicio y fin si están fuera de los límites del array
    if (startIndex >= globals.Players.length) {
        endIndex -= startIndex - (globals.Players.length - 1);
        startIndex = globals.Players.length - 1;
    }
    if (endIndex < 0) {
        startIndex -= endIndex;
        endIndex = 0;
    }

    for (let i = startIndex; i >= endIndex; i--) {
        let jugador = globals.Players[i];
        
        // Dibujar el texto del jugador
        if (i === globals.playerId) {
            
            // Si es el jugador actual, aumentar el tamaño del texto y hacerlo más grande
            globals.ctx.font = 'bold 16px Emulogic';
            globals.ctx.fillText((i + 1) + "." + jugador.name + ": " + jugador.score, x, 70);
            globals.ctx.drawImage(globals.tileSets[0], 30, 0, 32, 30, x-2, 80, 64, 64);
        } else {
            // Si no es el jugador actual, usar el tamaño de fuente predeterminado
            globals.ctx.font = '8px Emulogic';
            globals.ctx.fillText((i + 1) + "." + jugador.name + ": " + jugador.score, x, 100);
            globals.ctx.drawImage(globals.tileSets[0], 30, 0, 32, 30, x, 110, 32, 32);
        }


        x += 100; // Incrementar la posición x para el próximo jugador
        count++;
        if (count === 10) {
            break;
        }
    }

    // Restaurar el tamaño de fuente predeterminado al finalizar el bucle
    globals.ctx.font = '8px Emulogic';

    // Si el bucle no ha alcanzado 10 jugadores, dibujar los jugadores restantes desde el principio del array
    if (count < 10) {
        for (let i = startIndex - 1; i >= 0; i--) {
            let jugador = globals.Players[i];
            
            // Dibujar el texto del jugador
            if (i === globals.playerId) {
                globals.ctx.font = 'bold 16px Emulogic';
                
                globals.ctx.drawImage(globals.tileSets[0], 30, 0, 32, 30, x-2, 80, 64, 64);
                // Dibujar una imagen (en tu caso, un icono de jugador)
            } else {
                globals.ctx.font = '8px Emulogic';
                globals.ctx.fillText((i + 1) + "." + jugador.name + ": " + jugador.score, x, 100);
                // Dibujar una imagen (en tu caso, un icono de jugador)
            globals.ctx.drawImage(globals.tileSets[0], 30, 0, 32, 30, x, 110, 32, 32);
            }

            

            x += 100; // Incrementar la posición x para el próximo jugador
            count++;
            if (count === 10) {
                break;
            }
        }
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

    
    const score = Math.floor(globals.score);
    const highScore = Math.floor(globals.highScore);
    const time = globals.leveltime.value;



    //Draw score
    globals.ctxHUD.font = '8px Emulogic';
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("SCORE", 32, 16);
    globals.ctxHUD.fillStyle = 'lightgray';
    globals.ctxHUD.fillText(" " + score, 32, 32);

    //Draw High Score
    globals.ctxHUD.fillStyle = 'pink';
    
    globals.ctxHUD.fillText("High Score", 135, 16);
    globals.ctxHUD.fillStyle = 'lightgray';
    globals.ctxHUD.fillText(" " + highScore, 135, 32);


    //Draw time
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("TIME", 220, 16);
    globals.ctxHUD.drawImage(globals.tileSets[1], 160,160 , 96, 32, 190, 14, time/3, 32);

     // rage
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("RAGE", 315, 25);

    
    drawSpriteshud();



}

function renderTitle(){
    globals.ctxHUD.font = '16px Emulogic';
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("Wake Up And Yell", 200, 26);
}

function rendercontrols(){

    //Flechas
    globals.ctx.drawImage(globals.tileSets[0], 5, 1315, 16, 16, 150, 5, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 24, 1315, 16, 16, 155, 32, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 56, 1315, 16, 16, 185, 32, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 40, 1315, 16, 16, 128, 32, 32, 32);
    globals.ctx.font = '16px Emulogic';
    globals.ctx.fillStyle = 'black';
    globals.ctx.fillText("Move", 160, 86);

    globals.ctx.drawImage(globals.tileSets[0], 68, 1569, 32, 16, 250, 32, 64, 32);
    globals.ctx.font = '16px Emulogic';
    globals.ctx.fillText("Interact", 285, 86);


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

    if(globals.loop === 0){
        console.log("painting white");
    globals.ctx.drawImage(globals.tileSets[0], 0, globals.canvas.width +20, globals.canvas.height, 200, backgroundX, backgroundY, globals.canvas.width+20, globals.canvas.height);

    }
    else{
        console.log("painting black");

    globals.ctx.drawImage(globals.tileSets[0], 499, globals.canvas.width +20, globals.canvas.height, 200, backgroundX, backgroundY, globals.canvas.width+20, globals.canvas.height);

    }
    globals.ctx.fillStyle = "black";
    let text = "You need to kill 10 enemies,current:" + globals.enemikilled;
    globals.ctx.fillText("You need to kill 10 enemies,current:", backgroundX + 100 , backgroundY);
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
         case particleID.SHINE:
            rendershineParticle(particle)
                
                break;
        case particleID.CONFETI:
                renderconfetiParticle(particle)
                        break;
        default:
            break;
    }
}

 function renderGrassParticle(particle) {
    if (particle.state === particleState.ON) {

        
        globals.ctx.fillStyle = "lightGreen";
        globals.ctx.beginPath();
        globals.ctx.rect(particle.xPos , particle.yPos , 1, 1);
        globals.ctx.fill();
        globals.ctx.closePath();
    } else {
        // console.log("particle off");
    }
}

function renderRainParticle(particle){

 
    globals.ctx.beginPath();
    globals.ctx.rect(particle.xPos, particle.yPos, 0.8,1);
    globals.ctx.fillStyle = 'blue'; // Color de las gotas de lluvia
    globals.ctx.fill();
    globals.ctx.closePath();
}
function renderconfetiParticle(particle){

 
    globals.ctx.beginPath();
    globals.ctx.drawImage(globals.tileSets[0],0,2100,32,32,particle.xPos, particle.yPos, 10,10);
    globals.ctx.closePath();
}

function rendershineParticle(particle){

 
    globals.ctx.beginPath();
    globals.ctx.drawImage(globals.tileSets[0],0,2075,32,32,particle.xPos, particle.yPos, 10,10);
   
    globals.ctx.fill();
    globals.ctx.closePath();
}




function renderExplison(particle){
    if (particle.state === particleState.ON) {
        globals.ctx.fillStyle = "red";
        globals.ctx.globalAlpha = particle.alpha;
        globals.ctx.beginPath();
        globals.ctx.rect(particle.xPos - globals.camara.x, particle.yPos - globals.camara.y,2,2);
        globals.ctx.fill();
        globals.ctx.globalAlpha = 1.0;
    } else {
        console.log("particle off");
    }
}

}


