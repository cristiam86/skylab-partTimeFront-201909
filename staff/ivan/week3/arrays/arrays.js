
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

sample = ["1", 2, 3, "a", "b", "C"]
console.log(isArray(sample))


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

//sum and product

var getSum = function(total, num){
  return total + num;
}
var getProduct = function(total, num){
  return total * num;
}


var sumAndProduct = function(array){
  var sum = 0;
  var product = 1;
  var acc_sum = array.reduce(getSum, sum);
  var acc_prod = array.reduce(getProduct, product);
  return [acc_sum, acc_prod];
}

var a = [1,2,3,4,5] //should return 10 and 120


console.log(sumAndProduct(a))

//another option with more explicit functions, declaring them inside...

var sumAndProductExplicit = function(array){
  var sum = 0;
  var product = 1;
  var acc_sum = array.reduce(function(total,num){
    return total + num;
  }, sum);
  var acc_prod = array.reduce(function(total,num){
    return total * num;
  }, product);
  return [acc_sum, acc_prod];
}

var b = [6,7,2] //should return 15 and 84

console.log(sumAndProductExplicit(b))

//generateArrayLength

var generateArrayLength = function(first,length){
  final = [];
  for(var i=0; i<length; i++){
    final.push(first+i);
  }
  return final;
}

console.log(generateArrayLength(5,10));
console.log(generateArrayLength(-3,8));

// get the last elements of array

var lastsample = [7, 9, 0, -7];

var last = function(array, len=1){
  var output
  if(len===1){
    return output = array[array.length-1];
  } else{
    return output = array.splice(-len);
  }
}

console.log(last(lastsample));
console.log(last(lastsample, 3));