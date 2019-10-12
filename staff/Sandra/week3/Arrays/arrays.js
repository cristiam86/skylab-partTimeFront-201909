function isArray(arr){
    return Array.isArray(arr);
}

function joinElements(arr){
    return arr.join();
}

function arrayClone(arr){
    return arr.slice(0);
}

function findDifferences(arr1,arr2){
    var resultArr1= arr1.join().split(",");
    var resultArr2= arr2.join().split(",");
    var result =[];
    var value;
    
    for(var i=0; i<resultArr1.length; i += 1){
        value = resultArr1[i];
       if (!resultArr2.includes(value)) result.push(value);
    }
    for(var i=0; i<resultArr2.length; i += 1){
        value = resultArr2[i];
        if (!resultArr1.includes(value)) result.push(value);
     }
    return result.sort();
}

function sumAndProduct(arr){
    var sum = 0;
    var prod = 1;
    var result =[];
    for (var i = 0; i<arr.length;i +=1){
        sum +=arr[i];
        prod *=arr[i];
    }
    result.push(sum,prod);
    return result;
}

function addItems(arr){
    var result =[];
    for (var i = 0; i<arr.length;i +=1){
        result.push(arr[i]);
    }
    return result;
}

function generateArrayLength(startPos,lenArr){
    var result = new Array(lenArr);
    for (var i=0; i<=lenArr-1;i +=1){
        result[i] = startPos;
        startPos +=1;
    }
    return result;
}

function last(arr,num){
    if (num==null) return arr.slice(-1);
    return arr.slice(-num);
}

function sortItems(arr){
    arr.sort(function(a, b) {
       if (a < b) return -1;
       if (b > a) return 1
      });;
    
}

function getRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function findDuplicates(arr){

}

function mergeArrays(){

}

function separateEven(){

}

function mostFrequentItem(){

}

function moveElement(){

}

function swapCase(){

}

function printElementsArray(){

}

function arrayFilled(){

}

function sumSquares(){

}

function removeDuplicate(){

}

function showChoices(){

}

function showLeapYears(){

}

function shuffleArray(){

}

function binarySearch(){

}

function sumPositions(){

}

function generateArraySteps(){

}

function flattenArray(){

}

function unionArray(){

}

function removeFalsy(){

}

function first(){

}

function sortObjectsTitle(){

}

function findPairSum(){

}

function validValues(){

}

function longestCommon(){

}

function fillArray(){

}

function removeElement(){

}

function findArrayWithElement(){

}

function emptyArray(){

}

function getNthLargest(){

}

function arrayFilled(){

}

function filterFalsy(){

}