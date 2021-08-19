// var i=0;
// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

/// 

var numbers = [12, 14, 16, 45, 78, 90, 56, 45, 88];
for (var i = 0; i<numbers.length; i++){
    var number = numbers[i];
    if(number>40){
        continue;
    }
    console.log(number);
}