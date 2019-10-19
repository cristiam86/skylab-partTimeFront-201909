console.log("csdcd")

people = ['John','Charles','Helen']

var mapped = people.map(function(t,x){
    return [t,x]
})
console.log("TCL: mapped", mapped)

// filter

nums = [0,1,2,3,4,5,6]

var filtered = nums.filter(function(element){
    return element%2 === 0; //whatever evaluates to true allows the value to pass the filter...
})

console.log(nums)
console.log(filtered)

// reduce

var reduced = nums.reduce(function(acc,elem){
    return acc + elem;
},0);

console.log(reduced)