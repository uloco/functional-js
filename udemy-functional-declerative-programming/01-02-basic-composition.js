//@flow
const R = require("ramda");
const { compose, add, prop } = R;
const { log } = console;

const user1 = { name: "Umut", email: "uloco@schiefewelt.de" };

const sayHello = toWhom => `Hello ${toWhom}!`;
// const getName = user => user.name;
const getName = prop("name");

const greeting = user => {
  return sayHello(getName(user));
};

const greets = compose(
  sayHello,
  getName
);

// identical
console.log(greeting(user1));
console.log(greets(user1));

const twentyThree = add(10, 13);
const addTen = add(10);
const twoThree = addTen(13);

console.log(twentyThree === twoThree);
