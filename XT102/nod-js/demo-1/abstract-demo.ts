abstract class Animal{

    constructor(public name:string){

    }

    abstract talk(): string;

    public getName(){
        return this.name;
    }
}


//let animal=new Animal("fido"); //cannot instantiate

export class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    talk(): string {
        return "Bhow Bhow..";
    }
    
}

/* let fido=new Dog("fido");

console.log(fido.getName()+" barks "+fido.talk()); */