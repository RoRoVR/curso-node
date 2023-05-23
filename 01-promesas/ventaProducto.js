const productos = ['zapatilla', 'cuaderno', 'lapiz', 'taza'];


function solicutarProducto(producto, cantidad) {
    return new Promise(( resolve, reject ) => {
        console.log('Verificando Producto');
        const search = productos.find( p => p === producto );
        setTimeout(() => {
            if( search ){
                console.log(`Ordenando ${producto}...`)
                resolve(cantidad);
            } 
            else reject('No se encontro el producto');
        }, 3000); 
    });
}

function facturarPedido(cantidad){
    return new Promise(( resolve, reject ) => {
        console.log('Creando factura de pedido...');
        const factura = cantidad*2.5;
        setTimeout(() => {
            if(cantidad < 10) resolve(`Total: ${factura}\nSu pedido fue enviado :D`);
            else reject('No contamos con la cantidad solicitada');
        }, 5000);
    });
}

// --------------- Sin usar ASYNC AWAIT ------------------ 
// solicutarProducto('lapiz', 1)
//     .then((v) => {
//         return facturarPedido(v)
//     })
//     .then((v)=>{
//         console.log(v);
//     })
//     .catch((v) => {
//         console.log(v);
//     });

async function hacerPedido(){
    try{
        const res = await solicutarProducto('lapiz3', 1);
        const fin = await facturarPedido(res);
        console.log(fin);
    }catch(error){
        console.log(error)
    }
}
hacerPedido();