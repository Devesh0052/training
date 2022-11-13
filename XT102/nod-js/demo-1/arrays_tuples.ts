import {App} from './app.js';

let nums:number[]=[1,2,3,4];

let otherNums:Array<Number>=[1,2,3,4];
for(let num of otherNums){
    console.log(num);
}

let empTuple=[100,'John','Hyderabad',67000];

let app = new App(200,"Peter");
app.details();

