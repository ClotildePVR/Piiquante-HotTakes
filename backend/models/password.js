// Etablir un schema de validation de mot de passe
const passwordValidator = require('password-validator');
const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                // Longueur min 8
.is().max(20)               // Longueur max 20
.has().uppercase()          // Doit contenir des majuscules
.has().lowercase()          // Doit contenir des minuscules
.has().digits()             // Doit contenir des chiffres
.has().not().spaces()       // Ne doit pas contenir d'espaces

module.exports = passwordSchema;