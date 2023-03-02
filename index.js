// // // //2. javascript console API
// // // //console.log("Hello World", 4 + 6, "second console");
// // // //console.warn("This is warning");
// // // //console.error("Thi is an error");

// // // //2. Ways to print in javascript
// // // //console.log("hello world");
// // // //alert("me");
// // // //doccument.write("this is document write");

// // // //3. JS variables
// // // var number1 =  34;
// // // var number2 = 36;
// // // console.log(number1 + number2);

// // // //4. Datatypes in javascript
// // // var str1 = "Aniket"; // both are correct
// // // var str2 = 'Shukla';  // correct also
// // // //number
// // // var num1 = 455;
// // // var num2 = 123.567;

// // // //Imp - objects:
// // // var marks = {ravi : 34, shubham : 45, Aniket : 50.89};
// // // console.log(num1,num2,marks);
// // // console.log(str1);

// // // //boolean
// // // var a =  true;
// // // var b = false;
// // // console.log(a,b);

// // // //undefined
// // // var und = undefined;
// // // console.log(und);
// // // var und;
// // // console.log(und);

// // // var n =  null;
// // // console.log(n);

// // // //Two types of dattatypes in JS
// // //     //1. Primitive data types : undefined, null, number, string, symbol
// // //     //2. reference data types : arrays and objects.


// // // var arr = [1,2,"apple",4,5];
// // // console.log(arr);
// // // console.log(arr[0]);   
// // // console.log(arr[5]);
// // // console.log(arr[2]);

// // // //4. operators in JS:

// // // var a = 20;
// // // var b = 3;  

// // // console.log("a + b : ", a + b);
// // // console.log("a / b : ", a / b); // % gives Dr and / gives quotient.
// // // console.log("a % b : ", a % b) // % gives Dr.

// // // //logical not:
// // // console.log(!false);
// // // console.log(!true);

// // // //functions:
// // // // DRY principle : do not repeat yourself.
// // // function avg(a,b)
// // // {
// // //     return (a + b) / 2;
// // // }

// // // c = avg(100,25);
// // // console.log(c);

// // // // Conditionals in JavaScript

// // // var age = 4;
// // // if(age > 18)
// // // {
// // //     console.log("u r not a kid");
// // // }
// // // else{
// // //     console.log("you are a kid");
// // // }

// // // // if-else ladder
// // // var age1 = 85;
// // // if(age1 < 2)
// // // {
// // //     console.log("kid");
// // // }else if(age1 > 2 && age1 < 18)
// // // {
// // //     console.log("teenagers");
// // // }else if(age1 > 18 && age1 < 100)
// // // {
// // //     console.log("grown up");
// // // }
// // // else{
// // //     console.log("Senior Citizen");
// // // }

// // // console.log(age1);

// // //5. For loop and forEach loop

// // //var arr = [1,2,3,4,5,6,7];
// // // arr.forEach(function(i)
// // // {
// // //     console.log(i);
// // // })

// // // arr.forEach(function(i)
// // // {
// // //     console.log(i);
// // // })

// // //7.while loop
// // // let j = 0; // has scope only under braces.
// // // while(j < 10)
// // // {
// // //     console.log(j);
// // //     j ++;
// // // }

// // // console.log("value of j outside while", j);

// // //Higher order function and call back function:

// // // function add(a) // higher order function
// // // {
// // //     console.log("inside higher order function");
// // // }

// // // var str = add(function() // call back function
// // // {
// // //     console.log("Something");
// // // })

// // // accepting and returning of any function is done by
// // //higher order function

// // // function add(a) // higher order function
// // // {
// // //     console.log("inside higher order function");
// // //     a();
// // //     return function()
// // //     {
// // //         console.log("Something");
// // //     }
// // // }

// // // var res = add(function (){
// // //     console.log("Something");
// // // })
// // // res();

// // //array in JS is just collection of data.

// // // var str = [2,3,4,"Aniket"];
// // // str[1] = "Apple";
// // // for(i = 0 ; i < 4 ; i ++)
// // // {
// // //     console.log(str[i]);
// // // }

// // // var menu = [1,2,3,4,5,6];
// // // var res = menu.indexOf("f2"); // left to right
// // // console.log(res);
// // // var res1 = menu.includes("f2"); // searching
// // // console.log(res1);
// // // // menu.lastindexof();

// // // menu.forEach(function(i){ //important, forEach is higher order function here
// // //     console.log(i);
// // // })

// // // menu.forEach(function(i,index,arr){ //important, forEach is higher order function here
// // //     console.log(i);
// // // })

// // // //menu.filter = to return new array satisfying condition.

// // // var res2 = menu.filter(function(i) // important
// // // {
// // //     return i > 2;
// // // }).filter(function(i)
// // // {
// // //     return i % 2 === 0;
// // // }).filter(function(i)
// // // {
// // //     return i > 10;
// // // })

// // // console.log(res2);


// // //Splice enables us to perform CRUD : create read update delete

// // var menu1 = ["f1","f2","f3","f4"];

// // function addFoodItems(index,foodItem) // adding f11 before f1
// // {
// //     menu1.splice(index,0,foodItem);
// //     return menu1;
// // }
// // var ans = addFoodItems(0,"f11");
// // ans.forEach(function(i)
// // {
// //     console.log(i);
// // })

// // function addingFoodItemAtLast(index1,foodItem1)
// // {
// //     menu1.splice(index1,0,foodItem1) Splice: means To Join things together,
// //                                      remove elements from an array or replace them.
// //splice changes the original array by removing, replacing, or adding values and returns the affected values.


// //     console.log(menu1);
// // }

// // addingFoodItemAtLast(menu1.length,"f44");

// // console.log(menu1);

// // function removingItemFromStarting(index2,foodItem2)
// // {
// //     menu1.splice(index2,1,foodItem2);
// //     console.log(menu1);
// // }

// // removingItemFromStarting(0,"f22");



// // // menu1.splice(start index,delete Count , insert)

// // //8.Functions on Array

// // let myArr = ["fan","camera",34,true,null];

// // cosnole.log(myArr.length);
// // myArr.pop(); // from last
// // console.log(myArr);
// // myArr.push("Aniket");
// // console.log(myArr);
// // myArr.shift(); //removes first elemnet from array.
// // console.log(myArr);
// // myArr.unshift("Shukla"); // adds element before first element
// // console.log(myArr);
// // myArr.sort(); // sorts after 

// // //String methods in javascript:

// let str = "apple is"; // space is also counted in string
// // console.log(str.length);
// // console.log(str[0]);
// // console.log(str[12]); //Undefined

// // console.log(str.lastIndexOf(" ")); // tells starting.
// // console.log(str.indexOf("apple"));

// //console.log(str.slice(0,3)); //The returned value of the slice method is an array of the values found between start and end excluding the value at end.
// //slice does not affect the original array at all

// // ans = str.replace("apple","orange"); //simply replaces.
// // console.log(ans,"--",str);

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());

//10.Events in JS
// function clicked()
// {
//     console.log("Button was clicked");
// }

console.log(5+5);




