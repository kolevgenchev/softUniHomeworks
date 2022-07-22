function wedding (input){
    let lastSector=input[0]
    let numberOfRowsAtSectorOne=Number(input[1])
    let numberOfSeatsAatOddPossition=Number(input[2])
    let numberOfSeatsEvenPossition=numberOfSeatsAatOddPossition+2
    let numberOfPlaces=0
    for(let i="A".charCodeAt(0);i<=lastSector.charCodeAt(0);i++){
        numberOfRowsAtSectorOne++
        for(let h=1;h<numberOfRowsAtSectorOne;h++){
            
            if(h%2===0){
                for(let x=97;x<97+numberOfSeatsEvenPossition;x++){
                console.log(String.fromCharCode(i)+""+h+""+String.fromCharCode(x))
                numberOfPlaces++
                }
            }else if(h%2!==0){
                for(let x=97;x<97+numberOfSeatsAatOddPossition;x++){
                    console.log(String.fromCharCode(i)+""+h+""+String.fromCharCode(x))
                    numberOfPlaces++
            }
            
        }
        
    }
}
console.log(numberOfPlaces)
}
wedding(["B","3","2"])