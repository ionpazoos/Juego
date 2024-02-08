import globals from "./globals.js";
import { initGame } from "./initialize.js";

export function btnStartDown(event)
{
    console.log("OK");

    //Ocultamos el botón de START
    globals.buttonStart.style.visibility = "hidden";

    document.getElementById('divCanvas').style.display = "block";

    //Ruta o absoluta o relativa al fichero que hace la petición (html)
    const url = "http://localhost:3000/SERVER/routes/getAllClassic.php";
    const request = new XMLHttpRequest();

    request.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            if(this.status == 200)
            {
                if(this.responseText != null)
                {
                    const resultJSON = JSON.parse(this.responseText);
                    console.log (resultJSON);

                    //INiciamos los datos del juego
                    initGame(resultJSON);
                }
                else
                    alert("Communication error: no data received");
            }
            else
                alert("Communication error: " + this.statusText);
        }
    }

    request.open('GET', url, true);
    request.responseType = "text";
    request.send();
}

export function btnStartOut(event)
{
    //Recumperamos texto original
    document.getElementById("btnStart").innerHTML = "START";
}

export function btnStartOver(event)
{
    //Cambiamos tel texto
    document.getElementById("btnStart").innerHTML = "OVER";
}

export function btnAddDown(event)
{
    console.log("Add button pressed");

    //Generamos isbn aleatorio
    const isbn = Math.floor(Math.random() * Math.pow(10,13));

    //Send data
    const objectToSend = {
        author:     "Geronimo Stilton",
        title:      "En el Reino de la Fantasia",
        category:   "Fiction",
        year:       "2010",
        isbn:       isbn,
    }

    //String data to send
    const dataToSend = 'author=' + objectToSend.author + '&title=' + objectToSend.title +
                    '&category=' + objectToSend.category + '&year=' + objectToSend.year +
                    '&isbn=' + objectToSend.isbn;

    console.log(dataToSend);

    //Ruta relativa al fichero que hace la petición (testAjax.php)
    const url =  "http://localhost:3000/SERVER/routes/postClassic.php";
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            if(this.status == 200)
            {
                if(this.responseText != null)
                {
                    //console.log(this.responseText);
                    const resultJSON = JSON.parse(this.responseText);
                    //console.log(resultJSON);

                    //Meremos los datos en un array, ya que lo que nos devuelve la ruta es un objeto.
                    const arrayResult = [resultJSON];

                    //Iniciamos los datos
                    initGame(arrayResult);
                }
                else
                    alert("Communication error: No data received");
            }
            else
                alert("Communication error: " + this.statusText);
        }
    }

    request.responseType = "text";
    request.send(dataToSend);
}