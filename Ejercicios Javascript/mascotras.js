// Creo un Array

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
let array = misMascotas;

// Ingreso los objetos al arreglo con Push.
misMascotas.push(gato,perro,canario);
//imprimo
// console.log(misMascotas);

// Funcion Aumentar edad de los animales
function aumentarEdad(array){
    for(let i=0; i<misMascotas.length; i++){

    //Aumento +1 el valor de la propiedad edad. De esta forma ya se reemplaza la edad en los objeto..    
    misMascotas[i].edad += 1;

    }
}
// aumentar edad con IFs
function aumentarEdadDos(array){

    for(let i=0; i<array.length; i++){
        if (array[i].edad>10){

            array[i].edad += array[i].edad/2;

        }else if(array[i].edad< 10 && array[i].edad>6){
            array[i].edad += 2;
        }else{
            array[i].edad += 1;
        }
    }
}
aumentarEdadDos(array);
// Agregamos funcion para agregar un ID.
function agregarId(array){
    for(let i=0; i<array.length; i++){
        array[i].identificador = i + 1;
    }
    return array;
}
agregarId(array);
 
