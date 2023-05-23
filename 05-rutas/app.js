const http = require('http');
const cursos = require('./cursos');
const { url } = require('inspector');

const servidor = http.createServer((req, res) => {
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        case 'DELETE':
            return manejarSolicitudDELETE(req, res);
        case 'PUT':
            return manejarSolicitudPUT(req, res);
        default:
            console.log('El metodo no puede ser manejado por el servidor');

    }

});

function manejarSolicitudGET(req, res){
    let path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creadis con Node.js');
    }else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    return res.end('Not Found 404');

}

function manejarSolicitudPOST(req, res){
    const path = req.url;

    if( path === '/cursos/programacion' ){

        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo );

            console.log(cuerpo);

            res.end('El servidor recivio una solicitud POST para /cursos/programacion');
        });
        
    }
}

function manejarSolicitudDELETE(req, res){

    const path = req.url;

    if( path === '/cursos/programacion' ){
        res.statusCode = 200;
        return res.end( 'Se pidio eliminar cursos de programacion' );
    }

}

function manejarSolicitudPUT(req, res){

    const path = req.url;

    if( path === '/cursos/programacion' ){
        res.statusCode = 200;
        console.log(req);
        return res.end( 'Se pidio editar cursos de programacion' );
    }

}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});