//arrays in javascript 


const cars1 = ["Saab", "volvo", "bmw"] ; 

// an array is an object type designed to store data collections 
// elements an array is a list of values known as elements 
// ordered array elements are ordered based on index 
// zero indexed the first elements is at index 0 
// dynmaic size arrays can grow or shrink as elemtnsts are added or removed. 
// heterogenous arrays can store elemtsn of diffrent data types (numbers, strings, objectss and other arrays)  

// --

//However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

//The solution is an array!

//An array can hold many values under a single name, and you can access the values by referring to an index number.

// accessing elements 


//<p id="demo"></p>


const cars2 = ["Saab", "Volvo", "BMW"];
let car = cars[0]
document.getElementById("demo").innerHTML = cars[0];

// changing an array 

const cars3 = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel"

//toString to concert an array into an element 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// or 

const cars = ["Saab", "Volvo", "BMW"];

let text = cars;

// Array Properties and Methods

cars.length // returns the number of elemtns in an array 
cars.sort()  // orts the array 




// finding the min and the max 


/// nested arrays 

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}


// access nested arrays 


for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
    }
  }


