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

function jugarPpt(mano1, mano2){
    if( mano1 === 'piedra' && mano2 === 'papel'){
        return mano2;
    } else if ( mano1 === 'piedra' && mano2 === 'tijera'){
        return mano1;
    } else if ( mano1 === 'papel' && mano2 === 'tijera'){
        return mano2;
    } else if (mano1 === 'papel' && mano2 === 'piedra'){
        return papel;
    } else if (mano1 === 'tijera' && mano2 === 'papel'){
        return mano1;
    } else if (mano1 === 'tijera' && mano2 === 'piedra'){
        return mano2;
    }
}



const gameLogic = {
    verificarOpcion,
    verificarTipo,
    jugarPpt
  };
module.exports = gameLogic;