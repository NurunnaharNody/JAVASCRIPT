function addTwoNumbers ( number1 ,number2 ){
    console.log(number1, number2);
    var total = number1+number2;
    return total;
}

var firstNumber = 21;
var secoundNumber = 33;
var result=addTwoNumbers(firstNumber , secoundNumber);
console.log('result value:' , result);