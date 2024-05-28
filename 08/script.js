// arrow function

// 1. syntax

// function sayHello(){
//     console.log("Hello");
// }

const sayHello = () =>{
    console.log("hello");
}
sayHello(); 

const add = (a,b) =>{
    // console.log(a+b);
    return a+b;
}

const addv2 = () => a+b; //one liner 
add(5,6)


// 2. arguments 

const addv3 = (...nums)=>{
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
}
sum = addv3(2,4,5,6,7,8)
console.log(sum)
/* we can't use the argument function in the arrow 
function it can be only used in normal functions */


// 3. Hoisting
const sayHey = () =>{
    console.log("Hey their");
}

sayHey();

function sayHeyV1(){
    console.log("Hey");
}

/* this normal function can be accessed from any position 
wether above the function called or below but in arrow function 
it should be alwasys mentioned above from the called funtion*/

// 4. this keyword

const obj1 = {
    values : 20,
    myFunction: function () {
        console.log(this);
    },
}

const obj = {
    values : 20,
    myFunction: () => {
        console.log(this);
    },
}
obj.myFunction();