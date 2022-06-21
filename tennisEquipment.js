function tennisEquipment (input){
let priceForTennisRocket=Number(input[0])
let numberOfTennisRockets=Number(input[1])
let NumberOfSetsOfShoes =Number(input[2])
let priceOfShoesPerSet=priceForTennisRocket/6
let rocketsPrice=priceForTennisRocket*numberOfTennisRockets
let shoesPrice=priceOfShoesPerSet*NumberOfSetsOfShoes
let rocketsPlusShoes=rocketsPrice+shoesPrice
let otherEquipment=rocketsPlusShoes*0.20
let FinalPrice=rocketsPlusShoes+otherEquipment
let priceByDjokovic= (FinalPrice/8)
let priceBySponsors= (priceByDjokovic*7)
console.log(`Price to be paid by Djokovic ${Math.floor(priceByDjokovic)}`)
console.log(`Price to be paid by sponsors ${Math.ceil(priceBySponsors)}`)
}
tennisEquipment(["386","7","4"])
