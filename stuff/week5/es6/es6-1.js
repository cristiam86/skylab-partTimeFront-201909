
function Super() {
  this.name = 'Cris';
  this.setName = (newName = 'ss') => {
      this.name = `My name is: 
      ${newName} 
      and what?`;
  }
}

var ob1 = new Super();

var ob2 = {
  name: 'David',
}

ob2.setName = ob1.setName;
ob2.setName(2);

console.log(ob2.name, ob1.name)

const name = "Cris";
const lastName = "Sirc";

const cris = { name, lastName }
console.log(cris)