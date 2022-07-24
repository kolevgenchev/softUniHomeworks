function christmasGifts (input){
    let index=0
    let command=input[index]
    index++
    let adultCount=0
    let kidCount=0
    let moneyForToys=0
    let moneyForSweaters=0
    while(command!=="Christmas"){
        let age=Number(command)
        if(age<=16){
            kidCount++
            moneyForToys+=5
        }else if(age>16){
            adultCount++
            moneyForSweaters+=15
        }
        command=input[index]
        index++
    }
    console.log(`Number of adults: ${adultCount}`)
    console.log(`Number of kids: ${kidCount}`)
    console.log(`Money for toys: ${moneyForToys}`)
    console.log(`Money for sweaters: ${moneyForSweaters}`)


}
christmasGifts(["16","20","46","12","8","20","49","Christmas"])