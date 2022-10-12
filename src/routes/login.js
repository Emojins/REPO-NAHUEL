const { iniciarSesion } = require('../controllers/login');

const router = require('express').Router();

router.post('/login', iniciarSesion )


module.exports = router;