### PROPIEDADES DE FLEX
> Si queremos usar flex, siempre hay que indicarle al div o tag *display:flex*

> ***PROPERTY JUSTIFY-CONTENT: NOS SIRVE PARA ALINEAR EL CONTENIDO HORIZONTALMENTE***

**justify-content: flex-start** : nos alinea el div a la izquierda

**justify-content: center** : nos alinea el div al centro

**justify-content: flex-end** : nos alinea el div a la derecha

**justify-content: space-between** : ese grupo de divs nos los alinea desde el flex-start al flex-end repartiendo la misma distancia entre ellos.

**justify-content: space-around** : ese grupo de divs nos los alinea desde el flex-start al flex-end repartiendo la misma distancia entre ellos también dejando distancia entre el flex-start y el flex-end.

>***PROPERTY ALIGN-ITEMS: NOS SIRVE PARA ALINEAR EL CONTENIDO VERTICALMENTE***

**align-items: flex-start** : nos alinea el div al inicio verticlamente hablando, arriba.

**align-items: center** : nos alinea el div al centro

**align-items: flex-end** : nos alinea el div al final verticalmente hablando, abajo.

>***PROPERTY FLEX-DIRECTION: NOS SIRVE PARA INDICAR LA DIRECCIÓN DEL CONTENIDO***

**flex-direction: column** : nos coloca los elementos verticalmente.

**flex-direction: column-reverse** : nos coloca los elementos verticalmente a la inversa.

**flex direction: row** : nos coloca los elementos horizontalmente.

**flex direction: row-reverse** : nos coloca los elementos horizontalmente a la inversa.

>***PROPERTY ORDER: NOS SIRVE PARA INDICAR LA POSICIÓN EN LA QUE QUEREMOS COLOCAR LOS ELEMENTOS***

**order: 0, 1, 2, -1, -2,...** : tenemos que indicar la posición en la que queremos colocar el elemento, usando números positivos o negativos según para que dirección queremos moverlos, cuando hay muchos elementos en el mismo div, no basta con darle la posición a uno, hay que indicársela a todos.

>***PROPERTY ALIGN-SELF: DE MOMENTO LE VEO LA MISMA UTILIDAD AL ALIGN-ITEMS***