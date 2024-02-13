<?php
    // Permitir el acceso desde cualquier origen
    header("Access-Control-Allow-Origin: *");

    // Permitir los métodos de solicitud GET, POST, PUT y OPTIONS
    header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");
    
    // Permitir los encabezados de solicitud Content-Type y Authorization
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    
    // Permitir que las cookies se incluyan en las solicitudes
    header("Access-Control-Allow-Credentials: true");


    require_once (__DIR__."/../controller/Controller.php");



    if(isset($_POST['nombre']) && isset($_POST['score']))
    {

        //Si se reciben todos los datos por POST creamos nuestro nuevo objeto Classic
        $newClassic['nombre']   = $_POST['nombre'];
        $newClassic['score']    = $_POST['score'];


        //Añadimos el nuevo objeto a la BD
        $returnValue = $classic->addNew($newClassic);

        if ($returnValue == FALSE) {
            $response = array("error" => "Error en la inserción del elemento en la base de datos");
            echo json_encode($response);
        } else {
            echo json_encode($newClassic);
        }
    }
    else
    {
        die("Forbidden");
    }
?>