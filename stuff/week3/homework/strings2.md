# JavaScript String Exercises [timing 45m]

## Goals

- String methods

## Tasks

### numberHumanized

Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

    console.log(numberHumanized(301));
    console.log(numberHumanized(402));
    "301st"
    "402nd"

### textTruncate

Write a JavaScript function to *truncates a string if it is longer than the specified number of characters*. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

    console.log(textTruncate('We are doing JS string exercises.',15,'!!'))
    "We are doing !!"

### stringChop

Write a JavaScript function *to chop a string into chunks of a given length*.

    console.log(stringChop('w3resource',2));
    ["w3", "re", "so", "ur", "ce"]

### stringCount

Write a JavaScript function to *count the occurrence of a substring* in a string.

    console.log(stringCount("The quick brown fox jumps over the lazy dog", 'the'));
    Output :
    2

### htmlScape

Write a JavaScript function to *escape a HTML* string.

```
console.log(htmlScape('<a href="javascript-string-exercise-17.php" target="_blank">'));
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
```
### formattedString

Write a JavaScript function that can pad (left, right) *a string to get to a determined length*.

    console.log(formattedString('00000000',123,''));
    "12300000"

### repeatString

Write a JavaScript function to *repeat a string a specified times*.

    console.log(repeatString('a', 4));
    "aaaa"

### specialChars

Write a JavaScript function to get a part of a string after a specified character.

    console.log(specialChars('w3resource: JavaScript Exercises', ':','a');
    "w3resource"

### stringStrip

Write a JavaScript function to *strip leading and trailing spaces* from a string.

    console.log(stringStrip(' w3resource '));
    "w3resource"

### textTruncateWords

Write a JavaScript function to truncate a string to a certain number of words.

    console.log(textTruncateWords('The quick brown fox jumps over the lazy dog', 4));
    "The quick brown fox"

### alphabetize

Write a JavaScript function to alphabetize a given string.

*Hint:Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.*

    console.log(alphabetize('United States'));
    "SUadeeinsttt"

### removeFirst

Write a JavaScript function to r*emove the first occurrence* of a given 'search string' from a string.

    console.log(removeFirst_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
    "The quick brown fox jumps over lazy dog"

### asciiToHexa

Write a JavaScript function to *convert ASCII to Hexadecimal* format.

    console.log(asciiToHexa('12'));
    "3132"

### hexToAscii

Write a JavaScript function to *convert Hexadecimal to ASCII format*.

    console.log(hexToAscii('3132'));
    console.log(hexToAscii('313030'));
    "12"
    "100"

### searchWord

Write a JavaScript function to find a word within a string.

    console.log(searchWord('The quick brown fox', 'fox'));
    "'fox' was found 1 times."

### stringEndsWith

Write a JavaScript function *check if a string ends with specified suffix*.

    console.log(stringEndsWith('JS PHP PYTHON','PYTHON'));
    true


### removeNonAscii

Write a JavaScript function to *remove non-printable ASCII* chars.

    console.log(removeNonAscii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
    "PHP-MySQL"

### removeNonWord

Write a JavaScript function to *remove non-word characters*.

    console.log(removeNonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'))
    "PHP ### MySQL"


### sentenceCase

Write a JavaScript function to *convert a string to title case*.

    console.log(sentenceCase('PHP exercises. python exercises.'));
    "Php Exercises. Python Exercises."

### stripHtmlTags

Write a JavaScript function to *remove HTML/XML tags* from string.

console.log(stripHtmlTags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"

### zeroFill

Write a JavaScript function to create a *Zerofilled value with optional +, ### sign*.


    console.log(zeroFill(120, 5, '-'));
    "-00120"