const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log( process.argv );
// console.log( argv );

//const base = 4;

// const [,,arg3='base=5' ] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log( base );

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo=> console.log( nombreArchivo.rainbow , 'creado'.trap ))
    .catch( err => console.log(colors.red(err)));


