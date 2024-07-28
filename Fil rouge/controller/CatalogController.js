const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class CatalogController {

    constructor(){
        this.dataFile = './data/catalog.json';
    }

    async loadCatalog(){
        const data = await readFile(this.dataFile, 'utf-8');
        return JSON.parse(data).produits;
    }

}

module.exports = CatalogController;