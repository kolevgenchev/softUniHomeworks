function delivery (input){
    const chickenmenu = 10.35;
    const fishmenu = 12.40;
    const vegmenu =8.15;
    const chickenorders =Number(input[0]);
    const fishorders =Number(input[1]);
    const vegorders=Number(input[2]);
    const chickenprice =chickenmenu*chickenorders;
    const fishprice =fishmenu*fishorders;
    const vegprice = vegmenu*vegorders;
    const dessert =(chickenprice+fishprice+vegprice)*0.20;
    const deliveryfee = 2.50;
    const finalprice = chickenprice+fishprice+vegprice+dessert+deliveryfee;
    console.log(finalprice);
}
delivery(["2 ",

"4 ",

"3 "])