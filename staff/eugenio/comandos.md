### SI USAMOS LA CONSOLA DE VSCODE
Para iniciar git hay que ir a TERMINAL y ejectura ***git init***

### COMANDOS BÁSICOS DE CONSOLA
- ***mkdir nombre_carpeta*** : crea una carpeta
- ***touch fichero.extension*** : crea un fichero
- ***cd nombre_carpeta*** : entramos en la carpeta indicada
- ***cd ..*** : vamos a la carpeta padre 
- ***rm nombre_fichero*** : elimina el fichero
- ***rm -rf nombre_carpeta*** : elimina la carpeta a saco y no va a la papelera
- ***pwd*** : nos devuelve la ruta de la carpeta donde estemos
- ***ls*** : nos da una lista de archivos y carpetas de donde estemos

### SI QUEREMOS VINCULAR UN REPOSITORIO LOCAL DE GIT CON VSCODE
***git remote add origin url*** : vinculamos nuestro repositorio local, nuestro workspace con git

### SI QUEREMOS IMPORTAR UN REPOSITORIO DE GIT A NUESTRO VSCODE
***git clone url*** : clonamos en nuestro workspace la url que le pasemos

### PARA SABER EL ESTADO DEL CONTENIDO MODIFICADO O SIN MODIFICAR
***git status*** : si sale en rojo es que esta por subir, si sale en verde es que está en stage para ser subido

### PARA SUBIR EL CONTENIDO DEL STAGE
***git add --all o git add .*** : una vez esté en verde el contenido, nos sube el repositorio o ficheros modificados

### PARA AÑADIR UN COMENTARIO DE LA SUBIDA
***git commit -m "Comentario"*** : lo que pongamos entre comillas, será una referencia de ayuda, hay que ser conciso y exacto

### PARA SUBIR DEFINITIVAMENTE EL CONTENIDO NUEVO O MODIFICADO CON EL COMENTARIO AÑADIDO
***git push -u origin master*** : este es el último paso para subir el contenido

### SI NOS DA ERROR POR SI ALGUIEN ESTÁ SUBIENDO ALGO AL MISMO TIEMPO
***git pull*** : os actualiza el repositorio por si alguien está subiendo algo al mismo tiempo, ejecutamos pull y luego push nuevamente

### PASOS PARA SUBIR FICHEROS NUEVOS O MODIFICADOS

> Cuando ejecutemos el push da error a veces si tenemos el vscode abierto o el fichero que se va a subir, cerramos y listos.

1. Vamos a la carpeta donde está el fichero
2. ***git status*** : para verificar que está en rojo y nos ha cogido los cambios
3. ***git all .*** : para subir los cambios a stage
4. ***git status*** : nuevamente para ver que nos ha subido todo bien a stage, aparece en verde
5. ***git commit -m "comentario"*** : añadimos comentario de los cambios
6. ***git push -u origin master*** : subimos definitivamente el contenido nuevo
7. ***git pull*** : depende si nos ha dado error en el push por si hay alguien trabajando en el repositorio