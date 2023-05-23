const http = require('http');

// Creando servidor
const servidor = http.createServer( (req, res) => {
    /*
            ---- Proceso que se ejecutara al refrescar la pagina ----
    */
    res.end('Hola mundo'); // Pasamos uno o mas datos al cliente
} );

// Especificamos el puerto del servidor (arg1) e indicamos que se hara cuando el servidor comience a ejecutarce (arg2)
servidor.listen(3000, () => {
    console.log('Server online...');
});