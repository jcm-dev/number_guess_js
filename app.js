// GAME VARIABLES
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI SELECTORS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// ASSIGN MIN-MAX
// assign the min-max document elements to
// the local min-max variables
// allowing for easy future manipulation
minNum.textContent = min;
maxNum.textContent = max;

// GUESS LISTENER
guessBtn.addEventListener('click', function(){
  // take user entry and convert to int and
  // assign to local variable
  let guess = parseInt(guessInput.value);
  // test if input contains a valid number, and
  // if so test if it is out of range
  // if any of these is true then display the error message
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number betweeen ${min} and ${max}`, 'red');
  }
  // test if guess is equal to winning number
  // and if true then display the game over winning message
  // with the winning number passed in
  if(guess === winningNum){
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  }else{
    // if guess is the wrong number then
    // decrement guessesLeft by 1
    guessesLeft -= 1;
    // if guesses left is equal to 0
    // then the game is over and display the 
    // game over message passing false
    if (guessesLeft === 0){
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
    // if guess left then set the input box
    // border color to red and allow for more guesses
    guessInput.style.borderColor = 'red';
    // clear the input for the user to make another guess
    guessInput.value = '';
    // inform the user they entered the wrong number
    // and how many guesses they have left
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  };
});

// PLAY AGAIN LISTENER
game.addEventListener('mousedown', function(e){
  // test if user wants to play again
  // by checking if the mousedown target
  // contains the class of play-again
  // if so, then reload the window
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// GAME OVER FUNCTION
function gameOver(won, msg){
  // create a local variable to assign
  // colors to
  let color;
  // if function parameter is true
  // then set the local color to green
  // if false set to red
  won === true ? color = 'green' : color = 'red';
  // disable the input indicating the game is over
  guessInput.disabled = true;
    // change border color to reflect the
    // win or loss status
    guessInput.style.borderColor = color;
    // call the setMessage function for
    // win or loss message display
    // passing the msg parameter brought in
    // by parent function
    setMessage(msg, color);
    // reassign the button text to ask the user
    // if they want to play agin and assign the
    // button class to play again to be handled by
    // the mousedown listener
    guessBtn.value = 'Play Again?';
    guessBtn.className += 'play-again';
}

// SET MESSAGE FUNCTION
function setMessage(msg, color){
  // take in a message text and a color
  // and assign them to the message queryselector
  // element
  message.style.color = color;
  message.textContent = msg;
}