function ticketForCinema (input){
    let dayOfWeek=input[0]
    let priceOfTicket=0;
    switch(dayOfWeek){
        case "Monday":priceOfTicket=12;break;
        case "Tuesday":priceOfTicket=12;break;
        case "Wednesday":priceOfTicket=14;break;
        case "Thursday":priceOfTicket=14;break;
        case "Friday":priceOfTicket=12;break;
        case "Saturday":priceOfTicket=16;break;
        case "Sunday":priceOfTicket=16;break;
    }
    console.log(priceOfTicket)
}
ticketForCinema(["Monday"])