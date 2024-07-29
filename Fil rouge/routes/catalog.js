const express = require('express');
const router = express.Router();

module.exports = (params) => {

    const { catalogController } = params;
    
    router.get('/', async (requete, reponse) => {
        const discs = await catalogController.loadCatalog();

        reponse.render('layouts', { pageTitle: 'Notre catalogue',
                                    discs,
                                    page: 'catalogue'});
    }); 

    router.get('/:id', async (requete, reponse) => {
        const disc = await catalogController.getDisc(requete.params.id);

        if(disc){
            reponse.render('layouts', { pageTitle: 'Votre sélection',
                                    disc,
                                    page: 'catalogue-detail'});
        } else {
            reponse.render('layouts', { pageTitle: 'Le disque sélectionné n\'existe pas',
                                    page: 'catalogue-nontrouvé'});
        }

    }); 

    return router;
}