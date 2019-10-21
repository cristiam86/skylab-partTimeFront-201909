var reg = /A/gi; //i ignorer case ignorar may y minuscula
                 //g group todas las ocurrencias

var myTestString = "fhfhfhfhfhfa";
myTestString.match(reg);
myTestString.replace(/fh/,"uu");
myTestString.replace(/fh/,"uu");

/*
(.) -> cualquier Character
(.)+ -> + uno o mas veces
f(h)*a -> 0 o mas h
f(h){3,4}fa -> {} entre 3 y 4 h;
escapar un caracter \ y el caracter
email:
([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z0-9])+/gi
*/
