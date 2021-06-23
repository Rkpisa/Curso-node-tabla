const fs = require('fs');// importar File System
const colors = require('colors');

const crearArchivo = async(base = 5, l=false, hasta=10) => {

    try {    
        const nombreArchivo = `tabla-${base}.txt`;
        let salida, consola = ''; // Almacenar los datos de la impresión

        if (l){
            console.log('============='.red);
            console.log('Tabla del:'.red, colors.green(base));
            console.log('============='.red);
            
            // Imprimir los 10 primeros numeros de la tabla del 5 
            for(i=1;i<=hasta;i++){
                //console.log('5  x ',i,' = ',5*i);
                salida += `${base} x ${i} = ${base*i}\n`;
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
            }
            console.log(consola); // Para verificar que se ve la salida correctamente
        }
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
        //console.log(`${nombreArchivo} creado`);
        //resolve(nombreArchivo);
     
        return nombreArchivo;     
    } catch (err) {
        throw err;
    }
       
};

module.exports = {
    crearArchivo
};