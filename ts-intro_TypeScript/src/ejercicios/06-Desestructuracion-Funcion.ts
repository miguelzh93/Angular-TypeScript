

//console.log('Hola Mundo!s');

import { setSourceMapRange } from "typescript"

/*
    ===== Código de TypeScript =====
*/
 export interface Producto {
    desc: string;
    precio: number;
 }

const telefono: Producto =  {
    desc: 'Iphone',
    precio: 4500000
}

const tableta: Producto =  {
    desc: 'Ipad',
    precio: 7000000
} 

export function calcularImpuesto(productos: Producto[]): number[] {
    let total: number = 0;
    productos.forEach(({ precio}) => {
        total += precio;
    });
    
    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calcularImpuesto(articulos);
/**console.log('Total:', total);
console.log('ISV:', isv);
*/