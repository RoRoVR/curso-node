const http = require('http');

const servidor = http.createServer((req, res) => {

    console.log('==> req (solicitud)');
    console.log(req);

    console.log('==> res (solicitud)');
    console.log(res);
    
    res.end('Hola Mundo...');
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`);
});