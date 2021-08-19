// ---------------------------------------recursion --------------------------------

// let sum=0;
// for(i=1; i<=6; i++){
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for(i=6; i>=1; i--){
//    sum = sum + i;
// }
// console.log(sum);

// function sum(i){
//     if(i==1){
//         return 1;
//     }
//     return i + sum(i-1);
// }
// let cost = sum(7);
// console.log(cost);
                            //    ------------------factorial 

// let factorial = 1;
// for(i=6; i>=1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

// function factorial(i){
//     if(i == 1){
//         return 1;
//     }
//     return factorial(i-1) * i;
// }
// console.log(factorial(6));

                            //  ------------------  febonacci

// let fibo = [0,1]      
// for(i=2; i<=6; i++)  {
//     fibo[i]=fibo[i-1] + fibo[i-2];
// } 
// console.log(fibo);      


function fibo(i){
    if(i == 0){
        return 0;
    }
    else if(i == 1){
        return 1;
    }
    return fibo(i-1) + fibo(i-2);
}
console.log(fibo(6));


