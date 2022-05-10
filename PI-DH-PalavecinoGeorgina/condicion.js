const prompt = require("prompt-sync")({ sigint: true });

// 1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán:


// función para retornar true/false ya que al enviar dicha indicación el usuario envía un string y no un valor true/false
function buleano(condicionPG){
    if(condicionPG == 'true'){
        return true
    }else{
        return false
    }
}

// Número mínimo de asistencias permitidas para la aprobación.
const asistenciaMinima= 23;

let progreso = buleano(prompt('Indicar "true" si el alumno aprobó Plaground, de lo contrario indicar "false" '));
let asistencias = prompt('Cuantos días asistió el alumno? :');

// La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround del alumno.

// Aprobado = asistencias >= 23 y Progreso true Un alumno. Caso contrario el alumno desaprueba. Deberá retornar un string aprobado o desaprobado según corresponda.

function PlayGround(progreso,asistencias){
if(asistencias >= asistenciaMinima && progreso == true){
        return 'El alumno esta aprobado';    
    }else{
       return 'El alumno esta desaprobado';
    }
}
// llamo a la función y la guardo como string en condición.
let condicion = PlayGround(progreso,asistencias);

console.log(condicion);
