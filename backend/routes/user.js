const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const verifyPassword = require('../middleware/verify-password');
const verifyEmail = require('../middleware/verify-email');

router.post('/signup', verifyPassword, verifyEmail, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;