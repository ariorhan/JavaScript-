// empty array
const arr = [];
console.log(arr)

// how to create an array with values

const numbers = [1, 2, 3, 4, 3.14, 2.71]
const cities = ['London', 'Sheffield', 'Newcastle', 'Manchester']
const arr2 = [
    'Orhan',
    36,
    true,
    { country: 'UK', city: 'London'},
    { skills: ['HTML', 'CSS', 'JS']}
] // arr2 containing different data types

console.log(numbers.length) 
console.log (arr2)

// Split

let country = 'England'
const charsInCountry = country.split('')

console.log(charsInCountry)

let text = 'I miss you so much'
const words = text.split(' ') // attention
console.log(words)

let footballClubs = 'Chelsea, Hull City, Arsenal, Liverpool'
const clubs = footballClubs.split(',')
console.log(clubs)

// Using Index

const veggies = ['tomato', 'carrot', 'onion', 'potato']
let lastVeg = veggies[veggies.length - 1]
console.log('last index element is ' + lastVeg)

let firstVeg = veggies[0]
console.log(firstVeg)

// Modifying array element
const numbers2 = [1, 2, 3, 4, 5, 6]
numbers2[0] = 20  // changing 1 to 20
numbers2[1] = 30

console.log(numbers2)

// Methods to manipulate array

// fill
const arr3 = Array()
console.log('arr3 = ', arr3)

const sixYvalues = Array(6).fill('Y')
console.log(sixYvalues)

// concat

const first = [1, 2, 3]
const second = [4, 5, 6]
const third = first.concat(second)
console.log(third)

// array length
const numbers3 = [1, 2, 3, 4, 5, 6]
console.log(numbers3.length)

console.log(numbers.indexOf(3)) // index = 2

// check items in a list
const fruits = ['banana', 'orange', 'mango']
let index = fruits.indexOf('banana')

if (index != -1) {
    console.log('This fruit does exist in the array')
 } else {
     console.log('This fruit does not exist in the array')
 }

 // lastIndexOf
 const numbers4 = [1, 2, 3, 4, 5, 3, 2, 1]
 
 console.log(numbers4.lastIndexOf(2)) // 6
 console.log(numbers4.lastIndexOf(6)) // -1
 console.log(numbers4.lastIndexOf(5)) // 4

 // Checking array

 const veggies1 = ['tomato', 'onion', 'cabbage']
 console.log(Array.isArray(veggies1)) // true

 //converting array to string
 
 console.log(veggies1.toString())

 // joining

 const names1 = ['Orhan', 'Ari', 'Yaman', 'Ari']
 console.log(names1.join()) // default= Orhan,Ari,Yaman,Ari
 console.log(names1.join(' ')) // Orhan Ari Yaman Ari
 console.log(names1.join(' ** ')) // Orhan ** Ari ** Yaman ** Ari

 // Slice 
 const numbers5 = [1, 2, 3, 4, 5, 6]
 console.log(numbers5.slice())  // it copies all item
 console.log(numbers5.slice(0)) // it copies all item
 console.log(numbers5.slice(1,4)) // index[4] doesn't include

 // splice

 const numbers6 = [1, 2, 3, 4, 5, 6];
 console.log(numbers6.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items