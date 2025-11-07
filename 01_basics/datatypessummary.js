// Primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigIn

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //true

const bigNumber = 34567890123456789n
 
//Non primitive (reference type)
//Array, Objecs, Functions
const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
    name: "aastha",
    age: 18,
}

const myFunction = function(){
    console.log("hello world");
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myName = "aastha"