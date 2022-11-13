
let form=document.getElementById("myform");
let flag=false;
form.addEventListener("submit",(evt)=>{
    let messages=[];
    let username=document.getElementById("un").value;
   
    let pwd=document.getElementById("pwd").value;
    
    if(username===''||username.length<5){
      
        messages.push("Name is required and it should be more than 5 chars");
    }

    if(pwd===''||pwd.length<5){
        messages.push("password is required with min length of 8 chars");
    }
    if(pwd==='password'){
        messages.push("password  cannot be set as password");
    }

    let mobile=document.getElementById("mob").value;
    const matched=mobile.match('[6-9]+[0-9]{9}');
    if(!matched){
        messages.push("mobile No not of correct format");
    }

    let email=document.getElementById("email").value;
    const validEmail=email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    if(!validEmail){
        messages.push("email not valid");
    }
    
    let radioBtns=document.getElementsByName("slot");
    for(r of radioBtns){
        if (r.checked==true){
            flag=true;
            break;
        }
    }
    if(!flag){
        messages.push("Select A Time Slot..");
    }



    if(messages.length>0){
        document.getElementById("msg").innerHTML=messages.join(',');
        evt.preventDefault();
    }
});

