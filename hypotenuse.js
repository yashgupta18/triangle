const sides= document.querySelectorAll(".entryBox");
var sideA, sideB;
  const Hypotenuse = document.querySelector("#inputhypo");
  const outputDiv= document.querySelector(".formula");
  Hypotenuse  .addEventListener('submit', (e)=>{
      e.preventDefault();
      lengthA = Number(sides[0].value);  
      lengthB = Number(sides[1].value);  
      
      
      outputDiv.innerHTML = Math.sqrt((lengthA*lengthA) + (lengthB*lengthB));
     
  })