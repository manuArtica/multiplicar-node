/**
 * requireds
 */

const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no es un número`.red);
            return;
        }

        let result = '';
        for (let key = 0; key <= limite; key++) {
            result += (`${ base } X ${ key } = ${ base*key }\n`);
        }

        fs.writeFile(`./tablas/TABLA-DEL-${ base }.txt`, result, (err) => {
            if (err) reject(err);
            else
                resolve(`TABLA-DEL-${ base }.txt`);
        });
    })

}

let listarTabla = (base, limite = 10) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base  } no es un número`.red);
            return;

        } else if (!Number(limite)) {
            reject(`${ limite } no es un número`.red);
            return;

        } else {
            console.log(`#############`.green);
            console.log(`Tabla del ${ base }`.green);
            console.log(`#############`.green);
            let result = '';
            for (let key = 0; key <= limite; key++) {
                result += `${ base } X ${ key } = ${ base*key }\n`;
            }
            resolve(result);
        }


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}