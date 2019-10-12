var errors = 0;

var isArr = isArray([]);
if(!isArr) {
  errors += 1;
  console.error("1. isArray should have returned true");
}

var isArr = isArray("asd");
if(typeof isArr === 'undefined' || isArr === true) {
  errors += 1;
  console.error("2. isArray should have returned false");
}

var arr = joinElements(['John','George','Ringo','Paul']);
if (arr!="John,George,Ringo,Paul"){
    errors +=1;
    console.error("3. joinElements should have returned: John,George,Ringo,Paul");
}

var arr = joinElements(['John']);
if (arr!="John"){
    errors +=1;
    console.error("4. joinElements should have returned: John");
}

var arr1 = [1, 2, 4, 0];
var arr2 = arr1;
arr1.pop();
if (arr1!=arr2){
    errors +=1;
    console.error("5. arrayClone should have returned: [1,2,4,0]");
}

var arr1 = arrayClone([1, 2, [4, 0]]);
var arr2 = arr1;
arr1.pop();
if (arr1!=arr2){
    errors +=1;
    console.error("6. arrayClone should have returned: [1,2,[4,0]]");
}

var result = findDifferences([1,2,3],[100, 2, 1, 10]);
if (result.join()!="10,100,3"){
    errors +=1;
    console.error("7. findDifferences should have returned: [3,10,100]");
}

var result = findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);
if (result.join()!="6"){
    errors +=1;
    console.error("8. findDifferences should have returned: [6]");
}

var result = findDifferences([1, 2, 3], [100, 2, 1, 10]);
if (result.join()!="10,100,3"){
    errors +=1;
    console.error("9. findDifferences should have returned: [3,10,100]");
}


var result = sumAndProduct([1,2,3]);
if(result.join()!="6,6") {
    errors +=1;
    console.error("10. sumAndProduct should have returned: [6,6]");
}

var result = sumAndProduct([0]);
if(result.join()!="0,0") {
    errors +=1;
    console.error("11. sumAndProduct should have returned: [0,0]");
}

var result = addItems([3,4,5,6,7]);
if(result.join()!="3,4,5,6,7") {
    errors +=1;
    console.error("12. addItems should have returned: [3,4,5,6,7");
}

var result = addItems([]);
if(result.join()!="") {
    errors +=1;
    console.error("13. addItems should have returned: []");
}

var result = generateArrayLength(1,4);
if(result.join()!="1,2,3,4") {
    errors +=1;
    console.error("14. generateArrayLength should have returned: [1,2,3,4]");
}

var result = generateArrayLength(-6,4);
if(result.join()!="-6,-5,-4,-3") {
    errors +=1;
    console.error("15. generateArrayLength should have returned: [-6, -5, -4, -3]");
}

var result = last([7, 9, 0, -2]);
if (result.join()!="-2"){
    errors +=1;
    console.error("16. last should have returned: -2");
}

var result = last([9, 0, -2],3);
if (result.join()!="9,0,-2"){
    errors +=1;
    console.error("17. last should have returned: [9, 0, -2]");
}

var result = last([7, 9, 0, -2],6);
if (result.join()!="7,9,0,-2"){
    errors +=1;
    console.error("18. last should have returned: [7, 9, 0, -2]");
}

var result = sortItems([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]);
if (result.join()!="-4,-3,1,2,3,5,6,7,8"){
    errors +=1;
    console.error("18. last should have returned: [-4,-3,1,2,3,5,6,7,8]");
}


if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}