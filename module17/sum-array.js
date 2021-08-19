// const number =[22,34,44,56,34,56,44,233];
// let sum = 0;
// for(let i=0; i<number.length; i++){
//     const element = number[i];
//     sum = sum + element;
// }
// console.log(sum);

function array(number){
     let sum = 0;
     for(let i=0; i<number.length; i++){
     const element = number[i];
     sum = sum + element;
  }
  return sum;
}

const arrayNumber = array([33,45,23,45]);
console.log(arrayNumber);

