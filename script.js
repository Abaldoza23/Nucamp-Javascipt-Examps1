// Basic Function
function sayHi() {
    console.log('Hi')
}

sayHi(); // Calling a function

function saybye() {
    console.log('Bye')
}

saybye();

// Function Arguments

function add(a, b) {
    console.log(a)
    console.log(b)
    console.log(a + b)
}

add(1, 2)

function minus(a, b) {
    console.log(a)
    console.log(b)
    console.log(a - b)
}

minus(3, 2)

// Function Returns
function sum(a, b) {
    return a + b
    console.log('Will not run') // Console.log will not work since it is after return.  Return ends the function
}

const value = sum(1, 2)
console.log(value)

// Built in Functions
console.log('Im a function') // One of the most popular built in functions
