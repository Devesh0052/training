class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
//let animal=new Animal("fido"); //cannot instantiate
export class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    talk() {
        return "Bhow Bhow..";
    }
}
/* let fido=new Dog("fido");

console.log(fido.getName()+" barks "+fido.talk()); */ 
