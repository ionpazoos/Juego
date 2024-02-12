<?php
header("Access-Control-Allow-Origin: *");

ini_set('log_errors', 1);
ini_set('error_log', 'phperrorsget.log');

// Establecer los detalles de la conexión a la base de datos (reemplaza con tus propios detalles de conexión)
$servername = "ep-twilight-bar-a2o4mmy3.eu-central-1.aws.neon.tech";
$username = "jon.pazos";
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
    // Consulta SQL para obtener el nombre de usuario y su mejor puntuación
    $sql = "SELECT name AS player_name, MAX(score) AS best_score 
    FROM Players
    JOIN Scores ON Players.PlayerID = Scores.PlayerID 
    GROUP BY name
    ORDER BY MAX(score) DESC;";

    // Ejecutar la consulta
    $result = pg_query($conn, $sql);

    if ($result === false) {
        // Si hay un error en la consulta, registrar el error y terminar la ejecución del script
        $error_message = "Error en la consulta: " . pg_last_error($conn);
        error_log($error_message);
        die($error_message);
    }

    // Array para almacenar los resultados
    $users = array();

    // Recorrer los resultados y construir el array de usuarios
    while ($row = pg_fetch_assoc($result)) {
        $users[] = array(
            'player_name' => $row['player_name'],
            'best_score' => $row['best_score']
        );
    }

    // Devolver el array como JSON
    echo json_encode($users);
} finally {
    // Cerrar la conexión
    pg_close($conn);
}
?>
