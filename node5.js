//Spread Operator
array1=['apple','mango','banana']
array2=[...array1]
array2.pop()
console.log(array1);
console.log(array2);

// rest operator can be used to give undefined number of arguments
//It returns it in an array
const rest1=(...args)=>{
    return args
}
console.log(rest1('My','Name','is', 'Atib'))