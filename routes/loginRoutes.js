const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

const registerController = require('../controllers/registerController');

// Login route
router.post('/login', loginController.login);
router.post('/register', registerController.register);

module.exports = router;