
// function largest(first , secound){
//     if (first>secound){
//         return first;
//     }
//     return secound;
// }

// const max = largest(123,345);
// console.log('largest',max);

function smallest(first , secound, thired){
    if (first < secound && first< thired){
        return first;
    }
    else if( secound < first && secound < thired){
        return secound;
    }
    return thired;
}

const min = smallest(123,345,755);
console.log('smallest number is ',min);