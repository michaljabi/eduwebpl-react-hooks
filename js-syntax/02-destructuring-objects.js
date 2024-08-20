// --------------------- EXAMPLE 1 ---------------------
const myUser = {
  name: "Mike",
  lastName: "Kowalsky",
  //age: 26,
}

const { name, lastName, age } = myUser

console.log(name)
console.log(lastName)
console.log(age)

// --------------------- EXAMPLE 2 ---------------------
// when destructure props - show default values

function UserComponent({ name, lastName, age = 20, onChange = () => {} }) {
  onChange() // defensive programming
  return `User ${name} ${lastName} is ${age} age old`
}

console.log(UserComponent(myUser))
