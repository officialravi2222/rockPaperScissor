const buttons = document.querySelector(".buttons")

const buttonArray = Array.from(buttons.children)

// console.warn(buttons);
console.warn("buttonArray>..",buttonArray);

let userValue;
let randomChoice;

let output;


function  computer(){
    const choices = [ "paper", "rock", "scissor"]
    
    randomChoice = choices[Math.floor(Math.random() * choices.length)];    
    console.warn("random choices",randomChoice);
}

computer();


buttonArray.map((btn) => {
    btn.addEventListener("click", (e)=>{
        if(e.target.tagName === "BUTTON"){
            userValue = e.target.id;
            console.warn(userValue);
        }
    })
    console.log(output); // Output: HelloWorld

})

    // buttons.addEventListener("click", (e)=>{
    //     if(e.target.tagName === "BUTTON"){
    //         userValue = e.target.id;
    //         console.warn(userValue);
    //     }
    // })





if (typeof userValue === "string" && typeof randomChoice === "string") {
    // Concatenate strings
    output = userValue.concat(randomChoice);
    console.log(output); // Output: HelloWorld
  } else {
    console.log("One or both of the values are not strings.");
  }
// output = userValue.concat(randomChoice)  ;
// console.warn("conscat>>",typeof output)

console.warn("sum>>",userValue , randomChoice);


// function result(){

// switch(userValue){

//     case (rock)
// }
// }