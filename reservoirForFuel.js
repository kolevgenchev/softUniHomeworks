function reservoirForFuel(input) {
    let typeOfFuel = input[0]
    let littersInTank = Number(input[1])
    if (littersInTank < 25) {
        switch (typeOfFuel) {
            case "Gasoline": console.log(`Fill your tank with gasoline!`); break;
            case "Diesel": console.log(`Fill your tank with diesel!`); break;
            case "Gas": console.log(`Fill your tank with gas!`); break;
            default: console.log(`Invalid fuel!`)
        }
    } else if (littersInTank >= 25) {
        switch (typeOfFuel) {
            case "Gasoline": console.log(`You have enough gasoline.`); break;
            case "Diesel": console.log(`You have enough diesel.`); break;
            case "Gas": console.log(`You have enough gas.`); break;
            default: console.log(`Invalid fuel!`)
        }
    }
}
reservoirForFuel(["Kerosine", "10"])