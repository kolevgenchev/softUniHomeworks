function pets(input){
    let days=Number(input[0])
    let foodLeftForPets=Number(input[1])
    let foodForDog=Number(input[2])
    let foodForCat=Number(input[3])
    let foodForTurtleInGrams=Number(input[4])
    let foodForTurtleInKg=foodForTurtleInGrams/1000
    let allFoodNeeded=(foodForCat+foodForDog+foodForTurtleInKg)*days
    let diff= Math.abs(foodLeftForPets-allFoodNeeded)
    if (allFoodNeeded<=foodLeftForPets){
    console.log(`${Math.floor(diff)} kilos of food left.`)
    } else if (allFoodNeeded>foodLeftForPets)
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
}
pets(["5",
    "10",
    "2.1",
    "0.8",
    "321"]
    )