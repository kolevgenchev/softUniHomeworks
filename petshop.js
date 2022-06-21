function petshop (input){
    let dogs = Number(input[0])
    let dogsprice = (2.50 * dogs)
    let cats = Number(input[1])
    let catsprice = (4 * cats)
    let catsdogs = (catsprice + dogsprice)
    console.log (catsdogs)
}
petshop(["5","4"])
