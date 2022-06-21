function calculator (input){
    const deposit = Number(input[0]);
    const duration =Number(input[1]);
    const yearinterest = Number(input[2]);
    const yearsum = (deposit*yearinterest)/100;
    const monthly = (yearsum/12);
    const final = (duration*monthly);
    const finalresult=(deposit + final);
    console.log(finalresult);
}
calculator (["200 ","3 ","5.7 "])