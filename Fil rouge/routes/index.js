const express = require('express');
const router = express.Router();

const catalogRoute = require('./catalog');
const aboutRoute = require('./about');

module.exports = () => {
    
    router.get('/', (requete, reponse) => {
        reponse.render('index', { pageTitle: 'Bienvenue chez Express et Verti'});
    }); 

    router.use('/catalogue', catalogRoute());
    router.use('/apropos', aboutRoute());
    
    return router;
}