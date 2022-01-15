//Higher Order Function
//Callback
const callback = (n) => {
    return n ** 2
}

//function take other function as a callback
function cube(callback,n) {
    return callback(n) * n
}

console.log('callback function works', callback(6))
console.log('cube function uses callback function as a parameter',cube(callback,6))

// returning function

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m +t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

// forEach method
/*const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers)) */

const numbers = [1, 2, 3, 4] // The above example can be simplified

const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))

// setInterval

function sayHello() {
    console.log('Hello')
}
// FUNCTIONAL PROGRAMMING
 // forEach

 let sum = 0;
 const numbers1 = [1, 2, 3, 4, 5];
 numbers1.forEach(num => console.log(num))
 console.log(sum)

 let sum1 = 0;
 const numbers2 = [1, 2, 3, 4, 5];
 numbers2.forEach(num => console.log(sum1 += num))
 //console.log(sum1)

 const countries = ["Finland", "Australia", "Canada", "USA"]
 countries.forEach((country) => console.log(country.toUpperCase()))