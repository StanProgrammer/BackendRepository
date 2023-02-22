// function myFunc1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('c');
//             resolve()
//         },3000)
        
//     })
// }
// function myFunc2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('d');
//             resolve()
//         },0)
//     })
// }
// async function callAll(){
//     console.log('a');
//     console.log('b');
//     await myFunc1()
//     await myFunc2()
//     console.log('e');
    
// }
// callAll()

async function callAll(){
    console.log('a');
    console.log('b');
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('c');
            resolve()
        },3000)
        })
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('d');
            resolve()
        },0)
        })
    console.log('e');
}
callAll()