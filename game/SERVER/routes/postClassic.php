<?php
ini_set('log_errors_post', 1);
ini_set('error_log', 'phperrors.log');
    require_once (__DIR__."/../controller/Controller.php");


  // Obtener datos del formulario o de la solicitud
  $playerName = isset($_POST['player_name']) ? $_POST['player_name'] : null;
  $score = isset($_POST['score']) ? $_POST['score'] : null;

  // Verificar si los datos están presentes
  if ($playerName !== null || $score !== null) 
    {
    // Comprobar si el jugador ya existe
    $sql = "SELECT player_id FROM Players WHERE player_name = '$playerName'";
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
        $playerId = $row['player_id'];

        $sql = "INSERT INTO Scores (player_id, score) VALUES ($playerId, $score)";
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
        $sql = "INSERT INTO Players (player_name) VALUES ('$playerName')";
        $result = pg_query($conn, $sql);
        if ($result) {
            $playerId = pg_last_oid($result);

            $sql = "INSERT INTO Scores (player_id, score) VALUES ($playerId, $score)";
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
        if($returnValue == FALSE)
        {
            echo "Error en la intrudicción de nuevo elemento en la BD";
        }
        else
        {
            //Devolvemos el resultado añadido en la BD como JSON
            echo json_encode($newClassic);
        }
    }
    else
    {
        die("ERROR");
    }
?>