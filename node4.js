//map gives new array
array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
array2=array.map((e)=>{
    if(e==' '){
        return 'empty string'
    }
    else{
        return e
    }
})
console.log(array2);