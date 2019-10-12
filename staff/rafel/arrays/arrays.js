
function isArray(arr) {
    return Array.isArray(arr);
}

function joinElements(input){
    var result = input.join("")
    var result2 = result.replace(" ","")
    return result2
}

function arrayClone(input){
    var cloneInput = input.slice();
    return input
}

function findDifferences(array1, array2){
    var array1Together = array1.join()
    var array2Together = array2.join()

    var difference = []
    for (var i = 0; i < array1Together.length; i += 1){
       
      if(array1Together[i] != array2Together[i])
      difference.push(array1Together[i])
     }    
}



