import { Game, Tile } from "./constants.js";
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

        default:
            console.error("Error: Game State invalid");
    }

function drawGame(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    // Dibujamos el mapa (nivel)
    renderMap();

    //Pintamos los FPS en pantalla
    //globals.ctx.fillText("FPS: " + 1 / globals.deltaTime, 30, 30);

    //  console.log(globals.deltaTime);
    drawSprites();

    //Dibujamos el HUD
    renderHUD();

}

function drawNewGame(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    renderTitle();
    renderMap();
    renderText();

}

function controls(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    renderTitle();
    renderMap();
    rendercontrols();

}

function highScore(){
    
    // Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);

    renderTitle();
    renderMap();

    renderscore();

}




function historia (){
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height);
    renderTitle();
    renderbook();
 
}

function renderbook(){


    globals.ctx.drawImage(globals.tileSets[0], 0,769 , 1920, 1080, 0, 0, 1000, 360);
    globals.ctx.font = '10px upheavtt';
    globals.ctx.fillText("Mihi Gaiztoen Hirian", 120, 40); 
    globals.ctx.fillText("mago zurtzen familiaren oinordekoa", 93, 52); 
    globals.ctx.fillText("jaiotzen da, El Erudito X.G", 90, 64); 
    globals.ctx.fillText("Txikitatik, bere bulkada psikotikoak ", 80, 76); 
    globals.ctx.fillText("inguruan kaosa sortuz.Bere kontrolik ", 80, 88); 
    globals.ctx.fillText("ezaz kezkatuta, familiako zaharrek ", 80, 100); 
    globals.ctx.fillText("maisu zahar bati bidaltzen diote ", 80, 112);
    globals.ctx.fillText("X.G, Silvano maisua bezala ezaguna", 80, 124); 
    globals.ctx.fillText("ezaguna, material islatzailearen ", 80, 136); 
    globals.ctx.fillText("urregintzan aditua.", 80, 148); 

    globals.ctx.fillText("Maisu Silvanok X.G Mihi ", 270, 40); 
    globals.ctx.fillText("Labirintorantz gidatzen du bere haserrea", 270, 52); 
    globals.ctx.fillText("kontrolatzen irakasteko.Ilusioz eta ", 270, 64); 
    globals.ctx.fillText("beteriko labirinto magiko honek ", 270, 76); 
    globals.ctx.fillText("Erudito gaztearen barne-oinazeak  ", 270, 88); 
    globals.ctx.fillText("irudikatzen ditu.Pazientziaz eta", 270, 100); 
    globals.ctx.fillText("jakinduriaz, Maisu Silvanok", 270, 112); 
    globals.ctx.fillText("barne-hausnarketaren eta autokontrolaren", 269, 124); 
    globals.ctx.fillText("irakasten dio X.G. Aurrera egin ahala", 269, 136); 
    globals.ctx.fillText("Silvano maisuak familiaren historia ", 269, 148); 



}

function renderText(){
    globals.ctx.font = '16px ';
    globals.ctx.fillText("New Game", 60, 80); 
    globals.ctx.fillText("History", 210, 80);
    globals.ctx.fillText("Controls", 330, 80);  
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
    const brickSize = globals.level[globals.gameState-1].imageSet.gridSize;
    const levelData = globals.level[globals.gameState-1].data;
    const imagepath = globals.level[globals.gameState -1].imageSet.imgpath;
    globals.ctx.drawImage(globals.tileSets[0],0,490,480,272,0,0,490,272);

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








// function calculateFil(xTile) {
//     // Calculamos la fila actual y ajustamos xTile cuando llega a 384
//     return Math.floor(xTile / 384);
// }



    

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

function drawSprites(){

    for (let i = 0; i < globals.sprites.length; ++i){

        const sprite = globals.sprites[i];

        //TEST: Dibuja un rectangulo alrededor del sprite
        drawSpriteRectangle(sprite);

        renderSprite(sprite);
    }
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

function renderHUD(){

    //TEST: Datos metidos en bruto
    const score = 1500;
    const highScore = 130000;
    const life = 40;
    const time = globals.leveltime.value;



    //Draw score
    globals.ctxHUD.font = '17px upheavtt';
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("SCORE", 8, 16);
    globals.ctxHUD.fillStyle = 'lightgray';
    globals.ctxHUD.fillText(" " + score, 3, 32);

    //Draw High Score
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("HIGH SCORE", 72, 16);
    globals.ctxHUD.fillStyle = 'lightgray';
    globals.ctxHUD.fillText(" " + highScore, 77, 32);

    
    //Draw time
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("TIME", 221, 16);
    globals.ctxHUD.drawImage(globals.tileSets[1], 160,160 , 96, 32, 190, 14, time/1.6, 32);

     // rage
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("RAGE", 305, 25);

    //erudito
    globals.ctxHUD.drawImage(globals.tileSets[0], 0,1837 , 36, 36, 360, 5, 36, 36);
    




}

function renderTitle(){
    globals.ctxHUD.font = '30px upheavtt';
    globals.ctxHUD.fillStyle = 'pink';
    globals.ctxHUD.fillText("Haserrearen esnatzea", 80, 26);
}

function rendercontrols(){

    //Flechas
    globals.ctx.drawImage(globals.tileSets[0], 3, 1317, 16, 16, 150, 5, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 22, 1317, 16, 16, 155, 32, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 54, 1317, 16, 16, 185, 32, 32, 32);
    globals.ctx.drawImage(globals.tileSets[0], 39, 1317, 16, 16, 128, 32, 32, 32);
    globals.ctx.font = '15px upheavtt';
    globals.ctx.fillText("Move", 145, 76);

    globals.ctx.drawImage(globals.tileSets[0], 65, 1574, 32, 16, 250, 32, 64, 32);
    globals.ctx.font = '15px upheavtt';
    globals.ctx.fillText("Interact", 250, 76);


}



