import globals from "./globals.js";

export  function enviarPuntuacion() {
    console.log("enviando...");
    var playerName = document.getElementById('playerName').value;
    

    var data = {
        player_name: playerName,
        score: globals.score
    };
    console.log(JSON.stringify(data));
    fetch('http://localhost:3000/game/src/score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
       
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud al servidor:', response.status, response.statusText);
        }
        return response.text();
    })
    .then(responseText => {
        console.log(responseText);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}

export async function obtenerMejoresPuntuaciones() {
    try {
        const response = await fetch('http://localhost:3000/game/src/getHighScores.php');
        if (!response.ok) {
            throw new Error(`Error en la solicitud al servidor: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return []; // Devolvemos un array vacío en caso de error
    }
}

export async function cargarMejoresPuntuaciones() {    
    try {
        const jugadores = await obtenerMejoresPuntuaciones();
       return jugadores;
        
    } catch (error) {
        console.error('Error al cargar los mejores puntajes:', error);
    }
}