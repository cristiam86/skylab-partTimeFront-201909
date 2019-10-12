//// capitalCase
function capitalCase(input){
    input
  var newInput = input.map(function(str){
   str.charAt(0).toUpperCase() + str.slice(1);
});
return newInput;
}