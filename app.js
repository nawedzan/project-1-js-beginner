const userchoiceDisplay=document.getElementById('userchoice')
const computerchoiceDisplay=document.getElementById('computerchoice')
const possiblechoices=document.querySelectorAll('button')
const resultDisplay=document.getElementById('result')
let userChoice
let computerChoice
let result
possiblechoices.forEach(possiblechoice =>possiblechoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userchoiceDisplay.innerHTML=userChoice
    generatecomputerchoice()
    getresult()
}))

function generatecomputerchoice() {
    const randomNumber = Math.floor(Math.random()*3)+1

    if(randomNumber === 1) computerChoice ='rock'
    if(randomNumber === 2) computerChoice ='paper'
    if(randomNumber === 3) computerChoice ='scissor'
    computerchoiceDisplay.innerHTML = computerChoice

}

function getresult(){
      if (computerChoice === userChoice) {
        result = 'its a draw!'
      }
      if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
      }
      if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
      }
      resultDisplay.innerHTML = result
}