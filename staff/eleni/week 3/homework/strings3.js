///compareStrings
function compareStrings(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1 === str2) {
        return true
    } else {
        return false
    }
}

///caseInsensitiveSearch
function caseInsensitiveSearch(str1, str2) {
    str2 = str2.toLowerCase();
    if (str1.toLowerCase().indexOf(str2) != -1) {
        alert('Matched');
    }
}

//uncapitalize
function uncapitalize(input) {
    input = input.toLowerCase().split(' ');
    let result = [];
    for (let word of input) {
        result.push(word.charAt(0).toLowerCase() + word.slice(1));
    }
    return result.join(' ')
}
///capitalizeWords
function capitalizeWords(words) {
    return words.toUpperCase();
}
///unCapitalizeWords
function unCapitalizeWords(words) {
    return words.toLowerCase();
}

///isUpperCaseAt
function isUpperCaseAt(input, index) {
    char = input.charAt(index)
    if (char === char.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

///isLowerCaseAt
function isLowerCaseAt(input, index) {
    char = input.charAt(index)
    if (char === char.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
///numberHumanized
function numberHumanized(num) {
    if ((num.toString().slice(-1)) === "1") {
        return num + "st"
    } else if ((num.toString().slice(-1)) === "2") {
        return num + "nd"
    } else if ((num.toString().slice(-1) === "3")) {
        return num + "rd"
    } else {
        return num + "nth"
    }
}
//startsWith
function startsWith(input, start) {
    if (input.startsWith(start)) {
        return true;
    } else {
        return false;
    }

}
///endsWith
function endsWith(input, end) {
    if (input.endsWith(end)) {
        return true;
    } else {
        return false;
    }
}

///successor---whats carry???
function successor(input) {

}

////guid
function guid(len) {
    var result = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        length = chars.length || 32;

    for (var i = 0; i < length; i++) {
        result[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }

    return result.join('');
}