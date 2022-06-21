function genderAge(input) {
    let age = Number(input[0])
    let gender = input[1]
    if (age >= 16) {
        if (gender === "m") {
            console.log("Mr.")
        } if (gender === "f") {
            console.log("Ms.")
        }
    } else if (age < 16) {
        if (gender === "m") {
            console.log("Master")
        } if (gender === "f") {
            console.log("Miss")
        }
    }
}
genderAge(["13.5", "m"])
