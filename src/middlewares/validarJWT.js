const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/user');

const validarJWT = async (req = request, res = response, next) => {

    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }; 
    
    // Se formatea el token 
    //token = token.replace("Bearer ", ""); //armamos la cadena del token bearear
    

    try {

        const { uid } = await jwt.verify(token, process.env.SECRET)
        
        // leer el usuario que corresponde al id
        const usuario = await Usuario.findById(uid)
        .populate('area', ['nombre', 'idArea'])
        .populate('rol', 'nombre');

        if (!usuario) {
            return res.status(401).json({
                error: 'Token no válido - usuario no existe en BD'
            });
        }

        // Verificar si el id tiene estado en true
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado false'
            });
        }


        req.user = usuario;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = validarJWT