var bio = "Mi nombre es Eugenio y soy diseñador web";
var num = 123456;

//MATCH DEVUELVE UNA ARRAY CON EL RESULTADO
var result = bio.match(/Eugenio/);
console.log(result);

//EXEC DEVUELVE UN ARRAY CON EL RESULTADO
var result2 = /Eugenio/.exec(bio);
console.log(result2);

//TEST DEVUELVE TRUE O FALSE
var result3 = /Eugenio/.test(bio);
console.log(result3);

//REPLACE
console.log(result4);
var result4 = bio.replace(/Eugenio/, '[redacted]');

//COMO VEMOS, NO ES LO MISMO PASARLE UN STRING A UNA VARIABLE TIPO NUM QUE PASARLE NUMEROS DIRECTAMENTE, DA FALSE Y TRUE, TAMBIÉN EL PUNTO EN MEDIO SIGNIFICA QUE ENTRE EL 3 Y EL 5
//HABRÁ OTRO CARACTER MAS - DOT OPERATOR
var result5 = /"3.5"/.test(num);
var result6 = /3.5/.test(num);
console.log(result5);
console.log(result6);

//PARA BUSCAR CARACTERES ESPECIALES, TENEMOS QUE USAR EL \ PARA PODER ESCAPARLOS
var bio2 = "Mi nombre es Eugenio?";
var result7 = /Eugenio\?/.test(bio2);
console.log(result7);



    



