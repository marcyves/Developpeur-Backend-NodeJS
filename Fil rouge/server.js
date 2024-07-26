const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, './verti')));
app.get('/', (requete, reponse) => {
    reponse.sendFile(path.join(__dirname, './verti/index.html'));
});

app.listen(port, () => {
    console.log(`Application démarrée sur http://localhost:${port}`)
});