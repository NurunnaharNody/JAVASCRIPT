//   var price = 1200;
//   var names = 'akash';
//   var isItOkey = false;
//   console.log(price);
//   console.log(names);
//   console.log(isItOkey);


// let price= [20,30,40];
// const name = ['akash','batsh','titash'];
// price.push(30);
// name.push('os');

// console.log(price);
// console.log(name);

// let a = 10;
// let b = 20;

//  let sum = a + b;
//  let sub = a - b;
//  let multipy = a * b;
//  let divide =  a / b;
//  let vagsesh = a % b;

//  console.log( sum , sub , multipy , divide , vagsesh);


// let mangoPrice = 300;
// let applePrice = 200;

// console.log(mangoPrice > applePrice && mangoPrice != applePrice);
// console.log(mangoPrice >= applePrice || mangoPrice == applePrice);
// console.log(mangoPrice < applePrice);
// console.log(mangoPrice <= applePrice);
// console.log(mangoPrice != applePrice);
// console.log(mangoPrice == applePrice);



// let mangoPrice = 300;
// let applePrice = 400;
// if( mangoPrice > applePrice){
//     console.log('please give me some apple');
// }
// else{
//     console.log('give me than mango');
// }


// let i = 7;
// while(i <= 19){
//     console.log(i);
//     i = i + 2;
// }



// var books = ['abc','acd','ade','add']

// let cIndex = books.indexOf('add');
// console.log(cIndex);

// let secoundIndex = books[3];
// console.log(secoundIndex);

// books[2]='eee';
// console.log(books);


// let num = [1,2,5,6,8,77,66,90,88,99,67,56,99];
// for(let i=0; i<=num.length ; i++){
//    let element = num[i];
//     if(element >= 80){
//        console.log(element);
//    }
   
// }


// function multipy(num1,num2,num3){
//     let multipilication = num1*num2*num3;
//     return multipilication;
// }

// const first = multipy( 3, 4, 5);
// console.log(first);

// let person = {
//      name: 'nody',
//      age: 20,
//      height:5.4,
//      weight: '50kg'
// };

// person.name='nod';
// console.log(person);

//   function feetToInches( feet ){
//       const inches = feet * 12;
//       return inches;
//   }

//   const firstInch = feetToInches(13);
//   console.log('In inches:', firstInch);


// function centimeterToMeter (centimeter){
//      const meter = centimeter / 100;
//      if(meter < 0){
//          return'dushtu';
//      }
//      else{
//      return meter;
//      }
// }

// const firstMeter = centimeterToMeter(-1)
//   console.log(firstMeter);


// function pageReqirements(firstBook, secoundBook, thiredBook){
//     let firstBookPages = 100;
//     let secoundBoookPages = 200;
//     let thiredBookPages = 300;

//     const totalPages = (firstBook*firstBookPages) + (secoundBook*secoundBoookPages) + (thiredBook* thiredBookPages);
//     return totalPages;

// }

// let total = pageReqirements(3,4,6);
// console.log(total);


// function bestFriend(arr){
//     let best1 = arr[0];
//     for(i=0; i<arr.length; i++){
//         if(arr[i].length < best1.length){
//            best1 = arr[i];
//         }
//     }
//     return best1;
// }
//      let  words = bestFriend([ 'tamm', 'rubel', 'rasel', 'badsha', 'putki']);
//      console.log(words);

     
const numbers = [20,49,-2,56,44];

function  possitiveNumbers(numbers){
    let possitiveNumbers=[];
for(let value of numbers){
    if(value>=0){
        possitiveNumbers.push(value);
    }
    else{
        break;
    }
  }
  return possitiveNumbers;
}
let positive = possitiveNumbers([20,49,70,-9,45]);
console.log(positive);


