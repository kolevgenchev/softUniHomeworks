function faceof (input){
    let typeOfFigure= (input[0])
    if (typeOfFigure==="square"){
        let sideOfTriangle =Number(input[1])
        console.log((sideOfTriangle*sideOfTriangle).toFixed(3))
    }
    else if(typeOfFigure==="rectangle"){
     let firstsideOfRectangle=Number(input[1])
     let secondSideOfRectangle=Number(input[2])
     console.log((firstsideOfRectangle*secondSideOfRectangle).toFixed(3))
    }
    else if(typeOfFigure==="circle"){
        let circleRadius=Number(input[1])
        console.log((Math.PI *(circleRadius*circleRadius)).toFixed(3))
    }
    else if (typeOfFigure==="triangle"){
        let sideOfTriangle =Number(input[1])
        let heightOfTriangle=Number(input[2])
        console.log(((sideOfTriangle*heightOfTriangle)/2).toFixed(3))
    }

}
faceof(["triangle", "4.5", "20"]);