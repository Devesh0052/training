let xhr;
        function makeRequest(){
            xhr=new XMLHttpRequest();
         // xhr.onreadystatechange=processData;
          xhr.onload=processData;
            xhr.open("GET","http://localhost:8080/api/rest/person/103",true);
           // xhr.setRequestHeader("Accept","application/pdf");
            xhr.send(null);

        }


        function processData(){
            //console.log(xhr.readyState);
           /*  if(xhr.readyState==4 && xhr.status==200){  */
                let post=JSON.parse(xhr.responseText);
                document.getElementById("uid").innerHTML=post.id;
                document.getElementById("t1").innerHTML=post.name;
                document.getElementById("body").innerHTML=post.city;
                document.getElementById("mydiv").classList.add("card");
           /*  } */
        }