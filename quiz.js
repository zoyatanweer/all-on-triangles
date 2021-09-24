const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°","right angled","one-right-angle","25","equilateral","85°","5°","a+b+c","no","45°"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if (value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputEl.innerText = "Your score is " + score;   
}

submitAnswerBtn.addEventListener("click", calculateScore)
