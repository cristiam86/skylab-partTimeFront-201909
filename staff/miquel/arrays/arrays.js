
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
  let arrDiff = [];
  arr1.find(function(value) {
    if(arr2.indexOf(value) < 0) arrDiff.push(value)
  });
  arr2.find(function(value) {
    if(arr1.indexOf(value) < 0) arrDiff.push(value)
  });
  return arrDiff;
}

function arraySumProduct(arr) {
  return arr.reduce(function(acc, num) {
    return acc + parseInt(num);
  }, 0);
}

function addItems() {
  let newArr = [];
  for(var values in arguments) {
    newArr.push(arguments[values]);
  }
  return newArr;
}

function generateArrayLength(init, len) {
  let arr = [], inc = init
  for(let i = 0; i < len; i ++) {
    arr.push(inc);
    inc += 1;
  }
  return arr;
}

function arrayLast(arr, len) {
  if(!len || len <= 0) return arr.pop();
  return arr.slice(arr.length - len)
}

function arraySortItems(arr) {
  return arr.sort(function(elem1, elem2) {
    return elem1 - elem2;
  });
}

function arrayGetRandom(arr) {
  return arr[Math.floor(Math.random() * Math.floor(arr.length))];
}

function arrayFindDuplicates(arr) {
  let diffArr = [];
  arr.map(function(item) {
    if(arr.indexOf(item) !== arr.lastIndexOf(item) && 
       diffArr.indexOf(item) < 0)
      diffArr.push(item);
  });
  return diffArr;
}

function mergeArrays(arr1, arr2) {
  let mergeArr = arr1.concat(arr2);
  let uniqueArr = [];

  mergeArr.filter(function(item, index) {
    if(mergeArr.indexOf(item) === mergeArr.lastIndexOf(item)) uniqueArr.push(item);
    if(mergeArr.indexOf(item) !== mergeArr.lastIndexOf(item) && 
       uniqueArr.indexOf(item) < 0) {
        uniqueArr.push(item);
    }
  });

  return uniqueArr;
}

function separateEven(nums) {
  var newArr = [];
  nums.split('').forEach(function(item, index) {  
    if(parseInt(nums[index-1]) % 2 === 0 &&
       parseInt(item) % 2 === 0) {
         newArr.push("-");
    }
    newArr.push(item);
  });

  return newArr.join('');
}

function mostFrequentItem(arr) {
  "use strict";
  var results = {}, resultsSorted = {};

  if(arr instanceof Array) { // input is Array
    arr.forEach(function(item) {
      if(!results[item]) results[item] = 1;
      else results[item] += 1;
    });
  }
  
  resultsSorted = Object.keys(results).sort(function(a, b) {
    return results[b] - results[a];
  });
  
  return `${resultsSorted[0]} (${results[resultsSorted[0]]} times)`;
}

function moveElement(arr, init_pos, final_pos) {
  let newArr = [], arrAux;

  arr.forEach(function(item, index) {  
    if(index === init_pos) arrAux = item;
    else newArr.push(item);
    if(index === final_pos) newArr.push(arrAux);
  });

  return newArr;
}

function swapCase(str) {
  let strOutput = [];
  str = str.split('');
  str.forEach(function(char, index) {
    if(char.toLowerCase() === char) strOutput.push(char.toUpperCase())
    else strOutput.push(char.toLowerCase())
  })
  return strOutput.join('');
}