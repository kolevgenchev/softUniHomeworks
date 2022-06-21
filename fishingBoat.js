function fishingBoat (input){
    let budget=Number(input[0])
    let season =input[1]
    let fishers=input[2]
    let priceOfBoat
    switch(season){
        case "Spring":priceOfBoat=3000;break;
        case "Summer":priceOfBoat=4200;break;
        case "Autumn":priceOfBoat=4200;break;
        case "Winter":priceOfBoat=2600;break;
    }
    if (fishers<=6){
        priceOfBoat=priceOfBoat*0.90
    }else if(fishers>6&&fishers<=11){
      priceOfBoat=priceOfBoat*0.85
    }else if(fishers>=12){
        priceOfBoat=priceOfBoat*0.75
    }
    if(fishers%2===0&&season!=="Autumn"){
priceOfBoat=priceOfBoat*0.95
    }
    let diff=Math.abs(priceOfBoat-budget)
    if (budget>=priceOfBoat){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else if (budget<priceOfBoat){
console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["3600",
"Autumn",
"6"])

