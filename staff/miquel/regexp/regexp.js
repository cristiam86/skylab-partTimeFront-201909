//regexr.com

// encuentra siempre "A" o "a"
var exp = /A|a/;

// encuentra A y ignore case
var exp = /A/i;

// encuentra A, todas las ocurrencias y ignore case
var exp = /A/gi;

var mysTestString = "sdsdsdfafderg";

// true o false
exp.match(mysTestString);

// array amb ocurrencies 
mysTestString.match(exp);

// devuelve indice, longitud
exp.exec(mysTestString);

// reemplaza todas las ocurrencies de "sd" por "uu" 
mysTestString.replace(/sd/g, "uu");

// reemplaza todas las ocurrencies de 
// "sd" 
// y que luego tenga un "a"
// por "uu" 
mysTestString.replace(/sd+f/g, "uu");

// reemplaza todas las ocurrencies de 
// las veces que sea "sd" 
// y que luego tenga un a
// por "uu" 
mysTestString.replace(/(sd)+f/g, "uu");

// 
var email = 'miquelcs@gmail.com';
email.match(/([a-z0-9-_\.])+@([a-z0-9])+\.+/gi);