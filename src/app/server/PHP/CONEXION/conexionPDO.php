<?php
// FILEPATH: /c:/xampp/htdocs/ProSaludEX/src/app/server/PHP/conexion.php

// Lee los datos de conexión desde el archivo de configuración
$config = parse_ini_file('./CONFIGURACION/configuracion.ini');

$host = $config['host'];
$username = $config['username'];
$password = $config['password'];
$dbname = $config['dbname'];

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Conexión exitosa";
} catch(PDOException $e) {

  echo "Error en la conexión: " . $e->getMessage();

  echo "<script>alert('Ha ocurrido un error en la conexión');</script>";

}
?>
