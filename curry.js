let curry = require('lodash/curry')

let match = curry((what, str) => str.match(what))
let replace = curry((what, replacement, str) => str.replace(what, replacement))
let filter = curry((f, ary) => ary.filter(f))
let map = curry((f, ary) => ary.map(f))

console.log(match(/\s+/g, 'hello world'))
console.log(match(/\s+/g)('hello world'))

let hasSpaces = match(/\s+/g)

console.log(hasSpaces('hello world'))
console.log(hasSpaces('helloworld'))

console.log(filter(hasSpaces, ['tori_spelling', 'tori amos']))

let findSpaces = filter(hasSpaces)

console.log(findSpaces(['tori_spelling', 'tori amos']))

let replaceVowels = replace(/[aeiouy]/ig);

let censored = replaceVowels('*')

console.log(censored('Chocolate Rain'))
