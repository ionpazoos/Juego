<?php
    // Permitir el acceso desde cualquier origen
    header("Access-Control-Allow-Origin: *");

    // Permitir los métodos de solicitud GET, POST, PUT y OPTIONS
    header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");
    
    // Permitir los encabezados de solicitud Content-Type y Authorization
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    
    // Permitir que las cookies se incluyan en las solicitudes
    header("Access-Control-Allow-Credentials: true");
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
            // global $cfg;

            // $db = $cfg['db'];
            // $host = $cfg['host'];
            // $user = $cfg['user'];
            // $pass = $cfg['pass'];
            // $port = $cfg['port']; 

            $host = "ep-twilight-bar-a2o4mmy3.eu-central-1.aws.neon.tech";
            $user = "jon.pazos";
            $pass = "FUX89CDqowsA";
            $db = "HighScores";
            $port = "5432";
            
            $conn_string = "host=$host port=$port dbname=$db user=$user password=$pass";
 

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