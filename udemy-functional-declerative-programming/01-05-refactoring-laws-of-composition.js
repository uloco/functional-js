const R = require("ramda");
const { log } = console;

log(21 === 21); // true
log("foo" === "foo"); // true
log([1, 2, 3] !== [1, 2, 3]); // true
log(R.equals([1, 2, 3], [1, 2, 3])); // true
log(R.equals([1, 2, 3, [1, 2, 3, [1, 2, 3]]], [1, 2, 3, [1, 2, 3, [1, 2, 3]]])); // true
log(R.equals([1, 2, 3, [1, 2, 3, [1, 2, 3]]], [1, 2, 3, [1, 2, 3, [1, 2, 5]]])); // false

function Num(a) {
  this.value = a;
}

Num.prototype.equals = function(b) {
  return this.value === b.value;
};
const num = R.construct(Num);
log(R.equals(num(10), num(10))); // true

// addition :: Number -> Number -> Number
const addition = R.curry((x, y) => x + y);
addition.identity = 0;
log(addition(10)(addition.identity)); // 10

// mult :: Number -> Number -> Number
const mult = R.curry((x, y) => x * y);
mult.identity = 1;
log(mult(mult.identity)(10)); // 10

// division :: Number -> Number -> Number
const division = R.curry((n, d) => n / d);
division.rightIdentity = 1;
log(division(12)(division.rightIdentity));

// association
// (a * b) * c = a * (b * c)
log(addition(10)(addition(20)(40)) === addition(addition(10)(20))(40));
const sums1 = R.compose(
  addition(10),
  addition(20),
  addition(40),
  addition(50)
);
const sums2 = R.compose(
  addition(10),
  R.compose(
    addition(20),
    addition(40),
    addition(50)
  )
);

log(sums1(10) === sums2(10)); // true
