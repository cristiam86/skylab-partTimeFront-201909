
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
  console.log(j)
  return j;
}

// arrayClone

var arrayClone = function(arr){
  new_array = arr.slice(0,arr.length);
  //console.log("TCL: arrayClone -> new_array", new_array)
  return new_array;
}

var findDifferences = function(arr1, arr2){
  var arr1flat = arr1.flat(3);
  var arr2flat = arr2.flat(3);

  var c = arr1flat.concat(arr2flat);
  console.log(c)

  // var deduped = sandwiches.filter(function (sandwich, index) {
  //   return sandwiches.indexOf(sandwich) === index;
  // });

  var filtered = c.filter(function(number,index){
    return c.indexOf(number) === index;
  })

  for(var i in filtered){
    c.splice(c.indexOf(filtered[i]),1);
    c.splice(c.indexOf(filtered[i]),1);
  }

  console.log(c);

  console.log(filtered);

  console.log(arr1.flat(3));
  console.log(arr2.flat(3));

  differences = [];

  console.log(differences);
}