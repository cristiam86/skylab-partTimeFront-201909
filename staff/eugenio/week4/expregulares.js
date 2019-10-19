var reg = /fhf/gi; // g nos encuentra todas las ocurrencias, y i que no nos diferencia por mayus o minus.
var myTestString = "fhfhfhfha1";
//TEST nos devuelve true o false si encuentra el patrón pasado en reg
//console.log(reg.test(myTestString));
//console.log(reg.exec(myTestString));
console.log(myTestString.replace(/fh/gi, "uu"));
console.log(myTestString.replace(/fh+a/gi, "uu"));
