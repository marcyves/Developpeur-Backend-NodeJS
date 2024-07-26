const express = require('express');

const port = 3000;

const app = express();

app.get('/', (requete, reponse) => {
    reponse.send('Hello the world!');
});

app.listen(port, () => {
    console.log(`Application lancée sur http://localhost:${port}`)
});