 
// 1) DADO EL SIGUIENTE ARREGLO
// let numeros = [5,9,12,25,6,7,18,1,24,4];
// let resultado = 0;

// // DETERMINAR LA SUMA TOTAL DE ELLOS, SOLAMENTE SUMANDO LOS NUMEROS IMPARES
// // Y GUARDARLO EN UNA VARIABLE QUE SE LLAME RESULTADO. PISTA:
// // (RECORDA QUE PODEMOS GUARDAD LA EJECUCION DE UNA FUNCION
// // Y LO QUE RETORNE SERA ASIGNADO A LA VARIABLE)

// function sumaImpares(){
//     let suma= 0;
//     for(let i=0;i<numeros.length ; i++ )
//     if (numeros[i] %2 == 1){

//     resultado = resultado + numeros[i]
//     }
//     return resultado
// }

// resultado= sumaImpares(numeros);
// console.log(resultado);

// 2)DADO EL SIGUIENTE ARREGLO...

const arrayNumeros = [ 7,16,32,27,45,27,51,12,19,21]
let arrayNuevo =[]
// CREAR UNO NUEVO EL CUAL CONTENDRA LOS NUMEROS DE ESTE ARREGLO
// PERO SOLO LOS NUMEROS QUE SEAN MAYORES QUE 15 Y MENORES O IGUALES QUE 30

function nuevoArreglo(arrayNumeros){
    for(let i=0; i<arrayNumeros.length; i++){
        if(arrayNumeros[i]>15 &&  arrayNumeros[i]>=30){

            arrayNuevo.push(arrayNumeros[i]) ;
        }
    }
    return arrayNuevo;
}
arrayNuevo = nuevoArreglo(arrayNumeros);
console.log(arrayNuevo);

/* */ 