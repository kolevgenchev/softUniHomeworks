function ani(input){
    const pensets =Number(input[0]);
    const marksets =Number(input[1]);
    const literscleaner =Number(input[2]);
    const percentoff =Number(input[3]);
    const pensetsprice= pensets*5.80;
    const markersprice= marksets*7.20;
    const cleanerprice=literscleaner*1.20;
    const finalwithoutoff = pensetsprice+markersprice+cleanerprice;
    const off1 = percentoff*0.01;
    const off2 =finalwithoutoff * off1;
    const finalresult = finalwithoutoff - off2;
    console.log(finalresult.toFixed(2));

}
ani(["2 ","3 ","4 ","25 "])