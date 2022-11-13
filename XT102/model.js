
export class Person{
    constructor(id,name,location){
        this.id=id;
        this.name=name;
        this.location=location;
    }

     details() {
        return `${this.id} ${this.name},${this.location}`;
    }
}