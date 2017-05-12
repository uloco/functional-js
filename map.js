var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Jimmy', species: 'fish'},
  {name: 'Harold', species: 'cat'},
  {name: 'Ursula', species: 'fish'}
];

// imperative
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);

// declarative
var names = animals.map((animal) => animal.name);
console.log(names);
