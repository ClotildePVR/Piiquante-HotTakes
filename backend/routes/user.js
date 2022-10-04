const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const verifyPassword = require('../middleware/check-password');
const verifyEmail = require('../middleware/check-email');

router.post('/signup', verifyEmail, verifyPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;