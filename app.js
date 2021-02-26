// GAME VARIABLES
let min = 1,
    max = 10
    winningNum = 2,
    guessesLeft = 3;

// UI SELECTORS
const game = document.querySelector('#game'),
      minNum = document.querySelector('min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// GUESS LISTENER
guessBtn.addEventListener('click', function(){
  // take user entry and convert to int and
  // assign to local variable
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number betweeen ${min} and ${max}`, 'red');
  }

  // test if guess is equal to winning number
  if(guess === winningNum){
    // display game over
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  }else{
    // wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0){
      // game over lose
  
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

    } else {
      // game continues answer wrong
          // change border color
    guessInput.style.borderColor = 'red';

    // clear input
    guessInput.value = '';
    // tell user wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  };
});