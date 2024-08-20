// --------------------- EXAMPLE 1 ---------------------

const fruits = ["apple", "banana", "mango", "cherry"]

// take out 2nd element from array:
const [, , , banana] = fruits

console.log(banana)

// --------------------- EXAMPLE 2 ---------------------

// function that returns 2 elements (actually its one, but we can extract them as two):
function return2Things() {
  // eslint-disable-next-line no-unused-vars
  return [10, (value) => {}]
}

// take out 1st and 2nd element from array returned form function
const [count, setCountz] = return2Things()

console.log(count)
console.log(setCountz)

setCountz(12)

// CHECKOUT:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
