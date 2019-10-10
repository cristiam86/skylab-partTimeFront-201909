"use strict";

(function(){
    //get an array with the numbers elements
    var first = document.getElementsByClassName('trial');
    var nums= Array.from(document.getElementsByClassName('trial'));

    var simple = [2,3,4].slice();
    console.log('simple '+simple+typeof(simple))
    
    console.log(first)
    console.log(typeof(first))
    console.log(nums)
    console.log(typeof(nums))

	nums.map(function(x){
		x.onclick = function(){
            console.log('working');
		}
    })
    
})();
