
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
//capitalCase
function capitalCase(arr){
    arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return arr2;
}
console.log(capitalCase(months));


//someMonths
var someMonths = months.filter((meses)=>{
    return meses.startsWith('j')
   })
console.log(someMonths);


//countVowels
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit';




//greatThanFiveLetters
var greatThanFiveLetters = months.filter((meses)=>{
    return meses.length > 5
})
console.log(greatThanFiveLetters);

//callback