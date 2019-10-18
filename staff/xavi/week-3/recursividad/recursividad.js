
// 1. EJEPLO RECURSIVIDAD.
// Si n = 4, la función sumará 1 + 2 + 3 + 4.


function sum(num){

    if (num === 0) {
        return 0;
    } else {
        // si el número es positivo:
        // se suma el núemro + la función con sucesión del mismo numero -1 cada vez que se llama
        return num + sum(--num)
    }
}
// llamada a la función  
sum(4); // 10


// 2. EJEMPLO RECURSIVIDAD:
// Si n = -4, la función suma número negativos: -3, -2 -1 = -10


function negativo(num){

    if(num === 0){
        return 0;
    } else{
        return num + negativo(++num)
    }
}

negativo(-4)// -10