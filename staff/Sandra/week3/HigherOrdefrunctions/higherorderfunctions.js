var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

//capitalCase
function capitalCase(){
    return months.map(function (month){
        return month[0].toUpperCase() + month.slice(1);
    });
}
capitalCase();

//someMonths
function someMonths(){
    var result = months.filter(function (month){
        if (month[0].toLowerCase()== 'j') return month;
    });
    return result;
}
someMonths();

//countVowels
function countVowels(){
    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
    var result = loremIpsum.match(/[aeiou]/gm);
    console.log(result.length);
}
countVowels();
//greatThanFiveLetters
function greatThanFiveLetters(){
    var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
    var result1 = months.every(function (month){
        return month.length >= 5; 
    });
    var result2 = months.some(function (month){
        return month.length >=5;
    });
    console.log("Todos los meses tienen cinco letras o mas: "+result1);
    console.log("Algún mes tiene cinco letras o mas: "+result2);
}
greatThanFiveLetters();

//callback

function person(age) {
    return age>=18 ? true : false;
}
  
function allowEntry(age,funCallBack) {
    return funCallBack(age);
}
  
console.log("Permitida la entrada:" + allowEntry(18,person));