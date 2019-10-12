
function isArray(arr) {
  // console.log("TCL: isArray -> Array.isArray(arr)", Array.isArray(arr))
  return Array.isArray(arr);
}

function joinElements(arr) {
  var res;
  res = arr.join();
  console.log(typeof res);
  // console.log("TCL: joinElements -> res", res)
  return res;
}

function arrayClone(arr) {
  var res;

  res = arr.slice(0);

  // console.log("TCL: joinElements -> res", res)
  return res;
}

function findDifferences(arr1, arr2) {
  var res = [];
  var flatArray1;
  var flatArray2;
  var lengthCompare;

  function toFlat(arr, arrFlat) {
    arrFlat = arr.join();
    arrFlat = arrFlat.split(',');
    for (i = 0; i < arrFlat.length; i++) {
      arrFlat[i] = parseInt(arrFlat[i]);
    }
    arrFlat = arrFlat.sort(function (a, b) { return a - b; });
    return arrFlat;
  }
  function compareArrays(arr1, arr2) {
    arr1.length < arr2.length ? lengthCompare = arr2.length : lengthCompare = arr1.length;

    for (i = 0; i < lengthCompare; i++) {
      arr1[i] !== arr2[i] ?
        !isNaN(arr1[i]) ?
          !isNaN(arr2[i]) ?
            res.push(arr1[i], arr2[i]) :
            res.push(arr1[i]) :
          !isNaN(arr2[i]) ?
            res.push(arr2[i]) : console.log('los 2 son undefined') :
        console.log('los 2 son iguales');
    }

  }

  flatArray1 = toFlat(arr1, flatArray1);
  flatArray2 = toFlat(arr2, flatArray2);


  compareArrays(flatArray1, flatArray2);

  res = res.join();
  console.log("TCL: joinElements -> res", res)
  return res;
}

function Sum_And_Product(arr){
  var res=[];

  res[0]=arr.reduce(function(acc,actual){
    return acc + actual;
  });

  res[1]=arr.reduce(function(acc,actual){
    return acc * actual;
  });

  return res;
}





    // for (i = 0; i < arr1.length; i++) {
    //   for (j = 0; j < arr2.length; j++) {
    //     for (k = 0; k < res.length; k++) {
    //       arr1[i] !== arr2[j] ? arr1[i] !== res[k] ? res.push(arr1[i]) : res.push(arr2[i]) : '';
    //       console.log("TCL: compareArrays -> res[k]", res[k])
    //       console.log("TCL: compareArrays -> arr2[j]", arr2[j])
    //       console.log("TCL: compareArrays -> arr1[i]", arr1[i])
    //     }
    //   }
    // }
