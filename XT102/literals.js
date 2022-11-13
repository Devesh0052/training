log=console.log;

let names=["John","Peter","Harry"];
console.log(names);

let fruits=Array.of("Apple","Banana","Pear");

console.log(fruits);

function Person(id,name,location){
    this.id=id;
    this.name=name;
    this.location=location;

}

let p1=new Person(100,"Peter","Hyderabad");
Person.prototype.details=function(){
    this.id+" "+this.name+" "+this.location;
}
log(p1.details());


let p2={id:102,name:'John',location:"Bangalore"};
log(p2);

let num=100;
let num2=new Number(100);

let details =`details of ${p1.name} is ${p1.id}, ${p1.location}`;

log(details);