function priceForTransport(input){
    let kmToTravel=Number(input[0])
    let nightOrDay=input[1]
    let priceForTravel=0;
    if (kmToTravel<20){
        switch(nightOrDay){
            case "night":priceForTravel=kmToTravel*0.90+0.70;break;
            case "day":priceForTravel=kmToTravel*0.79+0.70;break;
        }
    }else if (kmToTravel>=20 && kmToTravel<100){
        priceForTravel=kmToTravel*0.09
        }else if(kmToTravel>=100){
            priceForTravel=kmToTravel*0.06
        }
        console.log(priceForTravel.toFixed(2))
    }
priceForTransport(["7","night"])