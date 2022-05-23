require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {dbConnection} = require('./database/config');

// Crear servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();

console.log(process.env);

// RUTAS
app.get('/',(req, res)=>{
    res.status(400).json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(process.env.PORT,()=> {
    console.log('SERVIDOR CORRIENDO EN PUERTO: '+ process.env.PORT);
});