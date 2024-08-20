// --------------------- EXAMPLE 1 ---------------------

const car = {
  make: "Audi",
  model: "A6",
  engine: "2l",
  engineType: "diesel",
}

console.log(car)

const newCar = { ...car, model: "TT" }

console.log(newCar)

console.log(newCar === car)

// --------------------- EXAMPLE 2 ---------------------
const fruits = ["apple", "banana", "cherry"]

const moreFruits = [...fruits, "mango"]

console.log(moreFruits)

console.log(moreFruits === fruits)
