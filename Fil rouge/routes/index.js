const express = require('express');
const router = express.Router();

const catalogRoute = require('./catalog');
const aboutRoute = require('./about');
const contactRoute = require('./contact');

module.exports = (params) => {
    
    router.get('/', (requete, reponse) => {
        reponse.render('layouts', { pageTitle: 'Bienvenue à la boite à musique',
                        page: 'home'});
    }); 

    router.use('/catalogue', catalogRoute(params));
    router.use('/apropos', aboutRoute());
    router.use('/contact', contactRoute(params));

    router.use('/', (requete, reponse) => {
        reponse.render('layouts', { pageTitle: "La page demandée n'exite pas",
            page: 'erreur'})
    })
    
    return router;
}