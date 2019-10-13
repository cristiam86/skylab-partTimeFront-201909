
function isArray(arr) {
  return Array.isArray(arr);
}

function joinElements(arr) {
  return arr.join();
}

function arrayClone(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}

function findDifferences(arr1, arr2) {
  console.log("TCL: findDifferences -> arr1, arr2", arr1, arr2)
  var diffArr = [];
  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      
      if(arr1[i] == arr2[j]) console.log("equal",arr1[i], arr2[j]);
      else console.log("diff",arr1[i], arr2[j]);
      //diffArr[] = 
    }
  }
  return arr1;
}

function arraySumProduct(arr) {
  return '';
}

function addItems(arr) {
  return '';
}

function generateArrayLength(arr) {
  return '';
}

function arrayLast(arr) {
  return '';
}

function arraySortItems(arr) {
  return '';
}

function arrayGetRandom(arr) {
  return '';
}

function arrayFindDuplicates(arr) {
  return '';
}

function mergeArrays(arr) {
  return '';
}

function separateEven() {
  return '';
}

function mostFrequentItem() {
  return '';
}

function moveElement() {
  return '';
}

function swapCase() {
  return '';
}