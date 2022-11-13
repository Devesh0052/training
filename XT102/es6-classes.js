class Person{
    constructor(id,name,location){
        this.id=id;
        this.name=name;
        this.location=location;
    }

     details() {
        return `${this.id} ${this.name},${this.location}`;
    }
}

let p1= new Person(100,'John','Hyderabad');

console.log(p1.details());

console.log(p1.name);