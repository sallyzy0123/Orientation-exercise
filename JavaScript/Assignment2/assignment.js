const game = () => {
    let pScore = 0;
    let cScore = 0;
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const introTitle = document.querySelector(".intro h1");

    //Start the Game
    const startGame = () => {
        playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        for(const hand of hands) {
            hand.addEventListener('animationend',() => {
                hand.style.animation = '';
            })
        }

        //computer Options
        const computerOptions = ["rock","paper","scissors"];

        for (const option of options){
            option.addEventListener("click",() => {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log('computer number '+ computerNumber);
                console.log('computer choice '+ computerChoice);

                setTimeout(( )=> {
                    //Here is where we call compare hands
                    compareHands(option.textContent,computerChoice);
                    //update Images
                    playerHand.src = `./${option.textContent}.png`;
                    computerHand.src = `./${computerChoice}.png`;
                },2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                console.log(option);
            });
        };
    };

    const winner = document.querySelector('.winner');
    //update the score and game over
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

        //game over when cScore up to 10
        if (cScore === 10) {
            match.classList.remove("fadeIn");
            introScreen.classList.add("fadeIn");
            introTitle.textContent = 'Computer wins the whole game!';
            playBtn.textContent = 'Restart';
            //reset the game
            playBtn.addEventListener('click', () =>{
                const playerScore = document.querySelector('.player-score p');
                const computerScore = document.querySelector('.computer-score p');
                introScreen.classList.remove("fadeIn")
                match.classList.add("fadeIn");
                playerScore.textContent = 0 ;
                computerScore.textContent = 0 ;
                winner.textContent = 'Choose an option';
                pScore = 0;
                cScore = 0;
            })
            return;
        }

        //game over when pScore up to 10
        if (pScore === 10) {
            match.classList.remove("fadeIn");
            introScreen.classList.add("fadeIn");
            introTitle.textContent = 'Player wins the whole game!';
            playBtn.textContent = 'Restart';
            //reset the game
            playBtn.addEventListener('click', () =>{
                const playerScore = document.querySelector('.player-score p');
                const computerScore = document.querySelector('.computer-score p');
                introScreen.classList.remove("fadeIn")
                match.classList.add("fadeIn");
                playerScore.textContent = 0 ;
                computerScore.textContent = 0 ;
                winner.textContent = 'Choose an option';
                pScore = 0;
                cScore = 0;
            })
            return;
        }
    }

    //compare playerChoice and computerChoice
    const compareHands = (playerChoice,computerChoice) => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

        //Check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for Rock
        if(playerChoice === 'rock') {
            if (computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if(playerChoice === 'paper') {
            if (computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
            } else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if(playerChoice === 'scissors') {
            if (computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
            } else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        } 
    }
    startGame();
    playMatch();

};
game()