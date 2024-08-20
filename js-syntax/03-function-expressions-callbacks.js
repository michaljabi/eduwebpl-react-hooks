// --------------------- EXAMPLE 1 ---------------------

const myFunctionExpression = function () {
  console.log(`Who will call me, to see result is: ${10 + 20 * 2}`)
}

myFunctionExpression()

const sameButArrow = () => {
  console.log(`Who will call me, to see result is: ${10 + 20 * 2}`)
}

//sameButArrow()
//sameButArrow()

// Arrow is always anonymous
// Arrow is always function expression

// --------------------- EXAMPLE 2 ---------------------

myLogic(() => {
  console.log("Now you don't see me 👻")
})

function myLogic(myCallback) {
  myCallback()
  myCallback()
}

// CHECKOUT:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
