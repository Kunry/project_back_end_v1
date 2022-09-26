const router = require('express').Router();
const { GetUser } = require('../controller/user.controller');

router.get('/me', GetUser)

module.exports = router;
