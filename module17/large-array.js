function largest(numbers){
    let largest = 0;
    for(let i = 0; i<numbers.length; i++){
        const element = numbers[i];
        if(largest<element){
            largest=element;
        }
    }
    
    return largest;
         
}

const largeNumber = largest([12,23,34,45,6,67,4,3]);
console.log(largeNumber);