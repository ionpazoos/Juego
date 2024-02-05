<?php
// Habilitar el registro de errores en un archivo
ini_set('log_errors', 1);
ini_set('error_log', 'phperrors.log');

// Establecer la conexión a la base de datos (reemplaza con tus propios detalles de conexión)
$servername = "127.0.0.1";
$username = "game";
$password = "123456";
$dbname = "GameScores";
$port = "3306";
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    // Registrar el error y terminar la ejecución del script
    error_log("Conexión fallida: " . $conn->connect_error);
    die("Conexión fallida. Consulta los registros de errores para más detalles.");
}

// Obtener datos del formulario o de la solicitud
$playerName = isset($_POST['player_name']) ? $_POST['player_name'] : null;
$score = isset($_POST['score']) ? $_POST['score'] : null;

// Verificar si los datos están presentes
if ($playerName === null || $score === null) {
    // Registrar el error y terminar la ejecución del script
    error_log("Datos no recibidos correctamente.");
    die("Datos no recibidos correctamente.");
}

// Comprobar si el jugador ya existe
$sql = "SELECT player_id FROM Players WHERE player_name = '$playerName'";
$result = $conn->query($sql);

if ($result === false) {
    // Si hay un error en la consulta, registrar el error y terminar la ejecución del script
    $error_message = "Error en la consulta: " . $conn->error;
    error_log($error_message);
    die($error_message);
}

if ($result->num_rows > 0) {
    // El jugador ya existe, actualizamos su puntaje
    $row = $result->fetch_assoc();
    $playerId = $row['player_id'];

    $sql = "INSERT INTO Scores (player_id, score) VALUES ($playerId, $score)";
    if ($conn->query($sql) === TRUE) {
        echo "Puntaje insertado correctamente.";
    } else {
        // Registrar el error si hay un problema al insertar el puntaje
        $error_message = "Error al insertar el puntaje: " . $conn->error;
        error_log($error_message);
        echo $error_message;
    }
} else {
    // El jugador no existe, lo creamos y luego insertamos el puntaje
    $sql = "INSERT INTO Players (player_name) VALUES ('$playerName')";
    if ($conn->query($sql) === TRUE) {
        $playerId = $conn->insert_id;

        $sql = "INSERT INTO Scores (player_id, score) VALUES ($playerId, $score)";
        if ($conn->query($sql) === TRUE) {
            echo "Nuevo jugador y puntaje insertados correctamente.";
        } else {
            // Registrar el error si hay un problema al insertar el puntaje
            $error_message = "Error al insertar el puntaje: " . $conn->error;
            error_log($error_message);
            echo $error_message;
        }
    } else {
        // Registrar el error si hay un problema al insertar el nuevo jugador
        $error_message = "Error al insertar el nuevo jugador: " . $conn->error;
        error_log($error_message);
        echo $error_message;
    }
}

// Cerrar la conexión
$conn->close();
?>
