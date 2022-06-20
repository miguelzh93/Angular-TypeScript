

//console.log('Hola Mundo!s');

/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['bash', 'counter'];
habilidades.push('bash2');
//habilidades.push(44);
console.log(habilidades);

interface Personaje { 
    nombre: string;
    hp: number;
    habilidades: string [];
    puebloNatal?: string;   //Parametro opcional
}

const personaje: Personaje = {
     nombre: 'Mzanguna',
     hp: 1000,
     habilidades: ['Bash', 'Counter']
 }

 personaje.nombre = 'ñañaña';

 personaje.puebloNatal = 'Paipa';

 console.table(personaje);