const url = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(url.hostname);                       // www.ejemplo.org
console.log(url.pathname);                       // /cursos/programacion
console.log(url.searchParams);                   // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(url.searchParams.get('ordenar'));    // vistas