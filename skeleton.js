function skeleton(input){
    let controlMinutes=Number(input[0])
    let controlSeconds=Number(input[1])
    let areaDistanceInMeters=Number(input[2])
    let secondsFor100meters=Number(input[3])
    let HowManyTimes100=areaDistanceInMeters/100
    let areaDistanceInSecondsWithoutSlowing=secondsFor100meters*HowManyTimes100
    let slowingTimes=areaDistanceInMeters/120
    let slowing=slowingTimes*2.5
    let finalTimeSeconds=areaDistanceInSecondsWithoutSlowing-slowing
    let controlMinutesInSeconds=controlMinutes*60
    let controlSecondsToBeat=controlMinutesInSeconds+controlSeconds
    let diff =Math.abs(finalTimeSeconds-controlSecondsToBeat)
    if (finalTimeSeconds<=controlSecondsToBeat){
    console.log(`Marin Bangiev won an Olympic quota!
His time is ${finalTimeSeconds.toFixed(3)}.`)}
        else if(finalTimeSeconds>controlSecondsToBeat){
         console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`)
        }
}
skeleton(["2","12","1200","10"])