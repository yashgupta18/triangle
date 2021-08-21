const inputUser= document.querySelectorAll(".entryBox");
const result= document.querySelector(".outputHere");

var totalAngleInput= [];
document.addEventListener("submit", calcAngle)

function calcAngle(e){
    e.preventDefault()
    for(var i=0; i<inputUser.length;i++)
    totalAngleInput[i]= Number(inputUser[i].value)
    var sum=0;
    totalAngleInput.map((angles) =>{
        sum= sum+angles;
    })
    if(sum===180){
        result.innerHTML= "Hey mathemagician these angles make a TRIANGLE!"
    }
    else{
        result.innerHTML="Oops! unfornunately these angles could not sum up to form a triangle";
    }
}
