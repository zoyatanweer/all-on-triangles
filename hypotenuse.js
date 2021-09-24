const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}
function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(
        Number(sides[0].value),
        Number(sides[1].value)
        );

        if(sumOfSquares==""){ 
           outputEl.innerText ="Please enter all the values";
        }
        else{
            const lengthOfHypotenuse = parseFloat (Math.sqrt(sumOfSquares)).toFixed(2);

            outputEl.innerText = "The hypotenuse is " + lengthOfHypotenuse;
        }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)