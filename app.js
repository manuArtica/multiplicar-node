/**
 * requireds
 */

const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/crearArchivo');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(listar => console.log(`Tabla pedida: \n${ listar }`.blue))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`.blue))
            .catch(e => console.log(e));
        break;

    default:
        console.log(`Comando no reconocido`.red);
        break;
}

//let base = 5;

/**
 * La variable de entorno process no hay que definirla en ningún lugar,
 * cuando node se ejecuta crea diche variable de entorno.
 * Muestra mucha información, datos relacionados con el SO, etc.
 * Uitlizaremos en esta ocasión el process.argv.
 * En la terminal crearemos un parámetro nuevo llamado base5 con el comando node app --base5
 */

// Desde argumento hacemos referencia a argv[2] porque base5 está en la tercera posicion el el arry argv

//let parametro = argv[2];
//let base = parametro.split('=')[1];