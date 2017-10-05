

let Car = (model = 'unkown') => {
  let speed = 0;

  let drive = () => {
    console.log(`A ${model} car is driving at the speed of ${speed}.`)
    speed += 1;
  }
  let stop = () => speed = 0;

  return { speed, drive, stop }
}

let car = Car();
let mercedes = Car('Mercedes')

car.drive()
mercedes.drive()

console.log(car.speed)
car.speed = 100

car.drive()
car.drive()
car.drive()
