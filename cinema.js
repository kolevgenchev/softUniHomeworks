function cinema(input){
let typeOfProjection=input[0]
let rows=Number(input[1])
let collumns=Number(input[2])
let price=0
switch(typeOfProjection){
    case "Premiere":price=12.00;break;
    case "Normal":price=7.50;break;
    case "Discount":price=5.00;break;
}
let attendance=rows*collumns
let finalPrice=attendance*price
console.log(`${finalPrice.toFixed(2)} leva`)
}
cinema (["Premiere",
"10",
"12"])
