function yard (input){
    let squareMeters=Number(input[0])
    let FinalYardPrice=(squareMeters * 7.61)
    let discount =FinalYardPrice*0.18
    let FinalPriceWwithDiscount=FinalYardPrice-discount
    console.log(`The final price is: ${FinalPriceWwithDiscount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yard (["550"])

