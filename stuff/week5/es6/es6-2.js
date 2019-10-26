var myFunc = (name, birthday, lastName) => {
  console.log(name);
}


var obj = {
  name: 'Cris',
  lastName: 'Sirc',
  birthday: {
      day: 24,
      month: 8
  }
}

var obj2 = {
  name: "JAJAJA",
  ...obj

};


console.log(obj2);