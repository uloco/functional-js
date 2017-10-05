function talk() {
  console.log(this.sound)
}

let animal = {
  talk
}

let dog = {
  sound: 'woof!'
}

let prarieDog = {
  howl: function () {
    console.log(this.sound.toUpperCase())
  }
}

Object.setPrototypeOf(dog, animal)

animal.talk = function () {
  console.log('i am a little teapot')
}
dog.talk()
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()
