let today=new Date();

let now=Date.now();

let strDate="2022-03-28";
let d1=Date.parse(strDate).valueOf;

let dob1=new Date("1971-02-21");


var dob = new Date("02/21/1971");  
var diff = Date.now() - dob.getTime();  
var age_dt = new Date(diff);   
var year = age_dt.getFullYear();  
var age = Math.abs(year - 1970);  
console.log( age );


