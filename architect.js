function architect (input){
    let name = (input[0])
    let projects = (input[1])
    let finalhours= 3* projects
    let finalsentance =(`The architect ${name} will need ${finalhours} hours to complete ${projects} project/s.`)
    console.log(finalsentance)
}
architect(["Bojidar",4])