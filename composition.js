// imperative

// How do we make a MurderRobotDog

class Animal {
  poop() { console.log('poop') }
}

class Dog extends Animal {
  bark() { console.log('bark') }
}

class Cat extends Animal {
  meow() { console.log('meow') }
}

class Robot {
  drive() {console.log('drive')}
}

class CleaningRobot extends Robot {
  clean() {console.log('clean')}
}

class MurderRobot extends Robot {
  kill() {console.log('kill')}
}

// dog = pooper + barker
// cat = pooper + meower
// muderrobotdog = pooper + killer + barker

// declarative
const barker = (state) => ({
  bark: () => console.log('woof, I am ' + state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

const killer = (state) => ({
  kill: () => console.log('killed an animal')
})

barker({name: 'karo'}).bark()

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  )
}

let myMurderRobotDog = fdmurderRobotDog('sammy')

myMurderRobotDog.kill();
myMurderRobotDog.drive();
myMurderRobotDog.bark();
