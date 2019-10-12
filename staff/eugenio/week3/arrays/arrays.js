
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


function findDifferences(a, b){
  if(a.length < b.length){
    for(var x = 0; x < b.length; x++){
      if(b[x] !== a[x]){
        arr3.push(a[x]);
        arr3.push(b[x]);
      }
    }  
  }else{
    for(var y = 0; y < a.length; y++){
      if(a[y] !== b[y]){
        arr3.push(a[y]);
        arr3.push(b[y]);
      }
    }
  }
  return arr3;
}

