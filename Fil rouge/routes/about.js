const express = require('express');
const router = express.Router();

module.exports = () => {
    
    router.all('/', (requete, reponse) => {
        reponse.render('layouts', { pageTitle: 'À propos de la boite à musique',
                                    page: 'apropos'});
    }); 

    return router;
}