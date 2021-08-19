function inchToFeet(inches){
        var feet= inches/12;
        return feet;
}

var myInches = 123;
var feet = inchToFeet(myInches);
console.log('my inches feet',feet);


function milesToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = milesToKm(12);

console.log(marathon);
