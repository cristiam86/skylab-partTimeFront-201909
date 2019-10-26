var [elem1, elemento2, ...rest] = [1,2,3,4,5,6];

/*
console.log(elem1);
console.log(elemento2);
console.log(rest);
*/

var arrDefinitivoYNosVamosPaCasa = [elem1, elemento2, ...rest];

console.log(arrDefinitivoYNosVamosPaCasa);

function printArray(e1, e2, ...restoDelArray) {
    console.log("elem1: ",e1);
    console.log("elemento2: ", e2);
    console.log("rest: ", restoDelArray);
}

//printArray(...arrDefinitivoYNosVamosPaCasa);

var arr1 = [1,2,3];
var arr2 = [4,5,6];

var arr3 = [...arr1, ...arr2]
console.log(arr3);
