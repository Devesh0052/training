function add(...params) {
    console.log(arguments.length);
let sum=0;
    console.log(params);
    for( x of params){
        sum=sum+x;
    }
    return sum;
}


let sum=add(1,2,3,4,5);


let nums=[1,3,4,6,8,9]
function getMax(a){

    let max = Math.max(...a);
    console.log(max)
}

getMax(nums);
