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

const person2 = {
    firstName1: 'Orhan',
    lastName1: 'ARI',
    age1: 36,
    getFullName1: function(){
        return `${this.firstName1} ${this.lastName1}`
    }
}

console.log('FullName= ', person2.getFullName1())

// Setting new key for an object
// an object is a mutable data structure 

const person3 = {
    firstName3: 'Yaman',
    lastName3: 'ARI',
    age: 7,
    skills3: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
      ],
    getFullName2: function() {
        return `${this.firstName3} ${this.lastName3}`
    }
}

person3.firstName3 = ' Mahmut'
person3.lastName3 = 'CICEK'
person3.skills3.push('Saas')
person3.title = 'Student'
console.log(person3.getFullName2())

person3.getPersonInfo = function(){
    let skillsWithoutLastSkill = this.skills3
    .splice(0, this.skills3.length - 1)
    .join(', ')
    let lastSkill = this.skills3.splice(this.skills3.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName2()
    let statement = `${fullName} is a ${this.title}.\nHe teaches ${skills}`
    return statement
}

console.log(person3)
console.log(person3.getPersonInfo())

// Arrays of objects
let kitten1 = {
    name: 'Fluffy',
    weeksOld: 2,
}

let kitten2 = {
    name: 'Tekir',
    weeksOld: 3,
}

let kitten3 = {
    name: 'Garfield',
    weeksOld: 10,
}

let kittens = [kitten1, kitten2, kitten3]
console.log(kittens)

function isYoungerThan3Weeks(kitten){
    return kitten.weeksOld <= 3;
}

console.log(kittens.filter(isYoungerThan3Weeks))

// Object built in methods
//Object.keys - Object.values

let footballClubs = {
    chelsea_fc: "England",
    fc_barcelona: "Spain",
    ac_milan: "Italy",
}

console.log(Object.keys(footballClubs))
console.log(Object.values(footballClubs))