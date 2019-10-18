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

///textTruncate
function textTruncate(input, length, end) {
    if (end == "") {
        end = ".."
    }
    return input.substring(0, length) + end;
}

///stringChop
function stringChop(input, length) {
    return input.substring(0, length)
}

/// stringCount
function stringCount(input, segment) {
    var count = 0;
    var segmented = input.toLowerCase().split(" ");
    for (var i = 0; i < segmented.length; i++) {
        if (segment === segmented[i]) {
            count++
        }
    }
    return count;
}
///htmlScape---Whaaaatt????

////formattedString
function formattedString() {

}

/// repeatString
function repeatString(input, times) {
    return input.repeat(times)
}
/// specialChars
function specialChars(input, char) {
    return input.split('').
}
// StringStrip
function StringStrip(input) {
    return input.trim();
}
/// textTruncateWords
function textTruncateWords(input, length) {
    var words = input.split(" ");
    return words.slice(0, length).join(" ");
}
///alphabetize
function alphabetize(input) {
    return input.split("").sort().join("");
}
/// removeFirst
function removeFirst(input, removed) {
    return input.replace(removed, "")
}
///asciiToHexa
function asciiToHexa(input) {
    return (input + 0x10000).toString(16).substr(-4).toUpperCase();

}

////hexToAscii
function hexToAscii(input) {
    result = "";
    for (x = 0; x < input.length; x += 2) {
        result += String.fromCharCode(parseInt(input.substr(x, 2), 16))
    }
    return result;
}

///searchWord
function searchWord(input, word) {
    var x = 0,
        y = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] === word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (input[j] === word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++
                }
            }
            y = 0
        }
    }
    return word + " was found " + x + " times"
}

///stringEndsWith
function stringEndsWith(input, end) {
    if (input.endsWith(end)) {
        return true;
    }
}
//removeNonAscii
function removeNonAscii(input) {

    if ((input === null) || (str === ''))
        return false;
    else
        input = input.toString();

    return input.replace(/[^\x20-\x7E]/g, '');
}

///removeNonWord
function removeNonWord(input) {
    return input.replace(/[\W_]+/g, " ");
}

//sentenceCase
function sentenceCase(input) {
    input = input.toLowerCase().split(' ');
    let result = [];
    for (let word of input) {
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return result.join(' ')
}

/// stripHtmlTags
function stripHtmlTags(input) {
    if ((input === null) || (input === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, '');
}