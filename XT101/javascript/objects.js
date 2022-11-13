const emp = {
    id: 100,
    empName: "John",
    city: "Bangalore",
    salary: 78000,
    address: {
        doorNo: "123",
        area: "my area",
        pincode: 500089
    }
};


emp.performance="good";

emp.details=function(){
    console.log(`${this.id} ${this.empName}`)
}

//emp.details();


function Employee(id,empName,city,salary){

    this.id=id;
    this.empName=empName;
    this.city=city;
    this.salary=salary;
    this.info=()=>{
        console.log(`${this.id} ${this.empName} ${this.city} ${this.salary}`);
    }
  

}

//Employee();

const john=new Employee(102,"John","Bangalore",45000);

//john.info();



//create an object using object literals and function constructor for

//customer scenario (atleast 5 properties and one method)

//Wrappers in JS NUmber, String BigInt

/* let address="103, Blue Heaven Nowhere";

let address_1= new String(address);

console.log(address_1.substring(5,16));
console.log(address_1.toUpperCase())
console.log(address_1.bold);

let mynum= new Number(12);
console.log(mynum.valueOf());

let mynum_1=5;

let flag=true;

let flag_1=new Boolean(false);

let f1= new Function();
 */
function* genPrime(){

    yield 2;
    yield 3;
    yield 5;
    yield 7;
    yield 11;
    yield 13;
    yield 17;
}

let gen = genPrime();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next());










