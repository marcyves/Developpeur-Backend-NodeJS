import { createServer } from 'http';
import { createReadStream } from 'fs';
const port = 3000;

const sendPage = (response, status, type, path) => {
    response.writeHead(status, { "Content-type": type});
    createReadStream(path).pipe(response);
}
createServer(
    (request, response) => {
        switch(request.url){
            case "/":
                sendPage(response, 200, "text/html", "./index.html");
            break;
            case "/apropos":
                sendPage(response, 200, "text/html", "./apropos.html");
            break;
            default:
                sendPage(response, 200, "text/html", "./404.html");
        }
    }
).listen(port);

console.log(`Le serveur a démarré sur http://localhost:${port}`);