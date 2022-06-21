function hoodShop(input){
   let product=input[0]
   let city=input[1]
   let quantity=Number(input[2])
   let productPrice=0
   if (city==="Sofia"){
    switch(product){
        case "coffee":productPrice=0.50;break;
        case "water":productPrice=0.80;break;
        case "beer":productPrice=1.20;break;
        case "sweets":productPrice=1.45;break;
        case "peanuts":productPrice=1.60;break;
    }}else if (city==="Plovdiv"){
        switch(product){
        case "coffee":productPrice=0.40;break;
        case "water":productPrice=0.70;break;
        case "beer":productPrice=1.15;break;
        case "sweets":productPrice=1.30;break;
        case "peanuts":productPrice=1.50;break;
        }
    }else if (city==="Varna"){
        switch(product){
            case "coffee":productPrice=0.45;break;
            case "water":productPrice=0.70;break;
            case "beer":productPrice=1.10;break;
            case "sweets":productPrice=1.35;break;
            case "peanuts":productPrice=1.55;break;
    }
   }
   let finalPrice=productPrice*quantity
   console.log(finalPrice)
}
hoodShop(["sweets","Sofia","2.23"])