// SCOPE

// windows scope
a = 'JavaScript' // is a window scope this found anywhere
b = 10 
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b) // accessible 

// global scope
let c = 'JavaScript' // is a global scope it will be found anywhere in this file
let d = 10
function letsLearnGlobalLearn() {
    console.log(a, b) 
    if (true) {
        let c = 'Python'
        let d = 100
        console.log(c, d) 
    }
    console.log(c, d)
}
letsLearnGlobalLearn()
console.log('global scope;' , c, d) 

// local scope

let e = 'HTML'
let f = 10
function letsLearnLocalScope() {
    console.log(e,f)
    let value = false
    if (true) {
        let e = ' CSS '
        let f = 20
        let g = 30
        let h = 40
        value = !value
        console.log(e, f, g)
    }
    console.log(e, f, value)
}
letsLearnLocalScope()
console.log('local scope:' , e, f) 

// OBJECT

const person = {} // an empty object

const rectangle = {
    length: 20,
    width: 15
}
console.log(rectangle) // {length: 20, width: 15}

// getting values from an object
const person1 = {
    firstName: 'Orhan',
    lastName: 'ARI',
    age: 36,
    skills: [
        'HTML',
        'CSS',
        'JAVASCRIPT'
    ],
    getFullName: function() {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3569987451'
}


console.log(person1.firstName)
console.log(person1.lastName)

console.log(person1['firstName'])
console.log(person1['phone number'])

// Creating object methods