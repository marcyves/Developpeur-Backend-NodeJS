const express = require('express');
const path = require('path');
const router = require('./routes');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './verti')));

app.use('/', router());

app.listen(port, () => {
    console.log(`Application lancée sur http://localhost:${port}`)
});