// --------------------- EXAMPLE 1 ---------------------

const fruits = ["apple", "banana", "mango", "cherry"]

// take out 2nd element from array:
const [, banana] = fruits

console.log(banana)

// --------------------- EXAMPLE 2 ---------------------

// function that returns 2 elements (actually its one, but we can extract them as two):
function return2Things() {
  // eslint-disable-next-line no-unused-vars
  return [10, (value) => {}]
}

// take out 1st and 2nd element from array returned form function
const [count, setCount] = return2Things()

console.log(count)
console.log(setCount)

setCount(12)
