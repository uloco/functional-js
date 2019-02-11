/**
 * @param {string} name
 * @param {string} sound
 */
const createAnimal = (name, sound) => {
  const mySound = `${name.toUpperCase()} makes "${sound}"!`;
  return {
    name,
    makeSound: () => console.log(mySound)
  };
};

const animal = createAnimal("Alex", "wouff");
animal.makeSound();

const createCat = (name, sound) => ({
  ...createAnimal(name, sound),
  makeSound: () => console.log("miaaaaau!")
});

const cat = createCat("Felix", "miaau");
cat.makeSound();
