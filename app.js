const http = require('http');


http.createServer((request, response) => {
        //Se pueden hacer las peticiones de esta forma, crear los request, pero se hace
        //muy complicado cuando quiero tener varias al mismo tiempo

        // response.writeHead('200', { 'Content-type': 'application/json' });
        // let salida = {
        //     nombre: 'Ricardo',
        //     apellido: 'Ochoa',
        //     edad: 25,
        //     url: '/'
        // }
        // response.write(JSON.stringify(salida));
        // // response.write('Hola mundo');
        // response.end();

        //Utilizando la libreria express, podemos optimizar el código para los request

    })
    .listen(8080);

console.log('Escuchando por el puerto 8080');