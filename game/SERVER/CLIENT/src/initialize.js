import Card from "./Card.js";
import globals from "./globals.js";
import {btnStartDown, btnStartOver, btnStartOut, btnAddDown} from "./events.js";
import { CARD_SIZE } from "./constants.js";
import render from "./gameRender.js";


window.onload = init;

function init()
{
    globals.buttonStart = document.getElementById('btnStart');
    globals.buttonAdd = document.getElementById('btnAdd');

    // Get a reference to the canvas
    globals.canvas = document.getElementById('gameScreen' );
    
    document.getElementById('divCanvas').style.display = "none";

    // Context
    globals.ctx = globals.canvas.getContext('2d');

    //Inicializamos listeners
    globals.buttonStart.addEventListener("mousedown", btnStartDown, false);
    globals.buttonStart.addEventListener("mouseover", btnStartOver, false);
    globals.buttonStart.addEventListener("mouseout" , btnStartOut,  false);

    globals.buttonAdd.addEventListener("mousedown", btnAddDown, false);
}

export function initGame(data)
{
    //Creamos las cartas
    createCards(data);
    
    //Dibujamos las cartas
    render();
}


function createCards(data)
{
    let card;
    //Reseteamos las cartas
    globals.cards = [];
    for (let i = 0; i < data.length; ++i)
    {
        card= new Card(
        0,
        0,
        data[i].id,
        data[i].name,
        data[i].score
        )

        globals.cards.push(card);
    }

    //Posicionamos las cartas en la pantalla
    setCardPosition();

}

function setCardPosition()
{
    //Posición inicial
    let yPos = 20;
    let xPos = 10;
    for (let i = 0; i < globals.cards.length; ++i)
    {
        globals.cards[i].xInit = xPos;
        globals.cards[i].yInit = yPos;

        globals.cards[i].xPos = xPos;
        globals.cards[i].yPos = yPos;
        
        xPos += CARD_SIZE + 20;
        
        if (i % 6 === 5)
        {
            yPos += 200;
            xPos = 10;
        }
    }
}