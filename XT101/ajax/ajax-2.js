let xhr;
        function makeRequest(){
            xhr=new XMLHttpRequest();
            xhr.onreadystatechange=processData;
            xhr.open("GET","http://localhost:88/pets",true);
           // xhr.setRequestHeader("Accept","application/pdf");
            xhr.send(null);

        }


        function processData(){
            //console.log(xhr.readyState);
            if(xhr.readyState==4 && xhr.status==200){
               let data=JSON.parse(xhr.responseText);
               console.log(data.pets)
              
            }
        }