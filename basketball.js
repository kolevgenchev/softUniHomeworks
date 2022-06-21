function basket (input){
    const taxperyear=Number(input[0]);
    const shoes =taxperyear -taxperyear * 0.4;
    const equipment= shoes -shoes*0.20;
    const ball =equipment /4;
    const accesoaries = ball /5;
    const finalprice =taxperyear+shoes+equipment+ball+accesoaries;
    console.log(finalprice.toFixed(2))
}
basket(["365 "]);