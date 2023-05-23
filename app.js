const cumplida = false;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        (cumplida)
        ? resolve('Se cumplio')
        : reject('No se cumplio')
    }, 3000);
});


miPromesa
    .then((valor) => {
        console.log(valor)
    })
    .catch((valor) => {
        console.log(valor)
    });