const express = require('express');
const router = express.Router();

module.exports = () => {
    
    router.all('/', (requete, reponse) => {
        reponse.render('about', { pageTitle: 'Bienvenue chez Express et Verti'});
    }); 

    return router;
}