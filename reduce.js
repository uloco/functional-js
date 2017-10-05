var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 234},
  {amount: 235}
]

// imperative
var totalAmount = 0
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

console.log(totalAmount)

// declarative
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
totalAmount
console.log(totalAmount)
