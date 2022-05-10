const prompt = require("prompt-sync")({ sigint: true }); 
// Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
// deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// siguientes criterios:

// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
// mostrar el string “Digital” en lugar del número.

// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// mostrar el string “House” en su lugar del número.

// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
// “Digital House” en lugar del número.

function digitalHouse(numUn,numDos){
    for (let i=0; i<31; i++){
        if ((i%numDos) == 0 && (i % numUn) == 0) {
        console.log('Digital House')
        }else if ((i % numUn) == 0){
            console.log('Digital');
        }else if((i%numDos) == 0){
            console.log('House');
        }else{
            console.log(i);
        }
    }

}

let numUn= prompt('Ingrese Primer número: ')
let numDos= prompt('Ingrese Segundo número: ')

let digital = digitalHouse(numUn,numDos);