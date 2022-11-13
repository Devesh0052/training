import {Person} from './model.js'
/* let fruits=new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Pear");
fruits.add("Apple");

console.log(fruits);

console.log(fruits.has("Banana"));
fruits.add("Grapes");
console.log(fruits.size); */

let persons=new Set();
persons.add(new Person(1,"John","Hyderabad"));
persons.add(new Person(2,"Peter","Bangalore"));
persons.add(new Person(3,"Harry","Pune"));
persons.add(new Person(4,"Selina","Mumbai"));

console.log(persons.size);

for(let p of persons){
    console.log("\---->"+p);
}

for(let key of persons.values()){
    console.log(key);
}


//Map

let pMap=new Map();
pMap.set(1,new Person(1,"John","Hyderabad"));
pMap.set(2,new Person(2,"Peter","Bangalore"));
pMap.set(3,new Person(3,"Harry","Pune"));
pMap.set(4,new Person(4,"Selina","Mumbai"));

console.log(pMap);
console.log(pMap.keys());
console.log(pMap.values());

console.log(pMap.get(3));
