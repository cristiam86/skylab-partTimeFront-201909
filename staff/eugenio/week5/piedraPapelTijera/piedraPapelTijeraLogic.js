const opciones = ['piedra', 'papel', 'tijera'];

function verificarOpcion(opcion){
    if (opciones.includes(opcion)) {
        return true
    } else {
        return false
    }
}

function verificarTipo(tipo){
    if (opciones.includes(tipo) && typeof tipo === 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(verificarTipo('hola'));


const gameLogic = {
    verificarOpcion,
    verificarTipo
  };
module.exports = gameLogic;