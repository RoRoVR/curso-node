const http = require('http');

const servidor = http.createServer((req, res) => {

    res.end('Ejecutando');
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`Ejecutando en el puerto ${PUERTO}`)
});