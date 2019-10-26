* test driving development

focusing on tests first...

libreria jest, para hacer tests... 

#pasos para hacer un proyecto con testing de jest...

* make new directory for your project
* npm init to initialize the package.json
* npm install --save-dev jest (this will actually download...)
* make sure to modify .gitignore in the root of your directory, so we ignore the npm modules... we don't want to upload all modules to our repository...
* in the package.json, make sure to modify : test: "jest", so npm knows that you want to use jest.
* also in the package.json we can put "test-coverage": "jest --coverage" to display a percentaje of advancement-- to run this, type "npm run test-coverage"


ECMAScript 6

Ahora vamos a escribir strings... concatenar:: `hello, ${variable} how are you`


#Questions
* debo tener los modulos de node en todos y cada uno de los proyectos que armo?

#local storage
JSON.stringfy(), if we want to save an object, for example, into the local storage...
JSON.parse() does the opposite

localStorage.setItem("name","Ivan")

This allows us to save stuff to the local storage. 

Local storage is exclusive to each domain and port.









