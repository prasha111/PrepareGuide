//callback async operation

function firstFunction(cb){
    setTimeout(()=>{
        cb("given Callback")
        console.log("First Promise is resolved")
        
    }, 1000)
}
function secondFunction(cb){
    setTimeout(()=>{
        cb("givenCallback")
        console.log("Second Promise is resolved")
    },1000)
}


const message = firstFunction((message)=>{
    console.log(message)
    secondFunction((mess)=>{
        console.log(mess)
    }
    )

})







//Promise
const first =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("First Promise resolved")
    }, 1000)
})

const second =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Second Promise resolved")
    }, 1000)
})

first.then((resolve)=>{
    console.log(resolve)
    second.then((res)=>{
        console.log(res)
    })
}).catch(()=>{
    console.log("Not resolved")
})


//promise chaining  calling another promise in return of promise (parent)

const firstNew =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("First Promise resolved")
    }, 1000)
})

const secondNew =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Second Promise resolved")
    }, 1000)
})

firstNew.then((firstMessage)=>{
    console.log(firstMessage)
    return secondFunction
})
.then((secondMessage)=>{
    return console.log(secondMessage)
})



//types of promises(Promise combinators)


Promise.all([]).then().catch()   //run all the promises in parrallel , if any one fails it will return the Promise (it will Promise failed)
Promise.allSettled([])  // run all the promises and return all the promised irrespective if the promise is failed or fullfilled , (only case when all the promise failed)

Promise.race([]).the().catch()   // return the first promise irrespective of fullfilled or failed  (it will show state of first promised resolved)
Promise.any([]).then().catch() //   returun all the any of the first fulfilled promise