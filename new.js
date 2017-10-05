function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
  console.log('I say:', this.saying)
}

var crockford = new Person('SEMICOLONS!!!1')
crockford.talk()
