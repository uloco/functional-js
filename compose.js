let R = require('ramda')


let reverse = R.curry(x => x.reverse())
let slice = R.curry(x => x.slice())
let backward = R.compose(reverse, slice)

let trace = R.curry(x => {
  console.log(x)
  return x
})

let shout = R.compose(R.map(R.toUpper), reverse, slice)
let shoutReverse = R.compose(R.map(R.toUpper), R.reverse)
let output1 = shout(['what', 'the', 'fuck'])
let output2 = shoutReverse(['hello', 'world'])

console.log(output1)
console.log(output2)

let addString = R.curry((x, y) => y.concat(x))

let scream = addString('!')
let c = scream('lol')
console.log(c)

let a = R.pipe(R.map(R.toUpper), R.append('!'))
let b = R.pipe(R.map(R.toUpper), scream)

console.log(a(['jo', 'was', 'geht']))
console.log(b(['jo', 'was', 'geht']))
