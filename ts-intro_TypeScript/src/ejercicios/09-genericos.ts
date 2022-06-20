function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('f');
let soyNumero = queTipoSoy( 1000 );
let soyArreglo = queTipoSoy([1,2.2,3]);

let soyExplicito = queTipoSoy<number>(100);