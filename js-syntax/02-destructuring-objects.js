// --------------------- EXAMPLE 1 ---------------------
const myUser = {
  name: "Mike",
  lastName: "Kowalsky",
  //age: 26,
  onChange() {},
}
// const name = myUser.name;

const { name: myName, lastName, age } = myUser

console.log(myName)
console.log(lastName)
console.log(age)

// --------------------- EXAMPLE 2 ---------------------
// when destructure props - show default values

function UserComponent({ name, lastName, age = 20, onChange = () => {} }) {
  onChange() // defensive programming
  return `User ${name} ${lastName} is ${age} age old`
}

console.log(UserComponent(myUser))

// CHECKOUT:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
