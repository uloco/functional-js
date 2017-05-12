var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'cat'},
  {name: 'Ursula', species: 'fish'},
  {name: 'Jimmy', species: 'fish'}
]

// imperative
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i]);
  }
}

console.log(dogs);
console.log()

// declarative
var isDog = (animal) => animal.species === 'dog';
var dogs2 = animals.filter(isDog);
console.log(dogs2)

