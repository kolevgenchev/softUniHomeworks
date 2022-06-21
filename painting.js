function painting(input) {
    const plastic = 1.50;
    const paint = 14.50;
    const paintmixer =5;
    const plasticneeded =Number(input[0]);
    const paintneeded =Number(input[1]);
    const paintmixerneeded =Number(input[2]);
    const hoursforworkers =Number(input[3]);
    const addedplastic = plasticneeded +2
    const addedpaint =paintneeded + (paintneeded*0.1);
    const bags = 0.40;
    const paintmixerprice = paintmixerneeded * paintmixer

    const materialssum = (addedplastic * plastic) + (addedpaint * paint) + bags + paintmixerprice
    const workerspay= (materialssum * 0.3)* hoursforworkers;
    const finalsum = materialssum + workerspay;
    console.log(finalsum)
}
painting(["10 ",

"11 ",

"4 ",

"8 "])