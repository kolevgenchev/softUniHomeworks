function newHouse (input){
    let typeOfFlowers=input[0]
    let numberOfFlowers=Number(input[1])
    let budget=Number(input[2])
    let price
    let price2
    switch(typeOfFlowers){
        case "Roses":price=5;break;
        case "Dahlias":price=3.80;break;
        case "Tulips":price=2.80;break;
        case "Narcissus":price=3;break;
        case "Gladiolus":price=2.50;break;
    }
    let finalSum=price*numberOfFlowers
    if(numberOfFlowers>80 && typeOfFlowers==="Roses"){
       finalSum=finalSum*0.90
    }else if (numberOfFlowers>90&& typeOfFlowers==="Dahlias"){
        finalSum=finalSum*0.85
    }else if(numberOfFlowers>80&&typeOfFlowers==="Tulips"){
        finalSum=finalSum*0.85
    }else if(numberOfFlowers<120 && typeOfFlowers==="Narcissus"){
       price2=price+price*0.15
       finalSum=price2*numberOfFlowers
    }else if(numberOfFlowers<80&&typeOfFlowers==="Gladiolus"){
        price2=price+price*0.20
        finalSum=price2*numberOfFlowers
    }
    let diff=Math.abs(budget-finalSum)
    if(budget>=finalSum){
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${diff.toFixed(2)} leva left.`)
    }else if(budget<finalSum){
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
newHouse(["Narcissus",
"119",
"360"])








