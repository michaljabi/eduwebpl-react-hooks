/**
 * Task: write a function and immediately call it.
 * */

// --------------------- EXAMPLE 1 ---------------------

const myFn = () => {
  console.log(`My logic! calculation: ${10 + 90 * 7}`)
}

myFn()

// --------------------- EXAMPLE 2 ---------------------
// IIFE -> Immediately Invoked Function Expression
;(() => {
  console.log(`My logic! calculation: ${10 + 90 * 7}`)
})()

// --------------------- EXAMPLE 3 ---------------------
// we use it for async/await syntax with promises:
;(async () => {
  console.log(`My logic! calculation: ${10 + 90 * 7}`)
})()

// what async does?
function getNumber() {
  return 2000
}

async function getNumber2() {
  return 2000
}

// how to extract 2000?
// 1:
console.log(getNumber())
// 2:
;(async () => {
  console.log(await getNumber2())
})()
// 3: nowadays in Node.js and Browsers
console.log(await getNumber2())
// but we still need an async IIFE for useEffect() ⚠️

// CHECKOUT:
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
