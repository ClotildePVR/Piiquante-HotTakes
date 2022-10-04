const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const verifyPassword = require('../middleware/check-password');
const verifyEmailFormat = require('../middleware/check-email-format');
const verifyEmailUnique = require('../middleware/check-email-unique');
const limitConnexions = require('../middleware/limit');

router.post('/signup', verifyPassword, verifyEmailFormat, userCtrl.signup);
router.post('/login', limitConnexions.limiter, userCtrl.login);

module.exports = router;