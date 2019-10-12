///isArray
function isArray(input){
    if(input instanceof Array){
        return true;
    }else{
        return false;
    }
}

///joinElements
function joinElements(input){
    return input.join(",");
}


///arrayClone
function arrayClone(input){
    var copy=input.slice(0);
    return copy;  
}

///findDifferences
function findDifferences(array1,array2){
    var temp=[];
    for (var i in array1){
        if(!array2.includes(array1[i])) temp.push(array1[i])
    }
    for(i in array2) {
        if(!array1.includes(array2[i])) temp.push(array2[i]);
    }
        return temp.sort((a,b) => a-b);
}
/*
function findDifferences(array1,array2){
    var joinedArr= array1.concat(array2);
    var results=[];
    for (var i = 0; i < joinedArr.length - 1; i++) {
    if (joinedArr[i + 1] == joinedArr[i]) {
        results.push(joinedArr[i]);
    } 
 }
}*/

///// Sum and Product
function SumAndProduct(input){
    var sum=input.reduce((a, b) => a + b);
    var product=input.reduce((a, b) => a * b);
    return {sum:sum,product:product}
}
//// addItems
function addItems(input,items){
    return result=input.push(items);
}

//// generateArrayLength
function generateArrayLength(input1,input2){
    var temp=[];
    for (var i=input1; i<=input2; i++){
        var result=temp.push(i);
    } return temp;
}

///last
function getLast(input,n){
    if(n>0){
    return input.slice(Math.max(input.length - n, 1))
    }else
}
