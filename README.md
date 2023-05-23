# Curso --> https://www.youtube.com/watch?v=1hpc70_OoAg&list=WL&index=124&t=559s&ab_channel=freeCodeCampEspa%C3%B1ol

## Continuar --> time 7:22:32

--------------------------------------------------------------------------------------------------------------------------------------------

# MODULOS BUILT-IN
    Son modulos que ya vienen implementados con node, los cuales podemos usar, 
    por ejemplo: HTTP, HTTPS, FS(File System), OS(Operating System), PATH

## Modulo CONSOLE
    • console.log --> Nos permite escribir en pantalla un texto
    • console.warn --> Nos permite escribir un texto marcado por PRECAUSION
    • console.error --> Nos permite escribir un texto marcado por ERROR
    • console.error(new Error('msg')) --> Nos permite escribir un texto marcado por ERROR, y con indicaciones detallasdas marcando el lugar en el que ocurrio el error

## Modulo PROCESS
    • process --> Muestras los procesos actuales
    • process.env --> Muestras los procesos actuales de el ambiente de ejecucion, asi como datos de la PC que se esta utilizando
    • process.arg --> Muestra un arreglo de los comandos y/o datos que se estan ejecutando
    • process.memoryUsage() --> Muestra la cantidad de memoria que se esta utilizando

## Modulo OS --> require('os')
    • os.type() --> Muestra el nombre de nuestro sistema operativo
    • os.homedir() --> Muestra el directorio actual
    • os.userInfo() --> Muestra informacion sobre el usuario

## Modulo TIMERS
    • setTimeout(funcion, retraso, arg1, arg2, agrn) --> Ejecuta codigo despuesde cierta cantidad de milisegundos
    • setImmediate(funcion, arg1, arg2) --> Ejecuta despues de ejecutar otras lineas de codigo sincronas

        Ej: 
            console.log('Hola')                     |   Hola
            setImmediate(funcnion, 'argumento')     |   Hola2
            console.log('Hola2')                    |   setImmediate()

    • setInterval(funcion, intervalo, arg1, arg2, argn) --> ejecuta un codigo infinitas veces despues de un intervalo

## Modulo FS --> require('fs')
>>> Funciones asincronas --> Para hacer que sean sincronas se aumenta "Sync" al final de la funcion (ej: fs.readFileSync)
    • fs.readFile('ubicacion', 'utf-8', (error, contenido) => {}) --> Lee un archivo
    • fs.rename('ubicacion', 'nuevoNombre', (error) => { console.log('cambiado') }) --> Cambia el nombre de un archivo
    • fs.appedFile('ubicacion','contenido', (error)=>{}) --> Agrega el "contenido" al final del archivo
    • fs.writeFile('ubicacion', 'nuevoContenido', (error)=>{}) --> Reemplaza el contenido del archivo por el "nuevoContenido" 
    • fs.unlink('ubicacion', (error)=>{}) --> Elimina un archivo

----------------------------------------------------------------------------------------------------------------------------------
# NPM

> npm init --> crea un paquete nuevo inicianco el package.json
> npm init --yes --> crea un paquete nuevo inicianco el package.json con todos los valores por defecto

----------------------------------------------------------------------------------------------------------------------------------

