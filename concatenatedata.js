function concatenate (input){
    let firstname =(input[0])
    let lastname =(input[1])
    let age = Number(input[2])
    let town = (input[3])
    let result = (`You are ${firstname} ${lastname}, a ${age}-years old person from ${town}.`)
    console.log(result)
}
concatenate(["Bojidar","Genchev",27,"Gabrovo"])