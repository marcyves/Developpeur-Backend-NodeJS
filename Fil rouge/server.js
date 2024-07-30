const express = require('express');
const path = require('path');
const fs = require('fs');
const router = require('./routes');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

const CatalogController = require('./controller/CatalogController');
const catalogController = new CatalogController("Un beau catalogue de disques");

const ContactController = require('./controller/ContactController');
const contactController = new ContactController();

fs.readFile(path.join(__dirname, "./data/config.json"), 'utf8', 
    (error, data) => {
        if(error){
            console.error(error)
            app.locals.siteName = "[ nom ]";
            app.locals.socials = [ { url:"#", class:"", label:"[social]"}];
            app.locals.routes = [ { url:"/", label: "Accueil"}];
        }else{
            app.locals.siteName = JSON.parse(data).name;
            app.locals.socials = JSON.parse(data).socials;
            app.locals.routes = JSON.parse(data).routes;
        }
    });
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './verti')));

app.use('/', router({ catalogController, contactController }));

app.listen(port, () => {
    console.log(`Application lancée sur http://localhost:${port}`)
});