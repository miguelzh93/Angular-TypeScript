

//console.log('Hola Mundo!s');

import { setSourceMapRange } from "typescript"

/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;    
}

interface Direccion {
    calle: string;
    pais: string;
    
}

const supeHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 24,
    direccion: {
        calle: 'Falsa 123',
        pais: 'COL'
    },
    mostrarDireccion() {
        return 'La calle es ' + this.direccion.calle;
    }
}

console.log(supeHeroe.mostrarDireccion());