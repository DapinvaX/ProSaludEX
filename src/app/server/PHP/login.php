<?php

include_once './CONEXION/conexionPDO.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Verificar que el usuario y la contraseña son correctos
  $query = "SELECT * FROM usuarios WHERE username = :username AND password = :password";
  $stmt = $pdo->prepare($query);
  $stmt->bindParam(':username', $username);
  $stmt->bindParam(':password', $password);
  $stmt->execute();

  // Verificar si el usuario existe
  if ($stmt->rowCount() > 0) {
    // Usuario y contraseña correctos
    // Obtener el tipo de usuario
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    $userType = $user['user_type'];

    // Redirigir al usuario a su sesión correspondiente
    if ($userType === 'medico') {
      // Mostrar tabla CRUD con la información de los pacientes
      // ...
    } elseif ($userType === 'paciente') {
      // Mostrar tabla con las citas del paciente
      // ...
    }
  } else {
    // Usuario o contraseña incorrectos
    // Realizar acciones en caso de login fallido
    echo "<script>alert('Usuario o contraseña incorrectos');</script>";
  }
}











?>

