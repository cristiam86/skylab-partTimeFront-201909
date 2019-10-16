var errors = 0;

/////////////////
/// isString ////
////////////////
var result = isString("asd");
if (!result) {
  errors += 1;
  console.error("ERROR: isString expected to return true");
}

var result = isString(99);
if (result) {
  errors += 1;
  console.error("ERROR: isString expected to return false");
}

var result = isString(true);
if (result) {
  errors += 1;
  console.error("ERROR: isString expected to return false");
}

var result = isString("true");
if (!result) {
  errors += 1;
  console.error("ERROR: isString expected to return true");
}
/////////////////
/// isBlank ////
////////////////
var result = isBlank("");
if (!result) {
  errors += 1;
  console.error("ERROR: isBlank expected to return true");
}

var result = isBlank("asda");
if (result) {
  errors += 1;
  console.error("ERROR: isBlank expected to return false");
}

/////////////////
/// stringToArray ////
////////////////
var result = stringToArray("word1 word2 word3");
if (result.length !== 3 || result[0] !== "word1" || result[1] !== "word2" || result[2] !== "word3") {
  errors += 1;
  console.error("ERROR: stringToArray failed");
}

var result = stringToArray("word1word2word3");
if (result.length !== 1 || result[0] !== "word1word2word3") {
  errors += 1;
  console.error("ERROR: stringToArray failed");
}

/////////////////
/// truncate ////
////////////////
var result = truncate("word1 word2 word3", 2);
if (result !== "wo") {
  errors += 1;
  console.error("ERROR: truncate expected to return wo");
}

var result = truncate("word1 word2 word3", 0);
if (result !== "") {
  errors += 1;
  console.error("ERROR: truncate expected to return ''");
}

var result = truncate("word1 word2 word3", 6);
if (result !== "word1 ") {
  errors += 1;
  console.error("ERROR: truncate expected to return word1 w");
}

/////////////////
/// abbrevName ////
////////////////
var result = abbrevName("Robin Singh");
if (result !== "Robin S.") {
  errors += 1;
  console.error("ERROR: abbrevName expected to return Robin S.");
}

var result = abbrevName("Robin");
if (result !== "Robin") {
  errors += 1;
  console.error("ERROR: abbrevName expected to return Robin");
}
/////////////////
/// protect ////
////////////////
var result = protect("robin_singh@example.com");
if (result !== "robin...@example.com") {
  errors += 1;
  console.error("ERROR: protect expected to return robin...@example.com");
}

var result = protect("robin@example.com");
if (result !== "ro...@example.com") {
  errors += 1;
  console.error("ERROR: protect expected to return ro...@example.com");
}

var result = protect("robin_singh_smith@example.com");
if (result !== "robin...@example.com") {
  errors += 1;
  console.error("ERROR: protect expected to return robin...@example.com");
}

/////////////////
/// parameterize ////
////////////////
var result = parameterize("Robin Singh from USA.");
if (result !== "robin-singh-from-usa") {
  errors += 1;
  console.error("ERROR: parameterize expected to return robin-singh-from-usa");
}

var result = parameterize("My name is Robin Singh. I'm from USA.");
if (result !== "my-name-is-robin-singh-im-from-usa") {
  errors += 1;
  console.error("ERROR: parameterize expected to return my-name-is-robin-singh-im-from-usa");
}

/////////////////
/// capitalizeFirst ////
////////////////
var result = capitalizeFirst("js string exercises");
if (result !== "Js string exercises") {
  errors += 1;
  console.error("ERROR: capitalizeFirst expected to return Js string exercises");
}

var result = capitalizeFirst("exercises Like there is no Tomorrow");
if (result !== "Exercises like there is no tomorrow") {
  errors += 1;
  console.error("ERROR: capitalizeFirst expected to return Exercises like there is no tomorrow");
}

/////////////////
/// capitalizeWords ////
////////////////
var result = capitalizeWords("js string exercises");
if (result !== "Js String Exercises") {
  errors += 1;
  console.error("ERROR: capitalizeWords expected to return Js String Exercises");
}

var result = capitalizeWords("exercises Like there is no Tomorrow");
if (result !== "Exercises Like There Is No Tomorrow") {
  errors += 1;
  console.error("ERROR: capitalizeWords expected to return Exercises Like There Is No Tomorrow");
}
/////////////////
/// swapcase ////
////////////////
var result = swapcase("AaBbc");
if (result !== "aAbBC") {
  errors += 1;
  console.error("ERROR: swapcase expected to return aAbBC");
}

var result = swapcase("AaBbcDDkk");
if (result !== "aAbBCddKK") {
  errors += 1;
  console.error("ERROR: swapcase expected to return aAbBCddKK");
}

/////////////////
/// camelize ////
////////////////
var result = camelize("JavaScript Exercises");
console.log(result);
if (result !== "JavaScriptExercises") {
  errors += 1;
  console.error("ERROR: camelize expected to return JavaScriptExercises");
}

var result = camelize("JavaScript exercises");
console.log(result);
if (result !== "JavaScriptExercises") {
  errors += 1;
  console.error("ERROR: camelize expected to return JavaScriptExercises");
}

var result = camelize("JavaScriptExercises");
console.log(result);
if (result !== "JavaScriptExercises") {
  errors += 1;
  console.error("ERROR: camelize expected to return JavaScriptExercises");
}

/////////////////
/// uncamelize ////
////////////////
var result = uncamelize("helloWorld", '_');
console.log(result);
if (result !== "hello_world") {
  errors += 1;
  console.error("ERROR: uncamelize expected to return hello_world");
}

var result = uncamelize("helloWorldPeople", '=');
if (result !== "hello=world=people") {
  errors += 1;
  console.error("ERROR: uncamelize expected to return hello=world=people");
}
/////////////////
/// repeat ////
////////////////
var result = repeat('Ha!',3);
if (result !== "Ha!Ha!Ha!") {
  errors += 1;
  console.error("ERROR: repeat expected to return Ha!Ha!Ha!");
}

var result = repeat('Ho',5);
if (result !== "HoHoHoHoHo") {
  errors += 1;
  console.error("ERROR: repeat expected to return HoHoHoHoHo");
}

/////////////////
/// insert ////
////////////////
var result = insert('We are doing some exercises.','JavaScript ',18);
if (result !== "We are doing some JavaScript exercises.") {
  errors += 1;
  console.error("ERROR: repeat expected to return We are doing some JavaScript exercises.");
}

/// TOTAL
if (errors > 0) {
  console.error("ERRORS FOUND: "+errors)
}