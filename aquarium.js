function aquarium (input){
    const lenght = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percent = Number(input[3])/100;
    const volumeincm = lenght * width * height;
    const volumeinlitters = volumeincm / 1000;
    const finallitters =volumeinlitters-(volumeinlitters*percent);
    console.log(finallitters);
}
aquarium(["85","75","47","17"]);