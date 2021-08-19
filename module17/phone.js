const phones = [
    {name:'samsung a51', price:45000, camera:10, storage:32},
    {name:'shaomi s51', price:35000, camera:8, storage:16},
    {name:'symphony v50', price:15000, camera:8, storage:16},
    {name:'Nokea n51', price:7000, camera:8, storage:8},
    {name:'samsung m31', price:25000, camera:8, storage:32},
    {name:'samsung a49', price:40000, camera:10, storage:32}
];


let cheapest = phones[0];
for (const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);