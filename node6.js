const person={
    name:'Atib',
    age:24,
    greet(){
        console.log('Hi I am  '+this.name);
    }
};
// const printName=(person)=>{
//     console.log(person.name);
// }
const printName=({ name, age})=>{
    console.log(person.name);
}
printName(person)




