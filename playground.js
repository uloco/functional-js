const R = require('ramda')
const { map } = R

// log :: String -> (a -> String)
const log = (x) => () => console.log(x)

// timeout :: Number -> (a -> b) -> c
const timeout = R.flip(setTimeout)

// slow :: (a -> a) -> a
const slow = timeout(3000)
log('normal')()
slow(log('foo'))

const saySlow = R.compose(slow, log)
saySlow('Hello.')
