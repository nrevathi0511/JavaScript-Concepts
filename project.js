// External JS:

// alert ("Hellow Everyone");
//________________________________

//Variables:

// Var:

// Variables in JS:

// var bunty = "Playing"
// console.log(bunty);

// var bunty = "Singing"
// console.log(bunty);

// Let:

// let school = "LKG"
// console.log(school);

// // let school = "UKG"

// school = "UKG"
// console.log(school);

// const:

// const ground = "Stadium"
// console.log(ground)

// // const ground = "something"

// // ground = "something"
// // console.log(ground);

//___________________________________________

// Data Types:

// 1. Primitive DataTypes:
//String datatype:

// var a = "this is a text message"
// console.log(a);

// we can display in browser also below examples are we can saw only in console not in the browser:

//document.write("This is text message </br>");

// Number:
// console.log(10,20,30);
// document.write(21342423)

//boolean:

// test = 10 > 20
// console.log(test);

// Null:

// let testView = null;
// console.log(testView)

// Udefined:
// let apple
// console.log(apple) 

// 2. Complex DataTypes:


// Array:
// let fruits = ["apple", "orange", 55, {name : "Shiva"}]
// console.log(fruits);

// Object:
// const container = {
//     name: "Apple",
//     price: 10,
//     quantity: 10
// }
// console.log(container);

// To find the which dataType it is
// console.log(typeof apple)

// To find Array datatype when we get true in console then it is a array datatype
// console.log(Array.isArray(fruits))

//________________________________________________________

// Operators:

// 1.Arithmetic operators:

// let a = 10;
// a++
// a--
// let b = 20;

// document.write("Result:", a+b); // (a)Addition
// document.write("Result:", a-b)  // (b)Subtraction
// document.write("Result:", a*b)  // (c)Multiplication
// document.write("Result:", a/b)  // (d)division
// document.write("Result:", a%b)  // (e)Modulus
// document.write("Result:", a**b)  // (f)Exponentiation
// document.write("Result:", a++); // (g)Increment
// document.write("Result:", a--); // (h)Decrement

//___________________________________________________________

// Control flow & Conditional Statements:

// (a)if:
// var game = "cricket";
// let captain = "Dhoni";
// if(game === "cricket"){
//     document.write("MAtch captain is", captain);
// }

// (b)if-else:
// var game = "Cricket";
// let captain = "Dhoni";
// if(game === "cricket"){
//     document.write("MAtch captain is", captain);
// }else{
//     document.write("No match");
// }

// (c)if else-if:
// var game = "cricket";
// let captain = "Dhoni";
// const tennis = "Sania";
// if(game === "Cricket"){
//     document.write("Match captain is", captain);
// }else if(tennis === "Sania"){
//     document.write("Correct")
// }else{
//     document.write("No match");
// }

//___________________________________________________________________

// 4. Logical Operators:
// (a)Logical NOT '!'  (b) Logical '&&'   (c)Logical '||'

// '&&' Operator:
// var x = 100;
// var y = 50;
// var z = 200;

// if(x==y && y<z){
//     document.write("Condition is true");
// }else{
//     document.write("Condition is false");
// }

// '&&' Operator:
// var x = 100;
// var y = 50;
// var z = 200;

// if(x!==y && y<z){
//     document.write("Condition is true");
// }else{
//     document.write("Condition is false");
// }

// '||' Operator:
// var x = 100;
// var y = 50;
// var z = 200;

// if(x>z || z>y){
//     document.write("Condition is true");
// }else{
//     document.write("Condition is false");
// } 

//_____________________________________________________

// 4. Ternary Operator:

// var x = 100;
// var y = 50;

// x<y ? document.write("Statement true") : document.write("statement false");

//______________________________________________________

// Dialogue Box:
// 1. alert: if the condition is satisfied then only the alert will be displayed
// alert("This is an alert");
//ex-1: 
// if(10<20){
//     alert("10 is less than 20");
// }
//ex-2: 
// if (10 == 20) {
//     alert("10 is less than 20");
// }

// 2. prompt:
// prompt("Please Enter your Name");

// 3. confirm:
// confirm("Are you sure");

//example for prompt and confirm:

// var woman = confirm("Are you a woman");

// if(woman){
//     let name = prompt("Please enter your name");

//     document.write("Hello Madam" + name);
// }else{
//     let name = prompt("Please Enter your name");
//     document.write("Hello Sir" + name);
// }

//_____________________________________________________

// Type Conversion:

// var a = "32";
// var b = 23;

// var c = parseInt(a);
// document.write(typeof c);

// var d = String(b);
// document.write(typeof d);

//__________________________________________________________

//Switch Case:

switch(true){
    case 10>20:
        myAnswer = "red color";
    break;
    case 20<30:
        myAnswer = "green color";
    break;
    case 50>20:
        myAnswer = "black color";
    break;
    case 100==200:
        myAnswer = "orange color";
    break;
    default:
        myAnswer = "None of the above";
        break;
}