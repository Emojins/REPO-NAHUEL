const { iniciarSesion } = require('../controllers/auth');

const router = require('express').Router();

router.post('/login', iniciarSesion )


module.exports = router;