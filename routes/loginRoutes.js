const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');
const registerController = require('../controllers/RegisterController');

// Login route
router.post('/api/login', loginController.login);
router.post('/api/register', registerController.register);

module.exports = router;