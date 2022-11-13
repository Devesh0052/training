/* let greet = (function(msg) {

    let message = msg;

    return function () {
       console.log(message+", "+"Shubham");
    };
    
})('Good Evening');

setTimeout(greet,10000); */


let greet = function(name) {
    let msg = "Good Afternoon ";

    return function() {
        console.log(msg + ", " + name);
    };
};

let c=greet('Shubham');

console.log(c);

//setTimeout(greet('Shubham'), 2000);
