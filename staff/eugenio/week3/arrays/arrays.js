
function isArray(arr) {
  return Array.isArray(arr);
}

function joinElements(arr){
  var str = arr.join();
  return str;
}

function arrayClone(arr1){
  var arr2 = [];
  for(var x = 0; x < arr1.length; x++){
    arr2.push(arr1[x]);
  }
  return arr2;
}

var arr = [1,2,3];
var arr2 = arrayClone(arr);
console.log(arr2);

