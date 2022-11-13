//alert("Click Ok to Proceed");
/* 
userFlag=confirm("Cancel or press OK");
if(userFlag) {
    alert("You have pressed OK");
}
else {
    alert("You have pressed Cancel");
} */

/* inputData=prompt("Please enter a value",100);

alert("User Entered : "+inputData);

//enter 2 values using prompt box and print the concatenated result

inputData1=prompt("Please enter a value",0);
inputData2=prompt("Please enter a value",0);
if(isNaN(inputData1) || isNaN(inputData2)){
alert("enter only numbers");
}else{
    num1=parseInt(inputData1);
    num2=parseInt(inputData2);
    result=num1+num2;
    alert("User Entered :"+result); 
}
*/

//alert(parseInt("4545shantanu56johnny"));

console.log(isNaN("Shantanu"));//true
console.log(isNaN("567"));//false

/* carJson={"brand":"maruti","year":1998,"price":56000};

carObj=eval(''+carJson+'');

console.log(carObj.brand);

sum=eval('3+8');
console.log(sum); */

let num=5;

do{
    console.log(num);
    num++;
}while(num<=10);

/*
num=5;
while(num<=10){
    console.log(num);
    num++;
}

for( let i=0;i<10;i++){
    console.log(i);


}

console.log("value of i now "+i);
*/

names=["john","peter","Neel","Shantanu","Tanvir"];

index=0;
do{
   console.log("Welcome "+names[index]);
    index++;
}while(index<names.length);

for(let n in names){
    console.log("Welcome "+names[n]);
}

let flag=false;
for(let n of names){
    if(n==="Neel"){
        console.log("Welcome Neel");
        flag=true;
        break;
    }
    
}
console.log("Processing Done");

if(flag){
    console.log("Neel found");
}else{
    console.log("Neel Not found");
}




