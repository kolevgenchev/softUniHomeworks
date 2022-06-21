function books (input){
    let pagesInBook =Number(input[0])
    let pagesPerHour=Number (input[1])
    let daysNeededForBook=Number(input[2])
    let pagesPerDay=pagesInBook/daysNeededForBook
    let hoursPerday =pagesPerDay /pagesPerHour
    console.log(hoursPerday)
}

books(["212","20","2"])