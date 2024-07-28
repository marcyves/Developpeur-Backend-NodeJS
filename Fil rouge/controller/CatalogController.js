class CatalogController {

    constructor(m){
        this.message = m;
    }

    getMessage(){
        return this.message;
    }
}

module.exports = CatalogController;