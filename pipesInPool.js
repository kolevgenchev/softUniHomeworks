function pipesInPool (input){
    let volume=Number(input[0])
    let FirstPipeDebitPerHour=Number(input[1])
    let SecondPipeDebitPerHour=Number(input[2])
    let HoursForWorkerToBeOut=Number(input[3])
    let LittersFueled=FirstPipeDebitPerHour*HoursForWorkerToBeOut+SecondPipeDebitPerHour*HoursForWorkerToBeOut
    let percentageFull=LittersFueled*100 / volume
    let LittersOverFueled=LittersFueled-volume
    let littersFromFirstPipe=FirstPipeDebitPerHour*HoursForWorkerToBeOut
    let littersFromSecondPipe=SecondPipeDebitPerHour*HoursForWorkerToBeOut
    let FirstPipePercentage=(littersFromFirstPipe*100) /LittersFueled
    let SecondPipePercentage=(littersFromSecondPipe*100) /LittersFueled
    if (LittersFueled<=volume){
    console.log(`The pool is ${percentageFull.toFixed(2)}% full. Pipe 1: ${FirstPipePercentage.toFixed(2)}%. Pipe 2: ${SecondPipePercentage.toFixed(2)}%.`)
    } else if (LittersFueled>volume){
    console.log(`"For ${HoursForWorkerToBeOut} hours the pool overflows with ${LittersOverFueled.toFixed(2)} liters."`)}
}
pipesInPool(["100","100","100","2.5"])