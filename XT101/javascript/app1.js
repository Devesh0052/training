// hoiting in JS


var a = "Hello";
function b() {
    console.log("Called b()...");

}

console.log(a);
b();

// 1

function message() {

    return "Hello";
}

msg = message;


function greet(data, a, b) {

    console.log(data());
}


greet(msg);

greet(function () {
    return "Hi"
});


greet(() => "Hi there");


function doMath(f, a, b) {
    console.log(f(a, b));
}


function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

doMath(add, 23, 45);

doMath(multiply, 34, 89);


// define a base function which takes another funtion as
// argument and the argument funtion is implemented as a greeter
// invoke the base function for 3 diffeterent greeting messages


function greeter(message) {
    console.log(message());
}

function morning() {
    return "Good Morning";
}

function afternoon() {
    return "Good Afternoon";
}

function evening() {
    return "Good Evening";
}

greeter(morning);
greeter(evening);

// mehboob
function greet(mn) {

    mn()
}

function fn1() {
    console.log("good morning")
}
function fn2() {
    console.log("good evening")
}
function fn3() {
    console.log("good night")
}

greet(fn1)
greet(fn2)
greet(fn3)

greet(() => console.log("Good Day"));


// setTimeout(fn3,5000);
console.log("Timer started..");

console.log();
console.log();
console.log();
console.log();

console.log();
console.log();


function addSquares() {

    function square(x) {
        return x * x;
    }
    return square;
}

let sqfun = addSquares();


function parent() {

    let x = "Lion";
    let y = 10;
    let z = 200.99;

    function getLion() {

        return x;
    }


    return getLion;
}


let closurefn = parent();

console.log(closurefn);

console.log("recursive function");
function recurse(x) {
    if (x > 0) {
        console.log(`the value of x is ${x} `);
        recurse(x - 1);
    }
}
recurse(10)



const fun=function (){

    //code
    
    
    }
    

  /* (function (a,b){
        console.log(a+b);
    })(4,6);

 */

    function greets(){

        console.log("Greetings, you will not see me again..");

        greets = function(){
            console.log("Good day to all now onwards..");
        }
    }


    greets();

    greets();
    greets();
    greets();