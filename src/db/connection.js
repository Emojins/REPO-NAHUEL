const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        mongoose.connect('mongodb+srv://Paniagua:12345a@ipf2022.hkoo96p.mongodb.net/usuarios?retryWrites=true&w=majority', {
    });
    console.log('Conectado a la Base de Datos');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;
