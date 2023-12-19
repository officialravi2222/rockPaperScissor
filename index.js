let userValue;
let randomChoice;
let output;
const buttons = document.querySelector(".buttons")


const buttonArray = Array.from(buttons.children)

console.warn("buttonArray>..",buttonArray);


buttonArray.map((btn) => {
    computer();
    btn.addEventListener("click", (e)=>{
        if(e.target.tagName === "BUTTON"){
            userValue = e.target.id;
            console.warn("User Clicked>>",userValue);
        }
        
    })

    if (typeof userValue === "string" && typeof randomChoice === "string") {
        // Concatenate strings
        output = userValue.concat(randomChoice);
        console.log(output); // Output: HelloWorld
      } else {
        console.log("One or both of the values are not strings.");
      }

})

function  computer(){
    const choices = [ "paper", "rock", "scissor"]
    
    randomChoice = choices[Math.floor(Math.random() * choices.length)];    
    console.warn("computer clicked",randomChoice);
}





  console.warn("Output",output);