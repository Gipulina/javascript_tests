let misMascotas= [];
// creo 3 objetos
let gato = {
    nombre: 'Michi',
    edad: 11,
    raza: 'Mestizo',
    sonido: 'Miau',
    emitirSonido: function (){
        return this.sonido+ " "+ this.sonido;
    }
}

let perro = {
    nombre: 'Pebels',
    edad: 7,
    raza: 'Labrador',
    sonido: 'Guauu',
    emitirSonido: function (){
        return this.sonido+ " "+ this.sonido;
    }
}

let canario = {
    nombre: 'Tuito',
    edad: 1,
    raza: 'Canario',
    sonido: 'Tui-tuit',
    emitirSonido: function (){
        return this.sonido+ " "+ this.sonido;
    }
}

// Ingreso los objetos al arreglo con Push.
misMascotas.push(gato,perro,canario);

// console.log(misMascotas)
// let array = misMascotas;

function deletRaza(misMascotas){
    for(let i=0; i<misMascotas.length; i++){
        
        delete misMascotas[i].raza;
    }
    return misMascotas;
}

deletRaza(misMascotas);
console.log(misMascotas);
    