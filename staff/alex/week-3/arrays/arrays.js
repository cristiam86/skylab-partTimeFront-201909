
//### isArray

//Write a JavaScript function to check whether an `input` is an array or not.

function isArray(arr) {
  return Array.isArray(arr);
}

// ### joinElements

//Write a simple JavaScript program to join all elements of the following array into a string.

//Sample array : beatles = ['John','George','Ringo','Paul'];

//Expected Output : 
//'John,George,Ringo,Paul'

function joinElements(beatles) {
  return beatles.join();
};


// ### arrayClone

// Write a JavaScript function to clone an array.

//Test Data :
//console.log(array_Clone([1, 2, 4, 0])); 
//console.log(array_Clone([1, 2, [4, 0]]));
//[1, 2, 4, 0] 
//[1, 2, [4, 0]]


// ### findDifferences

//Write a JavaScript function to find the difference of two arrays.

//  Test Data :
//console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
//["3", "10", "100"]
//console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
//  ["6"]
//console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["3", "10", "100"] 

function findDifferences(arr1, arr2, arrDif) {

  arr1 = [1, 2, 3];
  arr2 = [100, 2, 1, 10];

  arrDif = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] != arr2[j]);
      {
        arrDif.push(arr2[j], arr1[i]);
        
      }

    }
    return arrDif
  }

}

findDifferences()
//  ### Sum and Product
//  Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProduct (numbers, s, p) {

  numbers = [1, 2, 3, 4, 5, 6];
  s = 0;
  p = 1;
  
  for (var i = 0; i < numbers.length; i += 1) {
    s += numbers[i];
    p *= numbers[i];
  }
  return 'Sum : ' + s + ' Product :  ' + p;
  }
  
  sumAndProduct ()


//### addItems
//Write a JavaScript program to add items in an blank array and display the items.

function addItems() {
  var items = ["jiraf", "lion", "tiger"];
  var emptyItems = [];
  emptyItems.push(items)
  return (emptyItems)
};

addItems()

//### generateArrayLength

//Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

  //  Test Data :
  //  console.log(array_range(1, 4)); 
  //  [1, 2, 3, 4]
  //  console.log(array_range(-6, 4));
  //  [-6, -5, -4, -3]




  //### findDuplicates

//Write a JavaScript program to find duplicate values in a JavaScript array.

function findDuplicates(arr1, arr2, arrDupli) {

  arr1 = [1, 2, 3];
  arr2 = [100, 2, 1, 10];

  arrDupli = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]);
      {
        arrDupli.push(arr2[j]);
       
      }

    }
     return arrDupli
  }

}

findDuplicates()