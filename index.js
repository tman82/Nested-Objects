
// Print to console

let print = (value) => {
  console.log(value)
}

// Array of beings
let beings = [
  {name: 'Spot', species: 'Animal'},
  {name: 'Henry', species: 'Human'},
  {name: 'Tokkarr', species: 'Alien'},
  {name: 'Misty', species: 'Animal'}
]

// Collect animals from array
let getAnimals = (arr) => {
  let animalAdded = []

  if(Array.isArray(arr) === false) {
    console.log('Please enter an array.')
  }
  arr.forEach((item) => {
    for(key in item) {
      if(item[key] === 'Animal') {
        animalAdded.push(item)
      }
    }
  })
  return animalAdded
}


// Collect animal names from array
let getAnimalsName = (arr) => {
  let animalNames = []
  if(Array.isArray(arr) === false) {
    return 'Please enter an array.'
  }
  arr.forEach((item) => {
    for(var prop in item) {
      if(prop === 'name') {
        animalNames.push(item[prop])
      }
    }
  })
  return animalNames
}


// Print animals
print(getAnimals(beings))

// Print animal names
print(getAnimalsName(beings))
