let person = {
    id: 100,
    firstName: "John",
    lastName: "Smith",
    location: "Bangalore"

};

console.log(typeof(person))

let {firstName,lastName}=person;

console.log(firstName+" "+lastName);

let fruits=["apple","banana","grapes","pear"];

let [apple,...rest]=fruits;
console.log(apple+" and "+pear);