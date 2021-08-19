// const names = ['a','b','c','d','e','a','b' ,'d'];

// function removeDuplicate(names){
//     const unique =[];

//     for (const element of names){
//         if(unique.indexOf(element) == -1){
//             unique.push(element)
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


const numbers = [21,22,34,67,34,22,21,67,90];

function removeDuplicate(numbers){
    const unique =[];

    for (const element of numbers){
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique;
}

const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);