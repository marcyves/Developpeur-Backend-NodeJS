const express = require('express');
const router = express.Router();

module.exports = (params) => {

    const { contactController } = params;

    router.post('/', (requete, reponse) => {
        console.log(requete);
        reponse.render('layouts', { pageTitle: 'Nous avons reçu votre message',
                                    page: 'contact',
                                    contact: requete.body
                                });
    }); 

    return router;
}