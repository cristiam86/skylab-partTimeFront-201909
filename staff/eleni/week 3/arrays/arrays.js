///isArray
function isArray(input) {
    if (input instanceof Array) {
        return true;
    } else {
        return false;
    }
}

///joinElements
function joinElements(input) {
    return input.join(",");
}


///arrayClone
function arrayClone(input) {
    var copy = input.slice(0);
    return copy;
}

///findDifferences
function findDifferences(array1, array2) {
    var temp = [];
    for (var i in array1) {
        if (!array2.includes(array1[i])) temp.push(array1[i])
    }
    for (i in array2) {
        if (!array1.includes(array2[i])) temp.push(array2[i]);
    }
    return temp.sort((a, b) => a - b);
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
function SumAndProduct(input) {
    var sum = input.reduce((a, b) => a + b);
    var product = input.reduce((a, b) => a * b);
    return { sum: sum, product: product }
}
//// addItems
function addItems(input, items) {
    return result = input.push(items);
}

//// generateArrayLength
function generateArrayLength(input1, input2) {
    var temp = [];
    for (var i = input1; i <= input2; i++) {
        var result = temp.push(i);
    }
    return temp;
}

///last
function getLast(input, n) {
    if (n > 0) {
        return input.slice(Math.max(input.length - n, 0))
    } else {
        return input.slice(-1);
    }
}

//// sortItems
function sort() {
    return [].slice.call(arguments).sort(function(a, b) {
        return a - b;
    });
}

//// getRandom
function getRandom() {
    return [].slice.call(arguments)[Math.floor(Math.random() * arguments.length)];
}

///  findDuplicates
function findDuplicates(input) {
    return input.filter(function(a) {
        return input.indexOf(a) !== input.lastIndexOf(a)
    });
}
//// mergeArrays
function mergeArrays(array1, array2) {
    var merged = array1.concat(array2);
    return merged.filter(function(a) {
        return merged.indexOf(a) === merged.lastIndexOf(a)
    });
}
/// separateEven

///  mostFrequentItem


/// moveElement
function moveElement(arr, from, to) {
    var element = arr[from];
    arr.splice(from, 1);
    arr.splice(to, 0, element);
    return arr;
}
/// swapCase
function swapCase(input) {
    var newWord = [];

    for (i = 0; i < input.length; i++) {
        if (input[i] == input[i].toLowerCase()) {
            newWord[i] = input[i].toUpperCase();
        } else {
            newWord[i] = input[i].toLowerCase();
        }
    }

    return newWord.join("");
}

//// Print elements array

/// array_filled (string)

/// Sum squares

/// removeDuplicate

/// showChoices

///showLeapYears
function showLeapYears(st_year, end_year) {
    function leap_year_range(st_year, end_year) {
        var year_range = [];
        for (var i = st_year; i <= end_year; i++) {
            year_range.push(i);
        }
        var new_array = [];

        year_range.forEach(
            function(year) {
                if (test_LeapYear(year))
                    new_array.push(year);
            });

        return new_array;
    }

    function test_LeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
        } else {
            return false;
        }
    }
    return test_LeapYear
}


/// shuffleArray


/// binarySearch
///sumPositions
////generateArraySteps
////flattenArray
///unionArray
///removeFalsy
///first
///sortObjectsTitle
///findPairSum
///validValues
///longestCommon
///fillArray
///removeElement
///findArrayWithElement
///emptyArray
///getNthLargest
///array_filled (numeric)
///filterFalsy