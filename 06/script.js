// loops 
//  for loop -> if you know the exact amount of iteration

// for (let i=1; i<=10; i++){
//     console.log('sumit' + i);
// }

// while -> unknown no. of itteration

// let ip=30
// let home=30

// // while(ip!=home){
// //     ip++;
// //     console.log("steps taken"+ip);
// // } 

// // do- while takes one more step first then checks the condition  
// do {
//     ip++;
//     console.log("steps taken"+ip);
// }while(ip<=home)

let guess=0;
let number=40;
do {
    guess=parseInt(prompt("Guess a number:"))
    if (guess==number){
        alert("winner");
        break;
    }
}while(guess!=0)