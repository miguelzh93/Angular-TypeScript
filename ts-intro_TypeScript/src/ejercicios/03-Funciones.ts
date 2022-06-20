

//console.log('Hola Mundo!s');

import { setSourceMapRange } from "typescript"

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => a + b; 

function multiplicar(numero: number, otronumero?:number, base:number = 2){
    return numero * base;
}

const resultado =  sumar(30, 1);
const resultadoMultiplicar =  multiplicar(3);

//console.log(resultado);
//console.log(sumarFlecha(1,2));
//console.log(resultadoMultiplicar);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'mzanguna',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 50);