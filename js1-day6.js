// LOOPS
 // we use for repetitive  things

 // for loops

for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let k = 5; k >= 0; k--){
    console.log(k)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'England']
const newArr = []
for(let i=0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log('numbers sum = ', sum)

const number2 = [1, 2, 3, 4, 5]
let arr2 = []
for(i = 0; i < number2.length; i++){
    arr2.push( numbers[i] ** 3)
}
console.log(arr2)

const capital = ['London', 'Ankara', 'Washington', 'Paris']
let arr3 = []
for(i = 0; i < capital.length; i++){
    arr3.push(capital[i].toUpperCase())
}
console.log(arr3) 

// while loop
let j = 0
while(j <= 10) {
    console.log(j)
    j++
}

// for of loop : use for arrays

const number6 = [1, 2, 3, 4, 5]
for (const num of numbers) {
    console.log('number6 ;', num)
}

const webLang = [
    'HTML',
    'CSS',
    'REACT',
    'JAVASCRIPT',
]

for (const tech of webLang) {
    console.log(tech.toLowerCase())
}

const footballClubs = ['PSV', 'PSG', 'BARCELONA', 'MILAN']
const newArr4 = []
for (const club of footballClubs) {
    newArr4.push(club.toLowerCase())
}
console.log(newArr4)

// break ; interrupt a loop
for(let i = 0; i <= 5; i++) {
    if( i==3) {
      break
    }
    console.log(i)
}

//continue : to skip a certain iterations
for (i = 0; i<= 6; i++){
    if (i == 4) {
        continue
    }
   console.log(i)
}