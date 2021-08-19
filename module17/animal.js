function animalCount(miles){
    const animalFirst10Miles = 10;
    const animalSecound10Miles = 50;
    const animalrestMiles = 50;
    if(miles <= 10){
        const count = miles * 10;
        return count;
    }
    else if( miles <= 20){
        const first10 = 10 * animalFirst10Miles;
        const restMiles = miles - 10;
        const secound10 = restMiles * animalSecound10Miles;
        const totalAnimals = first10 + secound10;
        return totalAnimals;
    }
    else{
        const first10 = 10 * animalFirst10Miles;
        const secound10 = 10 * animalSecound10Miles;
        const restMiles = miles - 20;
        const restAnimals = restMiles * animalrestMiles;
        const totalAnimals = first10 + secound10 + restAnimals;
        return totalAnimals;
    }
}

const first = animalCount(20);
console.log(first);