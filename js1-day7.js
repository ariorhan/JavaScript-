// FUNCTIONS

// declaration
function functionName() {
    //code goes here
}
functionName() //calling function

// function without parameters
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

square(4)

function fullName(){
    let firstName = ' Orhan '
    let lastName = 'ARI'
    console.log(firstName + lastName)
}

fullName()

// Function Returning Value
function addTwoNumbers() {
    let numOne = 4
    let numTwo = 6
    let totalNumber = numOne + numTwo
    return totalNumber
}
addTwoNumbers() // it doesn't write an answer to console  
console.log(addTwoNumbers())

// Function with a parameter

function areaOfSquare(a) {
    let area = a * a
    return area
}

console.log(areaOfSquare(9))

// Function with two parameters

function multiplyTwoNumbers(num1, num2) {
    let total = num1 * num2
    return total
}

console.log(multiplyTwoNumbers(9,8))

// Function with many parameters

function sumArrayValues(arr){
    let sum = 0;
    for (let i =0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers))

// Unlimited number of parameters in regular function 

function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 5, 6, 8, 10))
console.log(sumAllNums(10, 20, 30))