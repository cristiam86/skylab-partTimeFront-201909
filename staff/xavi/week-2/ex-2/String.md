# JavaScript String Exercises

## Goals

- String methods

## Tasks

### isString(input)

Write a JavaScript function to check whether an `input` is a *string or not*.

Escriba una función de JavaScript para verificar si una `entrada` es una * cadena o no *.

    console.log(isString('w3resource'));
    true
    console.log(isString([1, 2, 4, 0]));
    false

### isBlank(input)

Write a JavaScript function to check whether a string *is blank or not*.

Escriba una función de JavaScript para verificar si una cadena * está en blanco o no *.

    console.log(isBlank(''));
    console.log(isBlank('abc'));
    true
    false

### stringToArray(input)

Write a JavaScript *function to split a string and convert it into an array* of words.

    console.log(stringToArray("Robin Singh"));
    ["Robin", "Singh"]

### truncate(input, number)

Write a JavaScript function to remove specified number of characters from a string.

    console.log(truncate_string("Robin Singh",4));
    "Robi"

### abbrevName(input)

Write a JavaScript function *to convert* a string in *abbreviated form*.

    console.log(abbrev_name("Robin Singh"));
    "Robin S."

### protect(input)

Write a JavaScript function to hide email addresses to protect from unauthorized user.

    console.log(protect_email("robin_singh@example.com"));
    "robin...@example.com"

### parameterize(input)

Write a JavaScript function to *parameterize a string*.

    console.log(string_parameterize("Robin Singh from USA."));
    "robin-singh-from-usa"

### capitalizeFirst(input)

Write a JavaScript function to *capitalize the first letter of a string*.

    console.log(capitalize('js string exercises'));
    "Js string exercises"

### capitalizeWords(input)

Write a JavaScript function to *capitalize* the first letter *of each word* in a string.

    console.log(capitalize_Words('js string exercises'));
    "Js String Exercises"

### swapcase(input)

Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and *converts upper case letters to lower case*, and lower case letters to upper case.

    console.log(swapcase('AaBbc'));
    "aAbBC"

### camelize(input)

Write a JavaScript function *to convert a string into camel case*.

    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));
    "JavaScriptExercises"
    "JavaScriptExercises"
    "JavaScriptExercises"

### uncamelize(input)

Write a JavaScript function to *uncamelize* a string.

```js
    console.log(uncamelize('helloWorld', '_'));    // "hello_world"
```

### repeat(input, n)

Write a JavaScript function to *concatenates a given string n times* (default is 1).

    console.log(repeat('Ha!',3));
    "Ha!Ha!Ha!"

### insert(input, insert, position)

Write a JavaScript function to insert a string within a string at a *particular position* (default is 1).


    console.log(insert('We are doing some exercises.','JavaScript ',18));
    "We are doing some exercises."
    "JavaScript We are doing some exercises."
    "We are doing some JavaScript exercises."
