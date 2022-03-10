const fs = require('fs');
const colors = require('colors');

const multiplicaNumeros = (num1, num2) => {
    return `${num1} x ${num2} = ${num1 * num2}\n`;
}

// const crearArchivo = (base = 5) => {
//     console.log('========================================');
//     console.log('Tabla del:', base)
//     console.log('========================================');

//     let salida = '';
//     const tablaCinco = () => {
//         for (let i = 1; i <= 10; i++) {
//             salida += multiplicaNumeros(base, i);
//         }
//     }

//     tablaCinco();
//     console.log(salida);

//     // fs.writeFile(`tabla-${base}.txt`, salida, ( err )=>{
//     //     if( err ) throw err;
//     //     console.log(`tabla-${base}.txt`);
//     // });

//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     console.log(`tabla-${base}.txt`);
// }

// const crearArchivo = (base = 5) => {
//     console.log('========================================');
//     console.log('Tabla del:', base)
//     console.log('========================================');
//     return new Promise((resolve, reject) => {
//         try {
//             let salida = '';
//             const tablaCinco = () => {
//                 for (let i = 1; i <= 10; i++) {
//                     salida += multiplicaNumeros(base, i);
//                 }
//             }
//             tablaCinco();
//             console.log(salida);
//             fs.writeFileSync(`tabla-${base}.txt`, salida);
//             resolve(`tabla-${base}.txt`);
//         } catch (err) {
//             reject(err);
//         }
//     });
// }

const crearArchivo = async (base = 5, listar=false, hasta=10) => {
    try {
        let salida = '';
        const tablaCinco = () => {
            for (let i = 1; i <= hasta; i++) {
                salida += multiplicaNumeros(base, i);
            }
        }
        tablaCinco();
        if(listar){
            console.log('========================================'.zebra);
            console.log('Tabla del:'.random, colors.bgBrightMagenta(base))
            console.log('========================================'.america);
            console.log(salida.bgYellow);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
};