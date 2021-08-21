const quizForm= document.querySelector(".quiz-form");
const submitBtn= document.querySelector("#submit-button");
const output= document.querySelector("#output-here");
const radio= document.querySelectorAll(".question-container");
const correctAnswers= ["105°","3√2cm","145°","180°","greater","right - angled ","60°","scalene","3 cm, 4 cm, 5 cm","3"];


function calcScore(e){
    e.preventDefault();
    
 var score=0;
 var i=0;
 const formResults= new FormData(quizForm);
 for(var value of formResults.values()){
     if(value === correctAnswers[i]){
        

         score= score+1;
     }
    
     i= i+1;

}

output.innerHTML= "Total Score:" + score;

}
submitBtn.addEventListener("click",calcScore);

