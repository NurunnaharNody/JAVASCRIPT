

// var factorial = 1;
// for (var i = 1; i <=7; i++){
//     factorial = factorial*i;
// }
// console.log(factorial);

// function factorial(number){
//     let fact = 1;
//     for (let i = 1; i <= number; i++ ){
//         fact = fact*i;
//     }
//     return fact;
// }
// var firstFactorial = factorial(7);
// console.log('7 factorial =', firstFactorial);


// function getFactorial(number){
//            let factorial = 1;
//            let i = 1;
//            while (i <= number){
//                factorial= factorial*i;
//                i++;
//            }
//            return factorial;
// }
// const myFactorial = getFactorial(6);
// console.log(myFactorial)

function factorial(n){
    if(n==1){
        return 1;
    }
   return  n * factorial(n-1);
}

const myFactorial=factorial(7);
console.log(myFactorial);