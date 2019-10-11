function isString(variable) {
    var res = false;
    var tipo = typeof variable;
    console.log(tipo);
    tipo === 'string' ? res = true : res = false;
    return res;
}


function isBlank(variable) {
    var res = false;
    var longitud = 0;
    var tipo = typeof variable;
    console.log(tipo);
    tipo === 'string' ? res = true : res = false;
    if (res) {
        longitud = variable.length;
        longitud === 0 ? res = false : res = true;
    }
    return res;
}


function stringToArray(variable) {
    var res;
    var array = [];

    tipo === 'string' ? res = true : res = false;
    if (res) {
        longitud = variable.length;
        longitud === 0 ? res = false : res = true;
    }

    return res;
}