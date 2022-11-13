
function add(a,b){
    console.log(a+b);
}

(a,b)=>{console.log(a+b)};

()=>console.log("hello");


setTimeout(function(){
    add(4,6);
},5000);


setTimeout(()=>{
    add(4,6);
},5000);

//IIFE

(function(a,b){
    console.log(a+b);
})(3,4);

let allGood=false
let mypromise=new Promise((resolve,reject)=>{
if(allGood){
    resolve("all Good here");
}else{
    reject("Nothing good here");
}
});


function adder(a=20,...params){
    let sum=0;
    
    for(let num of params){
        console.log(num);
        sum=sum+num;
    }
    return sum+a;
}

console.log(adder(2,3,4,5,6));

/* function adder2(a,b=30,c=10){
   
    return a+b+c;
} */

console.log(adder2(3));
console.log(adder2(2));
console.log(adder2(3,5));
console.log(adder2(4,5,6));

