const express = require('express');
const app = express();

const { infoCursos } = require('./data/cursos');

// ------ ROUTERS ------
const routerProgramacion = require('./routers/programacion');
const routerMatematicas = require('./routers/matematicas');

// Usa como pase el PATH agregado
app.use('/api/cursos/programacion', routerProgramacion); 
app.use('/api/cursos/matematicas', routerMatematicas);

// ------ ROUTING ------
// GET
app.get('/', (req, res) => {
   res.send('Mi primer servidor. Cursos :D.'); 
});
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos)); 
});


const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
    console.log(`Server online - PORT: http://localhost:${PUERTO}/`);
});