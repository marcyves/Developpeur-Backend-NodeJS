console.log("Mon premier serveur Web");

const http = require("http");

http.createServer(
    (request, response) => {
        response.writeHead(200, { "Content-type": "text/plain"});

        switch(request.url){
            case "/":
                response.end("Bonjour le Web");
            break;
            case "/apropos":
                response.end("Je suis ton premier serveur Web");
            break;
            default:
                response.end("Erreur 404");
        }
    }
).listen(3000);

console.log("Le serveur Web est lancé");
