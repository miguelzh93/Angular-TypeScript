class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){
        console.log('Inicialice PeronaNormal');
    }

}

class Heroe extends PersonaNormal { 
    
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) { 
        super(nombreReal, 'En la Usa');
        //this.alterEgo = 'Cap';
        console.log('Inicialice Heroe', alterEgo);
    }
    imprimirNombre() {return 'Funcion imp ' + this.alterEgo}    

  
}

const ironMan = new Heroe('IronMan', 45, 'Stark');
console.log(ironMan);

