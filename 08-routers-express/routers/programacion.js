const express = require('express');
const { programacion } = require('../data/cursos').infoCursos;

const routerProgramacion = express.Router();


routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion)); 
 });

routerProgramacion.get('/:lenguaje', (req, res) => {
   const lenguaje = req.params.lenguaje;
   const resultado = programacion.filter(curso => curso.lenguaje === lenguaje);
   // Parametros QUERY
   const ordenar = req.query.ordenar;
   if(ordenar === 'des' && resultado.length > 0) return res.status(200).send( resultado.sort((a,b) => a.vistas - b.vistas ) );
   else if(resultado.length > 0) return res.status(200).send(resultado);
   else return res.status(404).send(`No se encontraron resultados de: ${lenguaje}`);
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
   const lenguaje = req.params.lenguaje;
   const nivel = req.params.nivel;
   const resultado = programacion.filter(cursos => ((cursos.lenguaje === lenguaje) && (cursos.nivel === nivel)));
   if( resultado.length > 0 ) return res.status(200).send( JSON.stringify(resultado) );
   return res.status(404).send('No se encontraron resultados 😢');
});

module.exports = routerProgramacion;