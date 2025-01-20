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

// switch(true){
//     case 10>20:
//         myAnswer = "red color";
//     break;
//     case 20<30:
//         myAnswer = "green color";
//     break;
//     case 50>20:
//         myAnswer = "black color";
//     break;
//     case 100==200:
//         myAnswer = "orange color";
//     break;
//     default:
//         myAnswer = "None of the above";
//         break;
// }

// Example - 2:

// let Name = prompt("Enter your Name");
// let Marks = prompt("Enter your Marks");

// switch(true){
//     case Marks>90 && Marks <= 100:
//         result= "Congratulations, You got First class";
//         break;

//         case Marks>80 && Marks <= 90:
//             result= "Congratulations, You got Second class";
//             break;

//             case Marks>70 && Marks<=80:
//                 result= "Congratulations, You got third class";
//                 break;
//                 case Marks>40 && Marks<=70:
//                     result= "Congratulations, You are passed";
//                     break;
//                     case Marks<40 :
//                         result= "Sorry, You are failed. Better luck next time!";
//                         break;
//                         default:
//                             result= "Please Enter your marks";
//                             break;
// };

// document.write(result);

//_____________________________________________________________

// Function:

// let a= Add(2,3);
 
// function Add(x,y){
//     document.write(x+y);
// }

//______________________________________________________________

// Scopes:
// 1.Global Scope: if we define the variables outside the function and we can use anywhere we can access it 
// var Apple = "red";
// let Orange = "Yellow";
// const Goa = "Green";

// function fruits(){
//     document.write(Apple);
//     document.write(Orange);
//     document.write(Goa);
// }
// fruits();

// 2.Function Scope: if we define the variables inside the function and access only within the function block
//  outside the function block we cannot access it.
// function Numeric(){
//     var x=7;
//     let y=27;
//     const z="Shalini";
//     document.write(x);
//     document.write(y);
//     document.write(z);
// }
// Numeric()

// 3.Block Scope: if we define within the block we can use only within the block we cannot access from outside the block.
// but only for 'var' variable we can access from outside the block also 
// function Sports(){

//     if(10<20){
//         var x=7;
//     let y=27;
//      const z="Shalini";
//      document.write(y);
//      document.write(z);
//     }
//     document.write(x);
// }
// Sports()

//______________________________________________________________________

//Function with return values:
// 1.Function Expression: A function is assigned to a variable is called function expression.
// var a = function Apple(){
//     document.write("Red in color");
// };

// a();

//2.Anonymous function: A function without name and it is assigned to a variable is called Anonymous function.
// var b = function(){
//     document.write("Thgis is a Anonumous function");
// }
// b();

// 3.function with parameters and Return values:
//ex-1:
// function score(a,b) {
//  return a+b +"<br>"
// }

// document.write(score(10,20))
// document.write(score(20,20))
//ex-2:
// function fruits(a,b){
//     return document.write("I like" + a + "and" + b);
// }
// fruits("Apple", "Grapes");

//ex-3:
// var userName = prompt("Please Enter your name")
// function guest(myFriend){
//     return document.write("Hello Welcome" + myFriend)
// }
// guest(userName)

//_____________________________________________________

// Methods:

// 1.Array Methods represents Array Data Types:
// (a)push:
// let Fruits = ["Pineapple", "Papaya", "Oranges"]

// Fruits.push("Banana", "Kiwi", 45)
// document.write(Fruits + "<br>");
// document.write(Fruits.length)

// (b)pop:
// let books = ["Hindi", "English", "Maths", "Physics", "Chemistry"]
// let Results = books.pop()
// document.write(books+ "<br>");
// document.write(Results)

// (c)shift():
// let state = ["Mumbai", "Delhi", "Hyderabad", "Andhra Pradesh"]
// state.shift()
// document.write(state)

// (d)unshift():
// let score = [23, 43, 44, "Mahesh", "Suresh"]
// score.unshift("Ganesh")
// document.write(score)

// (e)concat:
// let score = [23, 44, 32]
// let players = ["Amith", "Anand", "Arjun"]
// let newplayers = score.concat(players);
// document.write(newplayers);

// (e)join:
// let team = [10, 20, 30,"Anil", "Amit", "Anila"]
// // let myteam = team.join(""); // it will add the elements
// // let myteam = team.join("/"); // it will separate the elements with / or any other things also
// let myteam = team.join("****");
// document.write(myteam);

// (f)slice:
// let Team = ["Ganesh", "Sudheer", "Jagadeesh", 33, 54, 23, 65]
// let myTeam = Team.slice(0, 4);
// document.write(myTeam);

// (g)splice:
// let myNumnbers = [12, 23, 32, 43, 24, 54, 13]
// let myNewNumbers = myNumnbers.splice(0, 3) // remove the elements from index 0 to 2 values
// let myNewNumbers = myNumnbers.splice(0,4,"See something else here") // rep[lace with text mes from index 0 to 3 
// let myNewNumbers = myNumnbers.splice(4, 1, "See something else here") // remove only 4th index value
// let myNewNumbers = myNumnbers.splice(3, 3, "See something else here") // remove from index 4 to next 2 values
// let myNewNumbers = myNumnbers.splice(3,0, "Add values") // adds the string inplace of index 3 without removing anything
// let myNewNumbers = myNumnbers.splice(3, 1, "Add value") // remove index 3 value and add the string 
// document.write(myNumnbers)

// (h)indexof():
// let students = ["Ganesh", "Revathi", "Jagadeesh"]
// // document.write(students.indexOf("Revathi")) // if the element is present in the array it shows the index value otherwise it shows -1
// // document.write(students.indexOf("Anil"))

// var newStudent = students.indexOf("Sudheer")
// if(newStudent === -1 )
// {
// students.push("Sudheer")
// }
// document.write(students);

// (i)forEach():
// let scores = [20, 23, 22, 24, 25]
// let students = ["vani", "pooji", "swathi", "sravani", "Jyo"]
// students.forEach(function(item, index){
//     document.write(index +  1 +"." +item + "<br>")
// })

// scores.forEach(function(apple){
//     document.write(apple * 2 + "<br>")
// })

// Multi Dimensional Array:
// let students = ["Ganesh", "Sudheer", "Jagadeesh", "Swathi"]
// let scores= [
//     [
//         ["Anil", "Suresh", "Ramesh", "Nagesh"],
//         ["Vasu", "Venkatesh", "Satya", "Sai"]
//     ],
//     [10, 20, 30],
//     [11, 12, 13, 14, 15],
//     [23, 32, 25, 54, 45],
//     [54, 45, 34, 56, 87],
//     [47, 34, 35, 76, 12],
// ]
// // document.write(scores[2]); // one dimension
// // document.write(scores[2][3]); //two dimension
// document.write(scores[0][0][1]); //multidimension