from flask import Flask, request, jsonify, session
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = "secret_key"
bcrypt = Bcrypt(app)

# Configuración de la conexión a la base de datos MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'prosaludex'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# Creación de las tablas de pacientes y médicos en la base de datos
with app.app_context():
  cur = mysql.connection.cursor()
  cur.execute("""
    CREATE TABLE IF NOT EXISTS pacientes (
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL,
      apellido1 VARCHAR(100) NOT NULL,
      apellido2 VARCHAR(100) NOT NULL,
      fecha_nacimiento DATE NOT NULL,
      telefono VARCHAR(20) NOT NULL,

    )
  """)
  cur.execute("""
    CREATE TABLE IF NOT EXISTS medicos (
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL,
      apellido1 VARCHAR(100) NOT NULL,
      apellido2 VARCHAR(100) NOT NULL,
      especialidad VARCHAR(100) NOT NULL,
      telefono VARCHAR(20) NOT NULL,
    )
  """)
  cur.execute("""

  CREATE TABLE IF NOT EXISTS usuarios (
              id INT(11) NOT NULL AUTO_INCREMENT,
              email VARCHAR(100) NOT NULL,
              password VARCHAR(100) NOT NULL,
              tipo VARCHAR(100) NOT NULL,
              PRIMARY KEY (email),
              )

              """)

  mysql.connection.commit()
  cur.close()

# Rutas para el registro e inicio de sesión de usuarios
@app.route('/registro_paciente', methods=['POST'])
def registro_paciente():
  nombre = request.json['nombre']
  apellidos = request.json['apellidos']
  fecha_nacimiento = request.json['fecha_nacimiento']
  telefono = request.json['telefono']
  email = request.json['email']
  password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')

  cur = mysql.connection.cursor()
  cur.execute("INSERT INTO pacientes (nombre, apellidos, fecha_nacimiento, telefono, email, password) VALUES (%s, %s, %s, %s, %s, %s)", (nombre, apellidos, fecha_nacimiento, telefono, email, password))
  mysql.connection.commit()
  cur.close()

  return jsonify({'mensaje': 'Paciente registrado correctamente'})

@app.route('/registro_medico', methods=['POST'])
def registro_medico():
  nombre = request.json['nombre']
  apellidos = request.json['apellidos']
  especialidad = request.json['especialidad']
  telefono = request.json['telefono']
  email = request.json['email']
  password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')

  cur = mysql.connection.cursor()
  cur.execute("INSERT INTO medicos (nombre, apellidos, especialidad, telefono, email, password) VALUES (%s, %s, %s, %s, %s, %s)", (nombre, apellidos, especialidad, telefono, email, password))
  mysql.connection.commit()
  cur.close()

  return jsonify({'mensaje': 'Médico registrado correctamente'})

@app.route('/login', methods=['POST'])
def login():
  email = request.json['email']
  password = request.json['password']

  cur = mysql.connection.cursor()
  cur.execute("SELECT * FROM pacientes WHERE email = %s", [email])
  paciente = cur.fetchone()
  cur.close()

  if paciente:
    if bcrypt.check_password_hash(paciente['password'], password):
      session['paciente_id'] = paciente['id']
      return jsonify({'mensaje': 'Inicio de sesión correcto'})
    else:
      return jsonify({'mensaje': 'Contraseña incorrecta'})
  else:
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM medicos WHERE email = %s", [email])
    medico = cur.fetchone()
    cur.close()

    if medico:
      if bcrypt.check_password_hash(medico['password'], password):
        session['medico_id'] = medico['id']
        return jsonify({'mensaje': 'Inicio de sesión correcto'})
      else:
        return jsonify({'mensaje': 'Contraseña incorrecta'})
    else:
      return jsonify({'mensaje': 'Usuario no encontrado'})

# Rutas para la gestión de pacientes y médicos
@app.route('/pacientes', methods=['GET'])
def pacientes():
  cur = mysql.connection.cursor()
  cur.execute("SELECT * FROM pacientes")
  pacientes = cur.fetchall()
  cur.close()

  return jsonify(pacientes)

@app.route('/medicos', methods=['GET'])
def medicos():
  cur = mysql.connection.cursor()
  cur.execute("SELECT * FROM medicos")
  medicos = cur.fetchall()
  cur.close()

  return jsonify(medicos)

if __name__ == '__main__':
  app.run(debug=True)
