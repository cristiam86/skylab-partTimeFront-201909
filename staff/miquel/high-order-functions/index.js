let errors = 0;
let months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

function capitalCase(value) {
    //console.log(value.charAt(0).toUpperCase());
    return value.charAt(0).toUpperCase() + value.slice(1);
}
let monthCapital = months.map(capitalCase);
if(monthCapital[0].charAt(0) !== monthCapital[0].charAt(0).toUpperCase()) {
    errors += 1;
    console.error("1. months should be capitalized");
}

let sameMonths = months.filter(function(value) {
    if(value.charAt(0) === "j") return value;
});
if(sameMonths[0].charAt(0) !== "j") {
    errors += 1;
    console.error("2. only months starting with j allowed");
}

const vowels = ["a","e","i","o","u"];
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';
let counter = 'loremIpsum'.split('').reduce(function(acc, letter) {
    if(vowels.includes(letter.toLowerCase())) acc += 1;
    return acc;
},0);
if(counter === 0) {
    errors += 1;
    console.error("3. you need to count the vowels");
}

let greatThanFiveLetters = months.filter(function(month) {
    if(month.length > 5) return month;
});
console.log("TCL: greatThanFiveLetters", greatThanFiveLetters)
if(greatThanFiveLetters.length !== 7) {
    errors += 1;
    console.error("4. incorrect count of months");
}

function enterPermission(age, callback) {
    if(age >= 18) return callback(true);
    else return callback(false);
}
function permission(ticket) {
    if(ticket === true) return "entrada permitida";
    else return "entrada denegada";
}
if(enterPermission(18, permission) != "entrada permitida") {
    errors += 1;
    console.error("5. you are too young to get in");
}

if (errors){
    console.error(errors+" ERROR(S) FOUND");
} else {
    console.log("CONGRATS!!!");
}