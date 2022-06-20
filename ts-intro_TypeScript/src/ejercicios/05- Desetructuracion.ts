

//console.log('Hola Mundo!s');

import { setSourceMapRange } from "typescript"

/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Shakira',
        anio: 2015
    }
}

const {volumen: vol, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;


console.log('El volumen actual es de:', vol);
console.log('El segundo actual es de:', segundo);
console.log('La cancion actual es de:', cancion);
console.log('El autor actual es: ' + autor);

console.log('Desestructuracion de Arreglos--------------------------------');

const dbz: string[] =  ['Goku', 'Vegeta', 'Trunks'];
const [, p2, p3] = dbz;
console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);