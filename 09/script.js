// high order function calling and callback

// function cb(result){
//     console.log(result);
// } 
// function add(a, b, cb){
//     let c = a + b;
//     cb(c);
// }

// add(1, 2, cb)

//        or 

// function add(a, b, cb){
//     let result =a+b;
//     cb(result);
// }

// function showResult(result){
//     console.log(result);
// }

// add(2, 4, showResult);


// 2.
// function add(a, b, cb){
//     let result =a+b;
//     cb(result);
// }

// add(2, 4, (val) => console.log(val));

// 3.
function add(a, b, cb){
    let result =a+b;
    cb(result);

    return () => console.log(result);
}

let resultFunction = add(2, 4, () => {});
resultFunction();