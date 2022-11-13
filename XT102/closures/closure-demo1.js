function createMultiplier(fac) {

    let factor = fac;

    function multiplyWith2(num) {
        return factor * num;
    }
    return multiplyWith2;
}


let multiplyBy2=createMultiplier(2);

console.log(multiplyBy2(4));