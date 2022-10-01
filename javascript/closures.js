var x = 100
function logX() {
    console.log(x) // variable declared outside the function is accessable within
}

function logY() {
    var y = 200 // variable declared within the function is accessable inside, but inaccessable from the outside
    console.log(y)
}

function add() {
    console.log(x + y) // uses variable y, which is outside the add function's scope
}

logX() // works fine
logY() // works fine
add() // throws error because the variable y is within a closure, it is not in the scope of the add function