function reservoir2 (input){
    let typeOfFuel=input[0]
    let quantityOfFuel=Number(input[1])
    let clubCard=input[2]
    let gasolineWithoutCard=2.22;
    let dieselWithoutCard=2.33;
    let gasWithoutCard=0.93;
    let gasolineWithCard=gasolineWithoutCard-0.18
    let dieselWithCard=dieselWithoutCard-0.12
    let gasWithCard=gasWithoutCard-0.08
    let finalSumWithoutCard=0;
    let finalSumWithCard=0;
    let finalSum=0;
    if(clubCard==="Yes"){
    switch(typeOfFuel){
        case "Gasoline":finalSumWithCard=gasolineWithCard*quantityOfFuel;break;
        case "Diesel":finalSumWithCard=dieselWithCard*quantityOfFuel;break;
        case "Gas":finalSumWithCard=gasWithCard*quantityOfFuel;break;
    }
}else if(clubCard==="No"){
switch(typeOfFuel){
    case "Gasoline":finalSumWithoutCard=gasolineWithoutCard*quantityOfFuel;break;
    case "Diesel":finalSumWithoutCard=dieselWithoutCard*quantityOfFuel;break;
    case "Gas":finalSumWithoutCard=gasWithoutCard*quantityOfFuel;break;
}
}
if((clubCard==="Yes")===true){
    finalSum=finalSumWithCard
}else if((clubCard==="No")===true){
    finalSum=finalSumWithoutCard
}
    if (quantityOfFuel>=20 && quantityOfFuel<=25){
        finalSum=finalSum*0.92
    }else if(quantityOfFuel>25){
        finalSum=finalSum*0.90
    }
    console.log(`${finalSum.toFixed(2)} lv.`)
}
reservoir2(["Gasoline","25","No"])