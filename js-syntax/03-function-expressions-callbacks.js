// --------------------- EXAMPLE 1 ---------------------

const myFunctionExpression = function () {
  console.log(`Who will call me, to see result is: ${10 + 20 * 2}`)
}

// myFunctionExpression()

const sameButArrow = () => {
  console.log(`Who will call me, to see result is: ${10 + 20 * 2}`)
}

// sameButArrow()

// Arrow is always anonymous
// Arrow is always function expression

// --------------------- EXAMPLE 2 ---------------------

myLogic(() => {
  console.log("Now you don't see me 👻")
})

function myLogic(myCallback) {
  // myCallback()
}
