'use strict'

var memoize = function(f) {
  var cache = {};

  return function(...args) {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    let a = args.toString()
    console.log(arguments)
    return cache[arg_str];
  };
};

let add = (x, y) => x + y

let betterAdd = memoize(add)

betterAdd(3, 4)
betterAdd(5, 6)
betterAdd(3, 4)

console.log(memoize.cache)
