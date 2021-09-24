const inputs = document.querySelectorAll(".angle-number");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3 ;
    return sumOfAngles;

}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(
        Number(inputs[0].value) , 
        Number(inputs[1].value),
        Number(inputs[2].value) 
    ) 
    if(sumOfAngles!=""){
        if(sumOfAngles===180){
            outputEl.innerText = "The angles form a triangle !"
        }else{
            outputEl.innerText = "Sorry, the angles don't form a triangle."
        }   
    }else{
        outputEl.innerText ="Please enter all the values";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
