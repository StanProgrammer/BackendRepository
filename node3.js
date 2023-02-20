class Student{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    };
    good(){
        console.log(this)
        return ()=>{
            console.log(this);
        }
    }
}
const Ati=new Student('Atib',24)
Ati.good()()
// In case of newkeyword inner arrow function directly points to object
// Fat arrow function looks at object which is in lexical scope

const Student1={
    name:'Atib', 
    age: 24,
    class: 10,
    greet(){
        console.log('Hi I am '+this.name)
    }
}
Student1.greet()