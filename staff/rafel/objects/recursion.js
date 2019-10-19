/** removeRepeatChars */

var string = [1,2,3,4,5,6,2,3,4,5]

function removeRepeated(){
    var newArr = []
    string.pop()

}

function unique() {
    var newArr = []
    var a = string.pop()
    if(newArr.includes(a)){
      unique()
    } else {
     newArr.push(a) 
    }
  console.log(newArr)
}

var chainText = ('aabcbcb')
function whatAHell(chainText){
  var n = chainText.length
  var newArr = ('')
  var element = chainText.substring(n-1,n)
  if(n>0){
    if(newArr.match(element)){
    n = n-1
    } else { 
    newArr = newArr + element
    }
    n = n-1;
    whatAHell()
    console.log(newArr)
  } else {
    return newArr
  }
}
whatAHell('aabcbcd')




/** fibonacci */





/** digitCount */




/** reverseString */
function reverseString(word){
    if(word.length == 1){
      return word
      } else {
        return reverseString(word.substring(1)) + word.charAt(0)
      }
    }

/** binarySearch */


/** mergeSort */