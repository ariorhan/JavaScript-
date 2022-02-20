 // Arrow Function
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

 function hello(firstName) {
     console.log(`Hello ${firstName}`)
 }
 hello('JavaScript')

 // 1.
 const helloFunctV1 = (firstName) => { console.log(`Hello ${firstName}`)}
 helloFunctV1('firstFunc')

// 2.
const helloFunctV2 = firstName => console.log(`Hello ${firstName}`) // I don't need brackets and curly brackets
helloFunctV2('secondFunc')

// 3. 
const helloFuncV3 = (firstName, lastName) =>
console.log(`Hello ${firstName}  ${lastName}`) // I don't need curly brackets

helloFuncV3('third', 'Func')
// 4.
const helloFuncV4 = (firstName, lastName) => {
    let info = `Hello ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4('fourth', 'Func')