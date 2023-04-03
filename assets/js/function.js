// type of function in js
// 1. Pre
// 2. User
// 1. Variable Function
// 1. Anonumas Function
// 2. Arrow Function
// 2. Genaral Funaction

// function functionName(){
//     console.log("this is test function");
// }
// functionName();

// let test = function(name){
//     console.log("Hello My name is "+name);
// }

// test("Maruf");

// let test = (name,age) => {
//     console.log("Hello My name is "+name+" and i am "+age+" years old");
// }

// test("Hridoy",25);

// let arr = ["a","b","c"];
// arr[2]

// let obj = {
//     name : "maruf",
//     age : 25,
//     gender: "Male",
//     isMarrid: false
// }

// console.log(obj.name);

// JSON = JavaScript Object Notation 
// Data Formate for Exchanging data between system running on different technology
// Can be used with most of language like pythone php .net etc. and obiously JS
// Has similarity with JavaScript Object
// Propertis are wrapped with "";
// JavaScript Object Example: {name:"rahim",age:25}
//JSON Data : {"name":"Rahim","age":25}

// let obj = {
//     name:"Antar Majumder",
//     dob:"25-06-2023",
//     age:25,
//     isMarrid:false,
//     phone:10.5,
//     action:true
// }
// test = JSON.stringify(obj);
// console.log(test);
// test2 = JSON.parse(test);
// console.log(test2);

// JSON Data Type
// 1. String
// 2. Number
// 3. object (JSON Object);
// 4. Array
// 5. Boolen
// 6. Null;

// var person = {
//     name: "Rahim", //String
//     age: 25, //Number
//     married: false, // boolen
//     homeTown: "Dhaka", //String
//     dob: "1995-02-12", //date
//     testNull : null, //null
//     testUndefine : undefined,
//     greet: function(){
//         console.log("Hello my name is "+this.name);
//     },
//     testList : ['rakib','santo','mims'],
//     testObj : {
//         name: "Child",
//         age: 25,
//         gender : "Female"
//     }
// }
// let Jsn_data = JSON.stringify(person);
// console.log(Jsn_data);
// XHR
// XMLHttpRequest();

// Function
// Regular Function
// Function Expression / annonumas Function
// Arrow Function / Lemda function

// array.forEach(element => {

// });
// array.map(value,index,array){

// }
// for (const iterator of object) {

// }
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }
// }

// AJAX  = Asyncronous JavaScript And XML
// 1. Get Data Without Loading the Page
// 2. Asyncronous Programming
// XHR -> XML HTTP Request
// let date = new Date();
// let test = document.querySelector('#test');
// test.addEventListener('click', testFun);
// function testFun() {
    // let xhr = new XMLHttpRequest();
    // console.log(xhr);
    // xhr.open('get', './assets/js/main.json', true);
    // xhr.onload = function () {
        // if (this.status === 200) {
            // console.log(this.response);
            // jS_Obj = JSON.parse(xhr.response);
            // console.log(jS_Obj);

        // }
        // console.log(xhr.responseText);
    // }
    // xhr.send();
// }
// 0 Request not init
// 1 Server Connection Established
// 2 Request Receved
// 3 Processing Request
// 4 Request Finished and Response Ready

let test = document.querySelector('#test');
test.addEventListener('click', testFun);
function testFun() {
    
    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    console.log(xhr.readyState);
    xhr.open('get', 'https://jsonplaceholder.typicode.com/posts/2', true);
    console.log(xhr.readyState);
    // console.log(xhr.responseText);
    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            // console.log(this.responseText);
            let data = this.responseText;
            data = JSON.parse(data);
            console.log(data);
            // data.map(function(value){
            //     console.log(value.title); 
            // });
            console.log(xhr.readyState);
        }
    };
   
    xhr.send();

}



