function tradeCommisions(input){
    let city=input[0]
    let sales=Number(input[1])
    let trueOrFalse
    switch(city){
    case "Sofia":trueOrFalse=true;break;
    case "Varna":trueOrFalse=true;break;
    case "Plovdiv":trueOrFalse=true;break;
    default:trueOrFalse=false;break;
    }
    if(trueOrFalse===false){
      console.log("error")
    }else if(sales<0){
        console.log("error")
    }else if(city==="Sofia"){
        if(sales>=0&&sales<=500){
            console.log((sales*0.05).toFixed(2))
        }else if(sales>500&&sales<=1000){
            console.log((sales*0.07).toFixed(2))
        }else if(sales>1000&&sales<=10000){
            console.log((sales*0.08).toFixed(2))
        }else if (sales>10000){
            console.log((sales*0.12).toFixed(2))
        }
    }else if(city==="Varna"){
        if(sales>=0&&sales<=500){
            console.log((sales*0.045).toFixed(2))
        }else if(sales>500&&sales<=1000){
            console.log((sales*0.075).toFixed(2))
        }else if(sales>1000&&sales<=10000){
            console.log((sales*0.10).toFixed(2))
        }else if(sales>10000){
            console.log((sales*0.13).toFixed(2))
        }

    }else if(city==="Plovdiv"){
        if(sales>=0&&sales<=500){
            console.log((sales*0.055).toFixed(2))
        }else if(sales>500&&sales<=1000){
            console.log((sales*0.08).toFixed(2))
        }else if(sales>1000&&sales<=10000){
            console.log((sales*0.12).toFixed(2))
        }else if(sales>10000){
            console.log((sales*0.145).toFixed(2))
        }
    }
}
tradeCommisions(["Varna", "3874.50"])