function radians (input){
    const radian = Number(input[0])
    const degrees = Number((radian * 180)/Math.PI)
    console.log (degrees.toFixed(2))
}
radians(["6.2832"])