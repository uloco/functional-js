import fs from 'fs';

//out should be
var out = {
  'mark johannson': [
    {name: 'waffle iron', price: '80', quantity: '2'},
    {name: 'blender', price: '80', quantity: '2'},
    {name: 'knife', price: '80', quantity: '2'}
  ]

}


// imperative
var output = fs.readFileSync('reduce2.txt', 'utf-8').split('\n')

var orders = {}

for (var i = 0; i < output.length; i++) {
  var line = output[i].split(',')
  var person = line[0]
  var name = line[1]
  var price = line[2]
  var quantity = line[3]

  if (orders.hasOwnProperty(person)) {
    orders[person].push({name, price, quantity})
  } else {
    orders[person] = []
  }
}

// console.log(orders)

// declarative
var output = fs.readFileSync('reduce2.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(line => line.split(','))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log(output)
