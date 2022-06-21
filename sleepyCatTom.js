function sleepyCatTom(input){
    let numberOfDayOff=Number(input[0])
    let numberOfDaysAtWork=365-numberOfDayOff
    let allMinutesPlaying=numberOfDayOff*127+numberOfDaysAtWork*63
    let difference=Math.abs(30000-allMinutesPlaying)
    let differenceInHours=difference/60
    let differenceInMinutes=difference%60
    if(allMinutesPlaying>30000){
       console.log(`Tom will run away
${Math.floor(differenceInHours)} hours and ${(differenceInMinutes)} minutes more for play`)
    }else if (allMinutesPlaying<=30000){
console.log(`Tom sleeps well
${Math.floor(differenceInHours)} hours and ${differenceInMinutes} minutes less for play`)
    }
}
sleepyCatTom(["20"])