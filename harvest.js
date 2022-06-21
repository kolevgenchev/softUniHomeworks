function harvest(input){
    let areaSqMeters=Number(input[0])
    let grapeForOneSqMeter=Number(input[1])
    let littersNeeded=Number(input[2])
    let numberOfWorkers=Number(input[3])
    let PercentageForWine=areaSqMeters*0.40
    let kgOfGrapeFromTheArea=PercentageForWine*grapeForOneSqMeter
    let littersOfWineProduced=kgOfGrapeFromTheArea/2.5
    let diff =Math.abs(littersNeeded-littersOfWineProduced)
    let WineForWorkers=diff/numberOfWorkers
    if (littersNeeded<=littersOfWineProduced){
        console.log(`Good harvest this year! Total wine: ${Math.floor(littersOfWineProduced)} liters.
        ${Math.ceil(diff)} liters left -> ${Math.ceil(WineForWorkers)} liters per person.`)
        } else if (littersNeeded>littersOfWineProduced){
          console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
        }
}
    harvest(["650","2","175","3"]);