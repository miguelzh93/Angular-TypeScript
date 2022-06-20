//console.log('Hola Mundo!s');

import { calcularImpuesto, Producto } from "./06-Desestructuracion-Funcion";
const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 200
    },
    {
        desc: 'Telefono 2',
        precio: 400
    }
];

const [total, isv] = calcularImpuesto(carritoCompras);
console.log('Total:', total);
console.log('ISV:', isv);