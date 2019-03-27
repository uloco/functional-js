const R = require("ramda");
const { compose, map, apply, prepend, reduce } = R;
const { log } = console;

const user = {
  name: "Homer Simpson",
  shoppingCart: {
    name: "Peter's shopping cart",
    items: [
      { product: "Beer" },
      { product: "More beer" },
      { product: "Even more beer" }
    ]
  }
};

const getShoppingCart = R.prop("shoppingCart");
const getItems = R.prop("items");
const getProduct = R.prop("product");

const I = x => x;
const Identity = I;

// tap :: Function -> a -> a
const tap = f => x => {
  f(x);
  return x;
};

// // trace :: a -> a
// const trace1 = a => {
//   console.log(a);
//   return a;
// };
const trace = tap(log);

const labelLog = label => log.bind(console, label);

const traceLog = compose(
  tap,
  labelLog
);

// getCarItemNames :: User -> [Str]
const getCarItemNames = compose(
  // trace("getProduct -> "),
  map(getProduct),
  // trace("getItems -> "),
  getItems,
  // trace("getShoppingCart -> "),
  getShoppingCart
);

// purchaseList :: [Str]
const purchaseList = getCarItemNames(user);
// log(purchaseList);

// clogpose :: ((a -> b), ... (y -> z) -> (z -a) )
function clogpose(...fns) {
  const fnsComp = R.reduce(
    (acc, fn) => {
      return [].concat(acc, fn, traceLog);
    },
    [],
    fns
  );
  return compose(
    traceLog,
    ...fnsComp
  );
}

// Array :: arguments -> [arguments]
const Array = R.unapply(R.identity);
const paramsAsArray = (...fns) => fns;

// auto tracing a compose function
compose.clog = compose(
  apply(compose),
  prepend(traceLog),
  reduce((acc, fn) => acc.concat(fn, trace), []),
  paramsAsArray
);

// getCarItemNames :: User -> [Str]
const getCarItemNames2 = compose.clog(
  map(getProduct),
  getItems,
  getShoppingCart
);

getCarItemNames2(user);
