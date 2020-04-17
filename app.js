const game = () =>{
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn =document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        
        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
            this.style.animation = "";
        });
      });

        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];
    
        options.forEach(option => {
          option.addEventListener("click", function() {
            //   console.log(this);
            //Computer Choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            // console.log(computerChoice);

            setTimeout(() => {
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
              }, 2000);
           
           //updating  images after shuffle
           playerHand.src = `./assets/${this.textContent}.png`;
           computerHand.src = `./assets/${computerChoice}.png`;
         
           //animation
           playerHand.style.animation = "shakePlayer 2s ease";
           computerHand.style.animation = "shakeComputer 2s ease";
          });
        });
      };
    //updating player scores and computer scores
      const updateScore = () => {
          const playerScore = document.querySelector('.player-score p');
          const computerScore = document.querySelector('.computer-score p');
          playerScore.textContent =pScore;
          computerScore.textContent = cScore;
      }

      const compareHands = (playerChoice, computerChoice) =>{
          //update winner text
          const winner = document.querySelector('.winner');
          //checking for a tie 
          if(playerChoice === computerChoice){
              winner.textContent = 'It is a tie';
              return;
          }
          //checking for a rock 
          if(playerChoice === 'rock'){
              if(computerChoice === 'scissors'){
                  winner.textContent = 'Player wins';
                  pScore++;
                  updateScore();
                  return;
              }else {
                  winner.textContent = 'Computer wins';
                  cScore++;
                  updateScore();
                  return;
              }
          }
          //checking for paper
          if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //checking for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }

      }
    //call all the inner functions
    startGame();
    playMatch();

};

//start the game function
game();