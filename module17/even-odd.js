// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);


// even number 
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 1444;
const isHerNumberEven = isEven(myNumber);


// odd number 
function isOdd(number){
    if(number % 2 == 1){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is it odd ', isMyNumberOdd);


// leap year 

function isLeap(year){
    if(year % 4 == 0){
        return true;
    }
    return false;
}

const myYear = 2024;
const isLeapYear = isLeap(myYear);
console.log('is it leap year', isLeapYear);