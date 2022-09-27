const passwordSchema = require('../models/password');

module.exports= (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Le mot de passe doit faire entre 8 et 20 caractères et contenir au moins une majuscule, une minuscule, un chiffre, et ne doit pas contenir d\'espace' })
    } else {
        next();
    }
};