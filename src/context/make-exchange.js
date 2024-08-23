function randomizeArray(arr) {
  const baseArr = [...arr]
  const randomized = []
  const idx = Math.floor(Math.random() * 2)
  const actions = ["shift", "pop"]
  while (baseArr.length > 0) {
    randomized.push(baseArr[actions[idx]]())
  }
  return randomized
}

export function makeExchange(listOfPeople = []) {
  if (listOfPeople.length < 2) {
    return []
  }
  const listOfPairs = []
  const randomizedListOfPeople = randomizeArray(listOfPeople)

  let previous = undefined
  const lastOne = randomizedListOfPeople.at(-1)
  for (const person of randomizedListOfPeople) {
    if (previous) {
      listOfPairs.push([person, previous])
      previous = person
      continue
    }
    previous = person
    listOfPairs.push([person, lastOne])
  }

  return listOfPairs
}
