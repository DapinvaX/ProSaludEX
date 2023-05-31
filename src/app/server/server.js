const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: true
}));

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Admin1234',
  database: 'bd_consulta'
});

// Conecta a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

//Autenticación
// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
  const { usuario, contraseña } = req.body;

  // Verifica si el usuario existe en la base de datos
  const checkUserQuery = 'SELECT * FROM usuarios WHERE usuario = ?';
  db.query(checkUserQuery, [usuario], (err, results) => {
    if (err) {
      throw err;
    }

    if (results.length === 0) {
      res.status(401).send('Usuario no encontrado');
      return;
    }

    const user = results[0];

    // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
    bcrypt.compare(contraseña, user.contraseña, (err, isMatch) => {
      if (err) {
        throw err;
      }

      if (!isMatch) {
        res.status(401).send('Contraseña incorrecta');
        return;

        }
      });
  }
  )}
  );
