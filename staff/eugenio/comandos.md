### SI USAMOS LA CONSOLA DE VSCODE
Para iniciar git hay que ir a TERMINAL y ejectura *git init*

### SI QUEREMOS VINCULAR UN REPOSITORIO LOCAL DE GIT CON VSCODE
*git remote add origin url* vinculamos nuestro repositorio local, nuestro workspace con git

### SI QUEREMOS IMPORTAR UN REPOSITORIO DE GIT A NUESTRO VSCODE
*git clone url* clonamos en nuestro workspace la url que le pasemos

### PARA SABER EL ESTADO DEL CONTENIDO MODIFICADO O SIN MODIFICAR
*git status* si sale en rojo es que esta por subir, si sale en verde es que está en stage para ser subido

### PARA SUBIR EL CONTENIDO DEL STAGE
*git add --all o git add .* una vez esté en verde el contenido, nos sube el repositorio o ficheros modificados

### PARA AÑADIR UN COMENTARIO DE LA SUBIDA
*git commit -m "Comentario"* lo que pongamos entre comillas, será una referencia de ayuda, hay que ser conciso y exacto

### PARA SUBIR DEFINITIVAMENTE EL CONTENIDO NUEVO O MODIFICADO CON EL COMENTARIO AÑADIDO
*git push -u origin master* este es el último paso para subir el contenido

### SI NOS DA ERROR POR SI ALGUIEN ESTÁ SUBIENDO ALGO AL MISMO TIEMPO
*git pull* nos actualiza el repositorio por si alguien está subiendo algo al mismo tiempo, ejecutamos pull y luego push nuevamente
