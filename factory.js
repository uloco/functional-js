// imperative
class Dog {
  constructor() {
    this.sound = 'woof'
  }
  talk() {
    console.log(this.sound)
  }
}

let d = new Dog()
d.talk()

// declarative - better because no 'this' and 'new'
const Dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

let dog = Dog()
dog.talk()
