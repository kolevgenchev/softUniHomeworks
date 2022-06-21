function workingHours (input){
let hour =Number(input[0])
let dayOfWeek=input[1]
switch(dayOfWeek){
    case "Monday":if (hour>=10 && hour<=18){console.log("open")}else if(hour<10||hour>18){console.log("closed")};break;
    case "Tuesday":if (hour>=10 && hour<=18){console.log("open")}else if(hour<10||hour>18){console.log("closed")};break;
    case "Wednesday":if (hour>=10 && hour<=18){console.log("open")}else if(hour<10||hour>18){console.log("closed")};break;
    case "Thursday":if (hour>=10 && hour<=18){console.log("open")}else if(hour<10||hour>18){console.log("closed")};break;
    case "Friday":if (hour>=10 && hour<=18){console.log("open")}else if(hour<10||hour>18){console.log("closed")};break;
    case "Saturday":if (hour>=10 && hour<=18){console.log("open")}else if(hour<10||hour>18){console.log("closed")};break;
    case "Sunday":console.log("closed");break;
}
}
workingHours(["11","Sunday"])
