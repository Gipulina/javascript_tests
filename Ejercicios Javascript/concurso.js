// Te contactan desde un teatro donde hace falta determinar el ganador de un concurso de
// stand up que consta de tres presentaciones por participante. Te piden que armes el
// programa que determine al ganador y, a continuación, te explican el funcionamiento del
// concurso para que lo tengas en cuenta a la hora de realizar el programa
// El público, máximo 100 personas, votó quién considera que estuvo mejor al terminar
// cada etapa. Por ejemplo, sube Alicia, se presenta y baja; sube Bob, se presenta y baja.
// Terminadas ambas presentaciones, el público vota indicando quién cree que ganó esa
// tanda. Luego, continúa la siguiente tanda, igual que la primera. Y finalmente, una tercera.
let alicia = [10,80, 75];
let bob = [90,20,25];

function compararPuntajes(alicia,bob){
 
    let puntosAli= 0;
    let puntosBob= 0;
    for (let i=0; i<3; i++){
          puntosAli = puntosAli +alicia[i];
          puntosBob = puntosBob +bob[i];
    }
    console.log(puntosAli,puntosBob);

    if(puntosAli > puntosBob){
        return"La ganadora es Alicia con " + puntosAli ;
    }else if (puntosAli < puntosBob){
        return "La ganadora es Bob con "+ puntosBob;
    }else{
        return "Es un empate";
    }
        console.log(puntosAli,puntosBob)
}

let ganador = compararPuntajes(alicia,bob);
console.log(ganador);
