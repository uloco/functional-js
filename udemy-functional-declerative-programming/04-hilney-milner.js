//@flow
const { log } = console;

const R = require("ramda");
const { compose, concat } = R;

function HayStack(needle) {
  this.needle = R.toUpper(needle);
}

// const haystack = needle = new HayStack(needle);
// haystack :: String -> HayStack
const haystack = R.construct(HayStack);

// getNeedle :: HayStack -> String
const getNeedle = R.prop("needle");

// concatTo :: String -> String
const concatTo = R.flip(concat);

// const whatWeFound = what => `Hay Hey, we found a ${what} in a haystack!`

// whatWeFound :: String -> String
const whatWeFound = compose(
  concat("Hay Hey, we found a "),
  concatTo(" in a haystack!")
);
log(whatWeFound("diamond"));

// needleFromHaystack :: HayStack -> String
const needleFromHaystack = compose(
  whatWeFound,
  getNeedle
);

// tediousWork :: String -> String
const tediousWork = compose(
  needleFromHaystack,
  haystack
);

// map :: (a -> b) -> [a] -> [b]
// map :: Functor f => (a -> b) -> f a -> f b
const map = R.map;

// into HayStacks :: [String] -> [HayStack]
const intoHayStracks = map(haystack);

log(map(haystack)(["diamond", "old coin", "my wallet", "hay"]));

// greaterThan50 :: Number -> Bool
const greaterThan50 = R.flip(R.lt)(50);

// someFunc :: (a -> Bool) -> [a] -> [a]
const someFunc = aToBool => as => R.filter(aToBool, as);

// filter :: Filterable f => (a -> Boolean) -> f a -> f a
log(R.filter(R.lt(10), { a: 11, b: 20, c: 5 }));
