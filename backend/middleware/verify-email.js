module.exports = (req, res, next) => {
    const validEmail = (email) => {
        let emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        let isRegexTrue = emailRegex.test(email);
        isRegexTrue ? next() : res.status(400).json({ message:'Adresse email non valide !' });
    }
    validEmail(req.body.email)
};