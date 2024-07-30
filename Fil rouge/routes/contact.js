const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

module.exports = (params) => {

    const { contactController } = params;

    router.post('/', [
        check('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Un email valide est obligatoire'),
        check('message')
        .trim()
        .isLength({min: 10})
        .escape()
        .withMessage('Un message de plus de 10 caractères est obligatoire.')
    ],
    async (requete, reponse) => {

        const erreurs = validationResult(requete);

        let messages = {};

        if(!erreurs.isEmpty()){
            messages = {
                erreurs: erreurs.array()
            };
        }else{
            const { email, message } = requete.body;
            await contactController.addEntry(email, message);
        };

        reponse.render('layouts', { pageTitle: 'Nous avons reçu votre message',
                                    messages: messages.erreurs,
                                    page: 'contact',
                                    contact: requete.body
                                });
    }); 

    return router;
}