const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class ContactController{

    constructor(){
        this.dataFile = './data/contact.json';
    }

    async addEntry(email, message){

        let contacts = [];
        let data = await readFile(this.dataFile, 'utf-8');
        if(data){
            contacts = JSON.parse(data);
        }
        contacts.unshift({ email, message});

        return await writeFile(this.dataFile, JSON.stringify(contacts));
    }

}

module.exports = ContactController;