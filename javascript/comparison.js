const num = 100 // assignment

// == is for unstrict comparison, will resolve truthy if the values are the same regardless of type
if (100 == "100") {
    console.log(true) 
} else {
    console.log(false)
} // logs "true"


// === is for strict comparison, will only resolve truthy if the types and values are the same
if (100 === "100") {
    console.log(true)
} else {
    console.log(false)
} // logs "false"


// greater than or equal to
if (100 >= 10) {
    console.log(true)
} else {
    console.log(false)
} // logs "true"

// less than or equal to
if (100 <= 10) {
    console.log(true)
} else {
    console.log(false)
} // logs "false"





if (true && true) {
    console.log(true)
} else {
    console.log(false)
} // logs "true"

if (true && false) {
    console.log(true)
} else {
    console.log(false)
} // logs "false"

if (true || false) {
    console.log(true)
} else {
    console.log(false)
} // logs "true"

if (false || false) {
    console.log(true)
} else {
    console.log(false)
} // logs "false"