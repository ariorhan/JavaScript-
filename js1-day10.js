// SET
// set can only contains unique elements.

const companies = new Set()
console.log(companies)  //empty set

const languages = [
    'English',
    'French',
    'Spanish',
    'English',
    'Spanish',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)  // create a set from an array

const companies1 = new Set()
console.log(companies1.size) // 0

companies1.add('Google')    // add an element
companies1.add('Facebook')
companies1.add('Apple')
console.log(companies1.size)
console.log(companies1)

companies1.delete('Google')  // delete an element
console.log(companies1)

console.log(companies1.has('Facebook')) // checking an element in the set

// How to use set
const languages2 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages2)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    const filteredLang = languages2.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)

  // find unique item in an array
  const numbers = [1, 2, 3, 4, 5, 4, 1, 3, 6, 9, 8, 9]
  const setOfNumbers = new Set(numbers)
  console.log(setOfNumbers)

  let a = [1, 2, 3, 4, 5]  // union of sets
  let b = [1, 6, 9, 11]
  let c = [...a, ...b]
   
  let C = new Set(c)
  console.log('union', C)

  // Creating an Map from Array
  countries = [ 
      ['Finland', 'Helsinki'],
      ['Sweden', 'Stockholm'],
      ['Norway', 'Oslo'],
  ]
  const countriesMap = new Map(countries)
  console.log(countriesMap)
  console.log(countriesMap.size)

  countriesMap.set('Turkey', 'Ankara') // adding values to map
  console.log(countriesMap)

  console.log(countriesMap.get('Turkey')) // getting a value

  console.log(countriesMap.has('USA')) // checking a value

  for (const country of countriesMap) {
      console.log(country)
  }                                     // getting all values from map using loop