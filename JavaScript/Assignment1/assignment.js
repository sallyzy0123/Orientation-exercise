/**
Orientation - JavaScript assignment 1
Solution by: Ying 
*/

const coinImage = document.querySelector('#coin-image');
let resultParagraph = document.querySelector('#result');
let userArray = [];
let coinArray = [];
let win = 0;
let head = 0;
let reverse = 0;

function throwTheCoin () {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  console.log('user choice is ', userChoice);
  userArray.push(userChoice);
  console.log('user choice array is ', userArray);
  let num = Math.random()
  console.log('the randon number is ', num);
  if (num < 0.5){
    coinImage.src = "head.png";
    coinImage.value = "head";
    coinChoice = coinImage.value;
    coinArray.push(coinChoice);
    console.log('coin array is ', coinArray);
    head++ ;
    console.log('amount of head is ', head);
    if (userChoice == coinChoice) {
      resultParagraph.textContent = "You win!";
      win++ ;
      console.log('amount of win is ', win);
    } else {
      resultParagraph.textContent = "You lose!";
    }
  } else {
    coinImage.src = "reverse.png";
    coinImage.value = "reverse";
    coinChoice = coinImage.value;
    coinArray.push(coinChoice);
    console.log('coin array is ', coinArray);
    reverse++ ;
    console.log('amount of reverse is', reverse);
    if (userChoice == coinChoice) {
      resultParagraph.textContent = "You win!";
      win++ ;
      console.log('amount of win is', win);
    } else {
      resultParagraph.textContent = "You lose!";
    }
  }
  const winCount = document.querySelector('#win-count');
  winCount.textContent = win;
  const resultHistory = document.querySelector('#result-history');
  resultHistory.textContent = "user history is " + userArray + ", and coin history is " + coinArray;
  const headCount = document.querySelector('#head-count');
  headCount.textContent = `${head}`;
  const reverseCount = document.querySelector('#reverse-count');
  reverseCount.textContent = `${reverse}`;
  
  return userChoice;
}

const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', throwTheCoin);

