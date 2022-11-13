function divide(a, b) {
    let result='';
    try {
        if (a == 0 || b == 0) 
            throw new Error("input cannot be Zero..");
        
        result= a / b;
    } catch (err) {
        //console.log(err.stack);
        result= "Divide failed.."+err.message;
    }
    console.log("Bye done.");
    return result;
}


console.log(divide(0, 10));
