<?php

  include_once './CONEXION/conexionPDO.php';


  $nombre = $_POST['nombre'];
  $apellido1 = $_POST['apellido1'];
  $apellido2 = $_POST['apellido2'];
  $sexo = $_POST['sexo'];
  $fecha_nacimiento = $_POST['fecha_nacimiento'];
  $dni = $_POST['dni'];
  $num_ss = $_POST['num_ss'];
  $telefono = $_POST['telefono'];
  $direccion = $_POST['direccion'];
  $ciudad = $_POST['ciudad'];
  $email = $_POST['email'];
  $password = $_POST['password'];


  $sql = "INSERT INTO pacientes (nombre, apellido1, apellido2, sexo, fecha_nacimiento, dni, num_ss, telefono, direccion, ciudad, email, password) VALUES ('$nombre', '$apellido1', '$apellido2', '$sexo', '$fecha_nacimiento', '$dni', '$num_ss', '$telefono', '$direccion', '$ciudad', '$email', '$password')";

  $conexion->exec($sql);





?>
