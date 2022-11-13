let names=["john","peter","noraly","raja"];

let emps=Array.of("Ranga","Pretham","Rosie","Rajane");


names.push("Shankar");
console.log(names);
console.log(names.pop())

names.splice(2,0,"Suresh");

names.splice(3,1);


let [name1,name2]=emps;


let newArr=names.concat(emps);
let empsFound=newArr.find((elem)=>elem.startsWith("R"));

let empsFound2=newArr.filter((elem)=>elem.startsWith("R") && elem.endsWith("e"));


const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12







/* const emp = {
    id: 100,
    empName: "John",
    city: "Bangalore",
    salary: 78000,
};

let {id,city}=emp;
console.log(city);


let all
 */
/* let numArray=[[1,3,4],[5,6,8],[4,6,8]];
let sum=0
for(let i=0;i<numArray.length;i++){
    for(let j=0;j<numArray.length;j++){
        sum+=numArray[i][j]
    }
}
console.log(sum);


let numArray = [[1,3,4],[5,6,8],[4,6,8]]
let sum =0
for(item of numArray){
    
    for(inneritem of item){
        sum = sum + inneritem
    }
}

console.log(sum) */

let names1=["parker","peter","noraly","raja"]; 
//names1.push("john",3)
//names1.pop("john",3)
names1.splice(3,0,"john")
console.log(names1);


//-----------------
var myData = [
    {id: 1, name: "Andrew", age: 30, salary : 20000},
    {id: 2, name: "Brandon", age: 25, salary : 20000},
    {id: 3, name: "Christina", age:26, salary : 20000},
    {id: 4, name: "Elena", age: 28, salary : 20000},
    {id: 5, name: "Felicia", age:25, salary : 20000}    
]

/* list all employee */
let allEmp = myData.filter((ele) => ele.salary);

/* Minimum Salary */
console.log("Minimum salary");
const min = Math.min(...allEmp);
console.log(parseInt(min));

/* Maximum Salary */
console.log("Maximum salary");
const max = Math.max(...allEmp);
console.log(parseInt(max));


/* employees who's age below 26 */
let findAge = myData.filter((empAge) => empAge.age < 26);

/* Total salary of employee */
const totalSalary = myData.map(item => item.salary).reduce((prev, curr) => prev + curr, 0);

console.log("List Of Employees");
console.log(allEmp);
console.log("The Employees who's age below 26");
console.log(findAge);
console.log("The total salary");
console.log(totalSalary);
