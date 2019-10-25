  
var errors = 0;
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
var results = capitalCase(months);
if (results !== ['January','February','March','April','May','June','July','August', 'September','October','November','December']) {
    errors += 1;
    console.error("En mayúscula la primera letra");
}

if (errors) {
    console.error(errors + " ERROR(S) FOUND");
} else {
    console.log("CONGRATS!!!");
}