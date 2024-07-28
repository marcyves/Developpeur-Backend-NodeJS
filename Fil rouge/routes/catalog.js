const express = require('express');
const router = express.Router();

module.exports = (params) => {

    const { catalogController } = params;
    
    router.all('/', (requete, reponse) => {
        const message = catalogController.getMessage();

        reponse.render('layouts', { pageTitle: 'Notre catalogue',
                                    message: message,
                                    page: 'catalogue'});
    }); 

    return router;
}