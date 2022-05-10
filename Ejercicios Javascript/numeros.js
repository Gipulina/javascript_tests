const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// 1 - Obtener en un nuevo array las edades menores a 18

let edadMenores = [];
let edadMayores = [];

/************ resolvemos usando J en el for como contador.  */
// function traerMenores(){
//     let j = 0;
//     for(let i=0; i<edades.length; i++){
//         if (edades[i]<18){
//             edadMenores[j] = edades[i];
//             j++;
//         }
//     }
//     return edadMenores;
// }

// traerMenores();

// console.log(edadMenores)

/************ otra forma de resolverlo con .Push  */
// function traerMenores(edades){

//     for(let i=0; i<edades.length; i++){
//         if (edades[i]<18){
//             edadMenores.push(edades[i])
//         }
//     }
//     return edadMenores;
// }

// traerMenores(edades);

// console.log(edadMenores);

// b. Obtener en un nuevo array las edades mayor o igual a 18.
console.log(edadMayores);


function traerMayores(edades){

    for(let i=0; i<edades.length; i++){
        if (edades[i]>=18){
            edadMayores.push(edades[i])
        }
    }
    return edadMayores;
}

traerMayores(edades);

console.log(edadMayores);
