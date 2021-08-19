// Assignment-1 seer to mon 
function seerToMon(seer){
    // 40 seer = 1 mon 
    const mon = seer/40 ;  
    if(seer < 0){
        return 'Please, give me a possitive value!!';
    }
    else if(typeof seer == 'string'){
        return 'please give me a number,seer never be a string';
    }
    else if(seer == null){
        return 'error';
    }
    else{
        return mon;
    }
}
// output  check
// let firstPersonGivenMon = seerToMon();
// console.log(firstPersonGivenMon);




// assignment-2 totalsales 
function totalSales(shirt , pant, shoe){
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    const totalPrice = (shirt * shirtPrice) + (pant * pantPrice) + (shoe * shoePrice);
    if(shirt < 0 || pant < 0 || shoe < 0){
        return 'if you dont need to buy anything, give me (zero)0 not negative value';
    }
    else if(typeof totalSales == 'string'){
        return 'please give me numbers,string is not allowed';
    }
    else if (shirt,pant,shoe == null){
        return'error,give values';
    }
     return totalPrice;
}

// output check 
// let firstOrder = totalSales(2,3,4);
// console.log(firstOrder);
                                                                                                           



// Assignment-3 delivery cost 
function deliveryCost(shirtNeeded){ 
    const forFirst100Tshirt = 100;
    const forSecound100Tshirt = 80;
    const forInfinitiveTshirt = 50;
    if(shirtNeeded < 0){
            return 'Your input is negative, please give us possitive value';
    }
    else if(typeof shirtNeeded == 'string'){
        return 'Please give us a number,string is not allowed';
    }
    else if(shirtNeeded == null){
        return 'Please,give us how much shirt you needed?';
    }
    else if(shirtNeeded <= 100){
        const totalCostForFirst100 = shirtNeeded * 100;
        return totalCostForFirst100;
    }
    else if(shirtNeeded > 100 && shirtNeeded < 200){
        const forFirst100 = 100 * forFirst100Tshirt;
        const leftTshirt = shirtNeeded - 100;
        const forSecound100 = leftTshirt * forSecound100Tshirt;
        const totalCostForSecound100 = forFirst100 + forSecound100;
        return totalCostForSecound100;
    }
    else{
        const forFirst100 = 100 * forFirst100Tshirt;
        const forSecound100 = 100 * forSecound100Tshirt;
        const leftTshirt = shirtNeeded - 200;
        const forInfinitive = leftTshirt * forInfinitiveTshirt;
        const totalCost = forFirst100 + forSecound100 + forInfinitive;
        return totalCost;
    }

}
// check output 
// const cost = deliveryCost(100);
// console.log(cost);




// assignment-4 perfect friend 

function perfectFriend(friendsName){
    if(typeof friendsName == 'number'){
       return 'Error, please give string';
    }
    else if(friendsName == null){
        return 'Give your friends name..!';
    }
    else{
        let desireName = friendsName[0];
        for(let i = 0; i < friendsName.length; i++){
            if(friendsName[i].length > desireName.length && friendsName[i].length == 5){
                desireName = friendsName[i];
             }
          }
          return desireName;
    }
}

// check out 
const friends = perfectFriend(['ellaun','Leon','Urmi','Sany','Ellaun','Brishty','Toush','Mim']);
console.log(friends);
//  const friends = perfectFriend(20,70);
//  console.log(friends);
// const friend = perfectFriend(['abcdef','abcdf','abc']);
// console.log(friend);