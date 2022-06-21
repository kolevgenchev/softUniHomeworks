function invalidNumber (input){
    let number=input[0]
    if (number>0 && number<100 ){
        console.log("invalid")
    } else if(number<0 || number>200){
        console.log("invalid")
    }
}
invalidNumber(["100"])