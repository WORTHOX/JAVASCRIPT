// function

function sayHello(){
    console.log("Hello sumit")
}
sayHello()

// function with arguments and parameters
function add(a,b) // a,b are arguments
{
    // console.log(a+b); // this directly returns the value on the console
    return a + b;
}
let a = add(10,20) // the called values in the functions are parameters
console.log('the value is',a);

// unlimited arguments accept 
function addnums(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

function addnum(...num)// spread Operator
{
    let sum=0
    for(let i=0;i<num.length;i++){
        sum+=num[i]
    }
    return sum;
}

let result = addnum(1,5,6,7,8,5,4);
console.log(result);