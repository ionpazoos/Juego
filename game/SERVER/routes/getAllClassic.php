<?php

    require_once (__DIR__."/../controller/Controller.php");

    $result = $classic->getAll();

    //Devolvemos el resultado de la BD como JSON
    echo json_encode($result);

?>