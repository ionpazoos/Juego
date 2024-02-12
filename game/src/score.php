<?php
// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir los métodos GET, POST, PUT, DELETE y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Permitir ciertos encabezados
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Habilitar el registro de errores en un archivo
ini_set('log_errors', 1);
ini_set('error_log', 'phperrors.log');

// Leer el cuerpo de la solicitud como JSON
$json = file_get_contents('php://input');

// Decodificar el JSON a un arreglo asociativo
$data = json_decode($json, true);

// Verificar si los datos están presentes
$playerName = isset($data['player_name']) ? $data['player_name'] : null;
$score = isset($data['score']) ? $data['score'] : null;

// Verificar si los datos se recibieron correctamente
if ($playerName === null || $score === null) {
    // Registrar el error y terminar la ejecución del script
    error_log("Datos no recibidos correctamente. Player: $playerName");
    die("Datos no recibidos correctamente. Player: $playerName");
}

// Establecer los detalles de la conexión a la base de datos (reemplaza con tus propios detalles de conexión)
$servername = "ep-twilight-bar-a2o4mmy3.eu-central-1.aws.neon.tech";
$username = "jon.pazos"; // Cambiado de 'jon.pazos' a 'username'
$password = "FUX89CDqowsA";
$dbname = "HighScores";
$port = "5432";

// Establecer la conexión a la base de datos utilizando pg_connect
$conn = pg_connect("host=$servername port=$port dbname=$dbname user=$username password=$password");

// Verificar la conexión
if (!$conn) {
    // Si la conexión falla, mostrar un mensaje de error y terminar el script
    error_log("Error en la conexión: " . pg_last_error($conn));
    die("Error en la conexión. Consulta los registros de errores para más detalles.");
}

try {
    echo "Conexión establecida correctamente";

    // Comprobar si el jugador ya existe
    $sql = "SELECT playerid FROM Players WHERE name = '$playerName'";
    $result = pg_query($conn, $sql);

    if ($result === false) {
        // Si hay un error en la consulta, registrar el error y terminar la ejecución del script
        $error_message = "Error en la consulta: " . pg_last_error($conn);
        error_log($error_message);
        die($error_message);
    }

    if (pg_num_rows($result) > 0) {
        // El jugador ya existe, actualizamos su puntaje
        $row = pg_fetch_assoc($result);
        $playerId = $row['playerid'];

        $sql = "INSERT INTO Scores (playerid, score) VALUES ($playerId, $score)";
        $result = pg_query($conn, $sql);
        if ($result) {
            echo "Puntaje insertado correctamente.";
        } else {
            // Registrar el error si hay un problema al insertar el puntaje
            $error_message = "Error al insertar el puntaje: " . pg_last_error($conn);
            error_log($error_message);
            echo $error_message;
        }
    } else {
        // El jugador no existe, lo creamos y luego insertamos el puntaje
        $sql = "INSERT INTO players(name) VALUES ('$playerName')";
        $result = pg_query($conn, $sql);
        if ($result) {
            $row = pg_fetch_assoc($result);
            $playerId = $row['PlayerID'];

            $sql = "INSERT INTO Scores(playerid, score) VALUES ($playerId, $score)";
            $result = pg_query($conn, $sql);
            if ($result) {
                echo "Nuevo jugador y puntaje insertados correctamente.";
            } else {
                // Registrar el error si hay un problema al insertar el puntaje
                $error_message = "Error al insertar el puntaje: " . pg_last_error($conn);
                error_log($error_message);
                echo $error_message;
            }
        } else {
            // Registrar el error si hay un problema al insertar el nuevo jugador
            $error_message = "Error al insertar el nuevo jugador: " . pg_last_error($conn);
            error_log($error_message);
            echo $error_message;
        }
    }
} finally {
    // Cerrar la conexión   
    pg_close($conn);
}
?>
