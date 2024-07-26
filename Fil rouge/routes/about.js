const express = require('express');
const router = express.Router();

module.exports = () => {
    
    router.all('/', (requete, reponse) => {
        reponse.render('layouts', { pageTitle: 'Bienvenue chez Express et Verti',
                                    page: 'apropos'});
    }); 

    return router;
}