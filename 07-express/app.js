const express = require('express');
const app = express();

const { infoCursos } = require('./cursos');

// ------ ROUTING ------
// GET
app.get('/', (req, res) => {
   res.send('Mi primer servidor. Cursos :D.'); 
});
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos)); 
 });
 app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion)); 
 });
 app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    // Parametros QUERY
    const ordenar = req.query.ordenar;

    if(ordenar === 'des' && resultado.length > 0) return res.status(200).send( resultado.sort((a,b) => a.vistas - b.vistas ) );
    else if(resultado.length > 0) return res.status(200).send(resultado);
    else return res.status(404).send(`No se encontraron resultados de: ${lenguaje}`);
 });
 app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultado = infoCursos.programacion.filter(cursos => ((cursos.lenguaje === lenguaje) && (cursos.nivel === nivel)));

    if( resultado.length > 0 ) return res.status(200).send( JSON.stringify(resultado) );
    return res.status(404).send('No se encontraron resultados 😢');
 });


const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
    console.log(`Server online - PORT: http://localhost:${PUERTO}/`);
});