// Arrays higher order
// const student =["sumit", "piyush", "jhon"];

// const print = (n) => {
//     console.log(n);
// }

// student.forEach((val /*print*/) => console.log(val));

/*so basically for each can only perform tasks 
on the particular array and doesn't return anything 
if assigned to newArr but of map it perfofrms 
the task like for each and return new array as a 
result of task finishing.*/

// student.map(val=> console.log(val));

const number = [1, 2, 3, 4, 5, 6];
console.log(number.find((num) => number === 4 ));
console.log(number.findIndex( (num) => number === 4 ));