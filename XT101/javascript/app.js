function hello(){

 document.write("Hello World of JavaScript");
}

function add(a,b){
    if(isNaN(a)||isNaN(b)){
        console.log("Enter Numbers only");
        return;
    }else{
        n1=parseInt(a);
        n2=parseInt(b);
        console.log(n1+n2);
        return;
    }
    
}

add(2,4);
add("30",4);
add("7","56Lane");



function adder(a,b,c){

    var d=30;
    result=a+b+c;
    return result;
    }
    
    
    function adder2(a,b){
    
    result = a+b+d;
    return result
    }


    adder(1,2,3);

    //console.log(adder2(3,5));



 adder3(23,45);
  
 
 let adder3 =  function(a,b){
        console.log(a+b);
    }






