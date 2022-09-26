const router = require('express').Router();
const { RegistroController, LoginController } = require('../controller/auth.controller')

router.post('/registro', RegistroController)
router.post('/login', LoginController)

module.exports = router;