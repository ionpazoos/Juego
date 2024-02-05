import globals from "./globals.js";

export default function enviarPuntuacion() {
    console.log("enviando...");
    var playerName = document.getElementById('playerName').value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./src/score.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Manejar la respuesta del servidor (puedes mostrar un mensaje al usuario, redirigir, etc.)
                console.log(xhr.responseText);
            } else {
                // Manejar errores del servidor
                console.error('Error en la solicitud al servidor:', xhr.status, xhr.statusText);
            }
        }
    };

    var data = 'player_name=' + encodeURIComponent(playerName) + '&score=' + encodeURIComponent(globals.score);
    xhr.send(data);
}