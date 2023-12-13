<?php

  include_once './CONEXION/conexionPDO.php';

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verificar que el usuario y la contraseña son correctos
    $query = "SELECT * FROM usuarios WHERE username = :username AND password = :password AND usertype = :usertype";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':usertype', $usertype);
    $stmt->execute();

    // Verificar si el usuario existe
    if ($stmt->rowCount() > 0) {
      // Usuario y contraseña correctos
      // Obtener el tipo de usuario
      $user = $stmt->fetch(PDO::FETCH_ASSOC);
      $userType = $user['user_type'];


      // Crear la sesión
      session_start();
      $_SESSION['username'] = $username;
      $_SESSION['user_type'] = $userType;

      // Redireccionar al usuario a la página correspondiente
      if ($userType == 'admin') {
        header('Location: ../admin.html');
      } else if ($userType == 'medico') {
        header('Location: ../medico.html');
      } else if ($userType == 'paciente') {
        header('Location: ../paciente.html');
      } else {

      }

    }
  }

?>
