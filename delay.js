const R = require('ramda')

const { log } = console

// delay :: number -> (a -> b) -> 
const delay = R.flip(setTimeout)(3000);

delay(() => log('what'))

const delayedLog = R.compose(log, delay)
delayedLog('wtf')
