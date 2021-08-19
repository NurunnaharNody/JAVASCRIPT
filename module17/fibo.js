// const fibo=[0,1];
// for(let i = 2; i < 10; i++){
//     fibo[i] = fibo[i-1] +fibo [i-2];
// }
// console.log(fibo);




// function fiboSeries (num){
//     const fibo=[0,1];
//     for(let i = 2; i < num; i++){
//         fibo[i] = fibo[i-1] +fibo [i-2];
//     }
//     return fibo;
// }

// const fiboco = fiboSeries(20);
// console.log(fiboco);




// function fiboSeries (num){
//     if (typeof num != 'number'){
//         return 'please put a number';
//     }
//     if (num < 2){
//         return 'please, enter e positive value greater than 1';
//     }
//     const fibo=[0,1];
//     for(let i = 2; i < num; i++){
//         fibo[i] = fibo[i-1] +fibo [i-2];
//     }
//     return fibo;
// }

// const fiboco = fiboSeries(-33);
// console.log(fiboco);



// function fibonacci(n){
//     if (n==0){
//         return 0;
//     }
//     if (n==1){
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// const fiboelement = fibonacci(6);
// console.log(fiboelement);



function fibonacciSeries(n){
    if (n==0){
        return [0];
    }
    if (n==1){
        return [0, 1];
    }
    const fibo = fibonacciSeries(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}

const fiboelement = fibonacciSeries(6);
console.log(fiboelement);