//start page
const welcomeBox = 
document.querySelector('.welcome')

//play game
const gameBtn =
document.querySelector(".playGame")

//Remember append OL to gamemodal with lists of guessess
const gameModal = 
document.querySelector('.modalGame')

//Guess button 
const guessBtn = 
document.querySelector('.enterGuess')

//when this is pressed, value from input to variable guessInput
let guessInput = guessBtn.addEventListener('click',function(){
    guessInput = parseInt(document.querySelector('.guessField').value)
})

//H3 that gives tips
const cta = 
document.querySelector('.enterNo')

//a number between 1-100
let rng = null 


//Ordered list
const guessList = 
document.querySelector('.guessList')

let guessOne =
document.querySelector(".guessOne")
let guessTwo =
document.querySelector(".guessTwo")
let guessThree =
document.querySelector(".guessThree")
let guessFour =
document.querySelector(".guessFour")
let guessFive =
document.querySelector(".guessFive")

let tooHigh = "(Too High!)"
let tooLow = "(Too Low!)"


//arraycounter
let x = 0

//function to randomize a number between 1-100
function rngNumber() { 
    rng = Math.floor((Math.random() * 100) + 1)
}

//when page loads, hide the modal
window.addEventListener('load', (event) => {
    gameModal.classList.add('hide')
});

//When play game button is pressed, hide background, show modal
gameBtn.addEventListener('click',function(){
    welcomeBox.classList.add('hide')
    gameModal.classList.remove('hide')
    guessOne.classList.add('hide')
    guessTwo.classList.add('hide')
    guessThree.classList.add('hide')
    guessFour.classList.add('hide')
    guessFive.classList.add('hide')
    rngNumber()
})


guessBtn.addEventListener('click',function(){
    if (guessInput > 0 && guessInput < 101) {
        if (guessInput == rng) {
            cta.innerHTML = `<br> ${guessInput} is correct!`
        }
        else if (guessInput > rng) {
            cta.innerHTML = `<br> ${guessInput} is too high, guess lower!`

        //add guess to an array or list
        }   
        else if (guessInput < rng) {
            cta.innerHTML = `<br> ${guessInput} is too low, guess higher!`

        //add guess to an array or list
        }
    }
    else {
        cta.innerHTML = `<br> ${guessInput} is not within 1-100`
    }

if (guessInput > 0 && guessInput < 101 ) {
    if( x > 4 ) {
        cta.innerHTML = `<br> You've guessed too many times!`
}

if (x == 4){
    guessFive.classList.remove('hide')
    if (guessInput < rng) {
        guessFive.innerHTML = guessInput + tooLow
    }
    if (guessInput > rng) {
        guessFive.innerHTML = guessInput + tooHigh
    }
    x++
}

if (x == 3){
    guessFour.classList.remove('hide')
    if (guessInput < rng) {
        guessFour.innerHTML = guessInput + tooLow
    }
    if (guessInput > rng) {
        guessFour.innerHTML = guessInput + tooHigh
    }
    x++
}

    if (x == 2){
        guessThree.classList.remove('hide')
        if (guessInput < rng) {
            guessThree.innerHTML = guessInput + tooLow
        }
        if (guessInput > rng) {
            guessThree.innerHTML = guessInput + tooHigh
        }
        x++
    }

    if (x == 1){
        guessTwo.classList.remove('hide')
        if (guessInput < rng) {
            guessTwo.innerHTML = guessInput + tooLow
        }
        if (guessInput > rng) {
            guessTwo.innerHTML = guessInput + tooHigh
        }
        x++
    }

    if (x == 0){
    guessOne.classList.remove('hide')
    if (guessInput < rng) {
        guessOne.innerHTML = guessInput + tooLow
    }
    if (guessInput > rng) {
        guessOne.innerHTML = guessInput + tooHigh
    }
    x++
    }
}

})

/*     prevGuess.push(guessInput)
    li.textContent = `${prevGuess[x]}`
    guessList.appendChild(li)
    x++ */

    
//array for guesses
/* let prevGuess = [guessOne, guessTwo, guessThree] */


//new list item
/* const li = 
document.createElement('li') */