let num=10;


function checkScope(){
    num=20;
    let myname="John";

    function child(){
        console.log("My Name from Child is "+myname);
    }
    child();
}


function f2(){
    console.log("value of num = "+num);
}

function f3(){
    console.log("value of num = "+window.num);
}

function f4(){
    console.log("Name is "+myname);
}



function f5(){
    const pi=3.14;
    console.log("PI = "+pi);
    console.log(num);
    throw new Error("Something went Wrong..");
}

function f6(){
    //f5();
    console.log(" Now PI = "+pi);
}

const emp={id:100,name:'John'};
console.log(typeof(emp));

//emp=1;
emp.name="Peter";

console.log(typeof(emp));

