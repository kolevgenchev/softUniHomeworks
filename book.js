function book(input){
    const pagesinbook =Number(input[0]);
    const pagesperhour =Number(input[1]);
    const days = Number(input[2]);
    const hoursfinal = (pagesinbook / pagesperhour);
    const hoursperday = (hoursfinal / days);
    console.log(hoursperday);
}
book (["212 ","20 ","2 "])