const prompt = require("prompt-sync")({ sigint: true });

// 1) Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:

let estudiante = {
    nombre:'Georgina',
    apellido:'Palavecino',
    camada:5,
    esParcial: true
}

// 2.  Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
// 	 NOTA < 4 :           desaprobado
//  4 <= NOTA < 7 :  debe rendir examen final 
// 	 NOTA >= 7 :         promocionado.  
// La función deberá retornar la condición final del alumno (solo retorna la palabra). 
// Al momento de llamar a la función, deberás mostrar la siguiente frase: 
// “El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 

function situacionEstudiante(nota){
    if(nota < 4){
        return 'Desaprobado'
    } else if (4 <= nota && nota < 7) {
        return 'Debe rendir examen final'
    }else{
        return "Promocionado"
    }
        nota;
}   


let nota = prompt('Ingrese una posible nota del alumno:');
condicion = situacionEstudiante(nota);
console.log('El alumno obtuvo una nota igual a '+nota+ ' por lo tanto su condición es: '  + condicion)