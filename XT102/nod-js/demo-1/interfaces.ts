
interface Emp{
    id:number,
    name:string,
    city:string,
}


let emps:Emp[]=[
    {id:100,name:'John',city:'Bangalore'},
    {id:101,name:'Peter',city:'Hyderabad'},
    {id:102,name:'Raja',city:'Pune'},
    {id:103,name:'Harry',city:'Hyderabad'},
    {id:104,name:'Poonam',city:'Bangalore'}
]

for(let emp of emps){
    console.log(emp.id+' '+emp.name+' '+emp.city);
}

