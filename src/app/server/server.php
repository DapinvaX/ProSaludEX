<¿<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "nombre_de_la_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

// Función para registrar un usuario
function registrarUsuario($nombre, $email, $password) {
    global $conn;

    // Verificar si el usuario ya existe en la base de datos
    $sql = "SELECT * FROM usuarios WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        return "El email ya está registrado";
    }

    // Insertar el nuevo usuario en la base de datos
    $sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        return "Usuario registrado exitosamente";
    } else {
        return "Error al registrar el usuario: " . $conn->error;
    }
}

// Función para iniciar sesión
function iniciarSesion($email, $password) {
    global $conn;

    // Verificar si el usuario existe en la base de datos
    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        return "Inicio de sesión exitoso";
    } else {
        return "Email o contraseña incorrectos";
    }
}

// Cerrar la conexión a la base de datos
$conn->close();


?>
