function summerOutfit(input){
    let degrees=Number(input[0])
    let timeFromDay=input[1]
    let Outfit
    let Shoes
    if (degrees>=10&& degrees<=18){
        switch(timeFromDay){
            case"Morning":Outfit = "Sweatshirt" ,Shoes = "Sneakers";break;
            case"Afternoon":Outfit = "Shirt",Shoes = "Moccasins";break;
            case "Evening":Outfit = "Shirt",Shoes="Moccasins";break;
        }
    }else if(degrees>18 && degrees<=24){
     switch(timeFromDay){
        case"Morning":Outfit = "Shirt" ,Shoes = "Moccasins";break;
        case"Afternoon":Outfit = "T-Shirt",Shoes = "Sandals";break;
        case "Evening":Outfit = "Shirt",Shoes="Moccasins";break;
     }
    }else if (degrees>=25){
        switch(timeFromDay){
            case"Morning":Outfit = "T-Shirt" ,Shoes = "Sandals";break;
            case"Afternoon":Outfit = "Swim Suit",Shoes = "Barefoot";break;
            case "Evening":Outfit = "Shirt",Shoes="Moccasins";break;  
        }
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`)
}
summerOutfit(["16",
"Morning"])
