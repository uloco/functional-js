//@flow
const R = require("ramda");
const { log } = console;
// combinator:  pure function that does not have any free variables
// free variables: variable that is not explicitly passed in as a paramter

// no combinator
let c = "!";
function freeVars(a) {
  const b = "Vars is innocent";
  return `${a}, ${b}${c}`;
}

log(freeVars("Help him!"));

// const compose = (f, g) => {
//   return (x) => f(g(x)
// }

// iterative map implementation
const mapI = (fn, list) => {
  const rv = [];
  for (let i = 0; i < list.length; i++) {
    rv[i] = fn(list[i]);
  }
  return rv;
};

log(mapI(x => x + 1, [1, 2, 3]));

// recursive map implementation as combinator (no free variables)
const mapR = (fn, list) => {
  if (list.length) {
    // const [x, ...ys] = list
    // return [fn(x), ...mapR(fn, ys)];
    return [fn(list[0]), ...mapR(fn, list.slice(1))];
  }
  return [];
};
const kaplow = x => x + 1;
log(mapR(kaplow, [1, 1, 1]));

// recursive map implementation with dependencies to head / tail (no combinator)
const tail = ([x, ...xs]) => xs;
const head = ([x, ...xs]) => x;

const mapR2 = (fn, list) =>
  list.length ? [fn(head(list)), ...mapR(fn, tail(list))] : [];

log(mapR2(kaplow, [0, 0, 0, 0]));
