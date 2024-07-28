const express = require('express');
const router = express.Router();

module.exports = (params) => {

    const { catalogController } = params;
    
    router.all('/', async (requete, reponse) => {
        const discs = await catalogController.loadCatalog();

        reponse.render('layouts', { pageTitle: 'Notre catalogue',
                                    discs,
                                    page: 'catalogue'});
    }); 

    return router;
}