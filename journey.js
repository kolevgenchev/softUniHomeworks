function journey (input){
    let budget=Number(input[0])
    let season=input[1]
    let destination
    let campOrHotel
    let price 
    if (budget<=100){
       destination="Bulgaria"
       switch(season){
        case "summer":campOrHotel="Camp",price=budget*0.30;break;
        case "winter":campOrHotel="Hotel",price=budget*0.70;break;
       }
    }else if (budget>100 &&budget<=1000){
        destination="Balkans"
        switch(season){
        case "summer": campOrHotel="Camp",price=budget*0.40;break;
        case "winter":campOrHotel="Hotel",price=budget*0.80;break;
        }
    }else if(budget>1000){
        destination="Europe"
        switch(season){
            case "summer":campOrHotel="Camp",price=budget*0.90
            case "winter":campOrHotel="Hotel",price=budget*0.90
        }
    }
    console.log(`Somewhere in ${destination}
${campOrHotel} - ${price.toFixed(2)}`)
}
journey(["50", "summer"])