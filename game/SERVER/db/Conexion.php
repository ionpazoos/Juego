<?php

    //EL resto de lcases heredan esta clase realiza la conexion con mysqli y singleton

    require_once "login_data.php";

    class Conexion
    {
        private static $_singleton = null;
        private $dbh;
        private $errno;
        private $num_rows;

        public static function getInstance()
        {
            if(is_null(self::$_singleton))
            {
                self::$_singleton = new self();
            }
            return self::$_singleton;
        }

        private function __clone()
        {
            trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR);
        }

        public function __wakeup()
        {
            trigger_error("No puede deserializar una instancia de " . get_class($this) . " class.", E_USER_ERROR);
        }

        private function __construct()
        {
            global $cfg;

            $db = $cfg['nombre_bd'];
            $host = $cfg['servidor'];
            $user = $cfg['usuario'];
            $pass = $cfg['password'];

            $conn_string = "host=$host dbname=$db user=$user password=$pass";
            $this->dbh = pg_connect($conn_string);

            if(!$this->dbh)
            {
                die("Fatal error en la conexion con la BD");
            }
        }

        public function getConnection()
        {
            return self::$_singleton;
        }

        public function cerrar()
        {
            pg_close($this->dbh);
            self::$_singleton = null;
        }

        protected function query($sql)
        {
            $result = pg_query($this->dbh, $sql);

            if(!$result)
            {
                echo "Error: " . $sql . "<br>" . pg_last_error($this->dbh);
                die("Fatal error al ejecutar query");
            }

            return $result;
        }
    }

?>