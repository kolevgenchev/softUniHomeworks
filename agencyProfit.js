function agencyProfit (input){
    let aircompany =(input[0]);
    let numberOfTicketsAdults=Number(input[1]);
    let numberOfTicketsChildren= Number(input[2]);
    let netPriceOfAdultTicket=Number(input[3]);
    let priceOfTaxService=Number(input[4]);
    let childrenTicketPrice =(netPriceOfAdultTicket -(netPriceOfAdultTicket*0.70));
    let childrenTicketPricewithService=childrenTicketPrice+priceOfTaxService;
    let AdultTicketPricewithService=netPriceOfAdultTicket+priceOfTaxService;
    let FinalAdultplusChildrenprice=numberOfTicketsChildren*childrenTicketPricewithService+numberOfTicketsAdults*AdultTicketPricewithService;
    let AgencyProfit=(FinalAdultplusChildrenprice * 0.20).toFixed(2);
    console.log(`The profit of your agency from ${aircompany} tickets is ${AgencyProfit} lv.`)
}
agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12",
    
] )