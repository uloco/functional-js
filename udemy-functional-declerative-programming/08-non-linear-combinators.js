const R = require("ramda");
const compose = require("./utils/compose");
const getData = require("./data/users");

const I = x => x; // R.identity
const K = x => y => x; // R.always
const C = f => a => b => f(b)(a); // R.flip
const B = f => g => x => f(g(x)); // R.compose
const T = x => f => f(x); // Thrush, R.applyTo (reverse function call)
const D = f => x => g => y => f(x)(g(y));
const S = R.curry((f, g, x) => f(x)(g(x))); // Ramda converge nearly equivalent

// data :: [User]
const data = getData();
// T(data)(console.log); // eq: console.log(data)

// greeting :: Str -> Str
const greeting = R.concat("Greetings, ");

// nameArr :: Obj -> [Str]
// const nameArr = names => [
//   R.prop('first', name), R.prop('last', name)
// ]
const nameArr = x => S(B(R.prepend(R.prop("first")))(B(Array)(R.prop("last")));

// userGreeting
const userGreeting = user =>
  compose(
    greeting,
    R.join(" "),
    nameArr,
    R.prop("name")
  );

// // userGreeting
// const userGreeting = user =>
//   R.concat("Greetings, ")(
//     R.concat(user.name.first)(
//       R.concat("  ", user.name.last)
//     )
//   );

// predicate :: String -> User -> Bool
// const predicate = id => user => R.prop("id", user) === id;
// const predicate = id => user => R.equals(id)(R.prop("id", user));
// const predicate = id => user => D(R.equals)(id)(R.prop('id'))(user)
// const predicate = C(D(R.equals))(R.prop("id"));
const predicate = R.propEq("id");

// getUserId :: Str -> User
const getUserById = compose(
  R.head,
  T(data),
  R.filter,
  predicate
);

// main :: String -> String
const main = compose.log(userGreeting, getUserById);

main("59110bb43804b5a93712fdea");
