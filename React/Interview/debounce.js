// debounce 

const optmiseDebounce = (func, delay) => {
    let timer;
    return function (){
        let context = this, 
        args= arguments
        clearTimeout(timer);
        timer =  setTimeout(()=>{
                func.apply(context, args)
        }, delay)
    }
}


async function nameApi(){
    
}
const debounce = optmiseDebounce(nameApi, 1000) 