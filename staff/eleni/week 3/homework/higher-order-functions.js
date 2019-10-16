//// capitalCase
function capitalCase(input) {
    input = input.toLowerCase()
        .split(' ')
        .map((first) => first.charAt(0).toUpperCase() + first.substring(1))
        .join(' ');
    return input;
}

/// someMonths
function someMonths(input) {
    input = input.toLowerCase()
        .split(' ')
        .map((first) => first.charAt(0).toUpperCase() + first.substring(1))
        .join(' ');
    return input;
}