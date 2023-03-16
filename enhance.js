//Same Keys and Values ES2015
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName,
  }
}


//Computed Property Names ES2015
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

//Object Methods ES2015
const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

//createAnimal Function
function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }