 class App {
    constructor(public id : number, public name : string) {

    }

     details() {
        console.log(this.id + " " + this.name);
    }
}
let app = new App(100, 'John');
app.details();

function getInfo(id:number,name:string,email?:string){
    if(email===undefined) email='';
    console.log(id+" "+name+" "+email);
}

getInfo(100,"John");
getInfo(100,"peter","peter@nowhere.com");


export{App}