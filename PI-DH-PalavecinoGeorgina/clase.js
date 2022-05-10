// Crea 1 array llamado clase.  
let clase = [];
// Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros.
let  luis = {
    nombres: 'Luis',
   apellidos:'Scottie',
    bimestre:3
}
let  carlos = {
    nombres:'Carlos',
   apellidos:'Rivera',
    bimestre:1
}
let  ricky = {
    nombres:'Ricky',
   apellidos:'Martin',
    bimestre:5 
}

// Agrega estos 3 objetos al array llamado clase.
clase.push(luis,carlos,ricky);
// Imprimir el array para ver que contenga esos objetos.
console.log("Información Bimestre Actual: ");
console.log(clase);
// Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
function siguienteCursada(clase){
    
    for(i=0; i<clase.length; i++){ 
        
        clase[i].bimestre += 1;
        // console.log(clase[i].bimestre);
        
    }
    
    return clase
}

// Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada

console.log("Información Próximo Bimestre: ");
siguienteCursada(clase);
console.log(clase);