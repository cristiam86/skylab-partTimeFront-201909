var result = isObject("asd");
if (!result) {
  errors += 1;
  console.error("ERROR: isObject expected to return true");
}

var result = isObject(99);
if (result) {
  errors += 1;
  console.error("ERROR: isObject expected to return false");
}

var result = isObject(true);
if (result) {
  errors += 1;
  console.error("ERROR: isObjectexpected to return false");
}

var result = isObject("true");
if (!result) {
  errors += 1;
  console.error("ERROR: isObject expected to return true");
}