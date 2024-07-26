const express = require('express');
const path = require('path');
const router = require('./routes');
const { url } = require('inspector');
const port = 3000;

const app = express();

app.locals.siteName = "La boite à musique";
app.locals.socials = [
    { url: "www.x.com", label: "X", class: "fa-twitter"},
    { url: "www.instagram.com", label: "Instagram", class: "fa-instagram"},
    { url: "www.facebook.com", label: "Facebook", class: "fa-facebook"},
    { url: "www.pinterest.com", label: "Pinterest", class: "fa-pinterest"},
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './verti')));

app.use('/', router());

app.listen(port, () => {
    console.log(`Application lancée sur http://localhost:${port}`)
});