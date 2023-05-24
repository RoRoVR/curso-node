const express = require('express');
const { matematicas } = require('../data/cursos').infoCursos;

const routerMatematicas = express.Router();


routerMatematicas.get('/', (req, res) => {
    res.send(matematicas); 
 });

routerMatematicas.get('/:tema', (req, res) => {
   const tema = req.params.tema;
   const resultado = matematicas.filter(curso => curso.tema === tema);

   // Parametros QUERY  --> ?ordenar=des
   const ordenar = req.query.ordenar;
   if(ordenar === 'des' && resultado.length > 0) return res.status(200).send( resultado.sort((a,b) => a.vistas - b.vistas ) );
   else if(resultado.length > 0) return res.status(200).send( resultado );
   else return res.status(404).send(`No se encontraron resultados de: ${tema}`);
});

routerMatematicas.get('/:tema/:nivel', (req, res) => {
   const tema = req.params.tema;
   const nivel = req.params.nivel;
   const resultado = matematicas.filter(cursos => ((cursos.tema === tema) && (cursos.nivel === nivel)));
   if( resultado.length > 0 ) return res.status(200).send( resultado );
   return res.status(404).send('No se encontraron resultados 😢');
});

module.exports = routerMatematicas;