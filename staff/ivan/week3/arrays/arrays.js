
//check if it's an array

function isArray(arr){
  if(arr.constructor === Array){
    //console.log(arr.constructor)
    return true;
  }
  else{
    return false;
  }
}

// join

var joinElements = function(arr){
  var j = arr.join();
  //console.log(j)
  return j;
}

// arrayClone

var arrayClone = function(arr){
  new_array = arr.slice(0,arr.length);
  //console.log("TCL: arrayClone -> new_array", new_array)
  return new_array;
}

var findDifferences = function(arr1, arr2){
  array_of_differences = [];
  arr1flat = arr1.join().split(",");
  //console.log(arr1flat)
  arr2flat = arr2.join().split(",");
  //console.log(arr2flat)
  if(arr1flat.length>=arr2flat.length){
    for(i in arr1flat){
      if(arr1flat[i]!==arr2flat[i]){
        array_of_differences[array_of_differences.length]=parseInt(arr1flat[i]);
        //array_of_differences[array_of_differences.length]=parseInt(arr2flat[i]);
      }
    }
  } else{
    for(i in arr2flat){
      if(arr2flat[i]!==arr1flat[i]){
        array_of_differences[array_of_differences.length]=parseInt(arr2flat[i]);
        //array_of_differences[array_of_differences.length]=parseInt(arr1flat[i]);
      }
    }    
  }
  console.log(array_of_differences);
  return array_of_differences;
}