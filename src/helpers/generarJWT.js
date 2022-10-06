const { response } = require('express');
const jwt = require('jsonwebtoken');

const generar_jwt = (uid = '', seed = '', expiresIn = '') => {
    const payload = { uid };
    return new Promise((resolve, reject) => {

        jwt.sign(payload, seed, {
            expiresIn
        },
            (error, token) => {
                if (error) {
                    console.log(error)
                    reject('Error al generar token')
                }
                // console.log(token)
                resolve(token)
            }
        )
    });
};
module.exports = {
    generar_jwt
}