///removeRepeatChars
function removeRepeatChars(input) {
    return input.split('').filter(function(item, position, self) {
            return self.indexOf(item) == position;
        })
        .join('');
}
///fibonacci
function fibonacci(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

///digitCount--filter
function digitCount(array, value) {
    return array.filter((v) => (v === value)).length;
}
///digitCount---simple
function digitCount(array, value) {
    var n = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == value) { n++ }
    }
    return n;
}

///reverseString
function reverseString(input) {
    return input.split('').reverse().join('');
}

///binarySearch

function binarySearch(input, number, start = 0, end = input.length - 1) {
    var mid = Math.floor((start + end) / 2);

    if (number === input[mid]) {
        return mid;
    } else if (start >= end) {
        return -1;
    } else {
        return number < input[mid] ? binarySearch(input, number, start, mid - 1) : binarySearch(input, number, mid + 1, end);
    }
}

///mergeSort
function mergeSort(input) {
    if (input.length == 1) {
        return input;
    }

    var middleIndex = Math.ceil(input.length / 2)
    var leftArray = input.slice(0, middleIndex)
    var rightArray = input.slice(middleIndex, input.length)
    leftArray = mergeSort(leftArray)
    rightArray = mergeSort(rightArray)
    return merge(leftArray, rightArray)
}

function merge(leftArray, rightArray) {
    var sorted = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        var leftItem = leftArray[0]
        var rightItem = rightArray[0]
        if (leftItem > rightItem) {
            sorted.push(rightItem)
            rightArray.shift()
        } else {
            sorted.push(leftItem)
            leftArray.shift()
        }
    }
    while (leftArray.length !== 0) {
        sorted.push(leftArray[0])
        leftArray.shift()
    }
    while (rightArray.length !== 0) {
        sorted.push(rightArray[0])
        rightArray.shift()
    }
    return sorted;
}