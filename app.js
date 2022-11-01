const welcomeBox = 
document.querySelector('.welcome');
const gameBtn =
document.querySelector(".playGame");

//Remember append OL to gamemodal with lists of guessess
//add an H2 element after h1 with clues
const gameModal = 
document.querySelector('.modalGame');

//Get and store values from this input
const guessInput = 
document.querySelector('.guessField').value;

//when this is pressed, sends value of guessInput compared to a rng
const guessBtn = 
document.querySelector('.enterGuess')

let rng = null; 

function rngNumber() { 
    rng = Math.floor((Math.random() * 100) + 1);
}


window.addEventListener('load', (event) => {
    gameModal.classList.add('hide')
});

gameBtn.addEventListener('click',function(){
    welcomeBox.classList.add('hide')
    gameModal.classList.remove('hide')
})


guessBtn.addEventListener('click',function(){
    rngNumber()
    if (parseInt(guessInput) > 0 && parseInt(guessInput) < 101) {
        if (parse.int(guessInput) == rng) {
        //Add HTML that says it was correct
        }
        else if (parseInt(guessInput) > rng) {
        //Add HTML says you need to guess lower
        //add guess to an array or list
        }   
        else if (parseInt(guessInput) < rng) {
        //add HTML that says guess higher
        //add guess to an array or list
        }
    }
    else {
        console.log('Guess a number  between 1-100')
    }
})
