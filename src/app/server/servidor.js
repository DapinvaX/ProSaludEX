// Path: src/app/server/servidor.js

import express from 'express';

//Crea un servidor para la aplicación
const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor iniciado...');
});

module.exports = app;

// Crea una instancia de express




// Define el puerto en el que escuchará el servidor

// Define el path de la carpeta publica

// Inicia el servidor

// Exporta la instancia de express


