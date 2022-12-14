// Importaciones de librerías
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

// Conexión a la base de datos
const connectDB = require('./src/db/connection');

connectDB()

// Se inicializa la librería 

const app = express();



// Configuraciones
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());

app.use(morgan("combined"));

app.use(express.json());


// Rutas

app.use(require("./src/routes/user.routes"));//ruta de usuarios
app.use(require("./src/routes/tasks.routes"));//ruta de tareas
app.use(require("./src/routes/login"));//ruta de login



// Iniciar servidor
app.listen(port, console.log(`Servidor iniciado en: http://localhost:${port}`))
