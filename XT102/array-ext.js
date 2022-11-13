
//fill

let arr1=[1,2,3,,,].fill(8);
console.log(arr1);

let arr3=[1,1,1,3,3,,,,].fill(2,5);
console.log(arr3);

let arr4=[1,1,1,3,3,,,,].fill(2,1,4);
console.log(arr4);

let arr2=Array.of(1,2,3,4);
console.log(arr2.fill(0));

let arr6=[1,2,3,5,6,7,89,3,4,2];
for(let key of arr6.keys()){
console.log(key);
}
for(let value of arr6.values()){
    console.log(value);
    }

for(let entry of arr6.entries()){
        console.log(entry);
        }