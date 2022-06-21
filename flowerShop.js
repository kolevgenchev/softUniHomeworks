function flowerShop(input){
    let numberOfMangnolias=Number(input[0])
    let numberOfZiumbiul=Number(input[1])
    let numberOfRoses=Number(input[2])
    let numberOfCactus=Number(input[3])
    let priceOfTheGift=Number(input[4])
    let sumOfFlowers=numberOfMangnolias*3.25+numberOfCactus*8+numberOfRoses*3.50+numberOfZiumbiul*4
    let sumAfterTax=sumOfFlowers*0.95
    let diff=Math.abs(sumAfterTax-priceOfTheGift)
    if(sumAfterTax>=priceOfTheGift){
console.log(`She is left with ${Math.floor(diff)} leva. `)
    } else if(sumAfterTax<priceOfTheGift){
  console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }
}
flowerShop(["2","3","5","1","50"])