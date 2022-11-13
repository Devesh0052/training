function Product(name,price){
    this.name=name;
    this.price=price;
}


function Toy(name, price,category){
    Product.call(this,name,price);
    this.category=category;
}


let car=new Toy("BMW",100,'toy');

console.log(car.name+" "+car.price);



function Food(name, price,category){
    Product.apply(this,[name,price]);
    this.category=category;
}

let pizza= new Food('Pizza',300,"snacks");



let object ={
    x:"mabu"
}

function fn(name)
{
    console.log(this.x,name);
}
var c=fn.bind(object,"jani");
c();

