const result = (userChoice, computerSelection) => {
  let message;
  let winner;
  if (computerSelection !== '' && computerSelection === userChoice) {
    message = 'Tie!';
    winner = 'tie';
  } else if (computerSelection === 'rock') {
    if (userChoice === 'paper') {
      //rock vs paper
      message = 'Paper covers rock! You win!';
      winner = 'userWins';
    } else if (userChoice === 'scissors') {
      //rock vs scissors
      message = 'Rock crushes scissors! You lose!';
      winner = 'computerWins';
    } else if (userChoice === 'lizard') {
      //rock vs lizard
      message = 'Rock crushes lizard! You lose!';
      winner = 'computerWins';
    } else if (userChoice === 'spock') {
      //rock vs spock
      message = 'Spock vaporizes rock! You win!';
      winner = 'userWins';
    }
  } else if (computerSelection === 'paper') {
    if (userChoice === 'rock') {
      //paper vs rock
      message = 'Paper covers rock! You lose!';
      winner = 'computerWins';
    } else if (userChoice === 'scissors') {
      //paper vs scissors
      message = 'Scissors cuts paper! You win!';
      winner = 'userWins';
    } else if (userChoice === 'lizard') {
      //paper vs lizard
      message = 'Lizard eats paper! You win!';
      winner = 'userWins';
    } else if (userChoice === 'spock') {
      //paper vs spock
      message = 'Paper disproves spock! You lose!';
      winner = 'computerWins';
    }
  } else if (computerSelection === 'scissors') {
    if (userChoice === 'rock') {
      //scissors vs rock
      message = 'Rock crushes scissors! You win!';
      winner = 'userWins';
    } else if (userChoice === 'paper') {
      //scissors vs paper
      message = 'Scissors cuts paper! You lose!';
      winner = 'computerWins';
    } else if (userChoice === 'lizard') {
      //scissors vs lizard
      message = 'Scissors decapitate lizard! You lose!';
      winner = 'computerWins';
    } else if (userChoice === 'spock') {
      //scissors vs spock
      message = 'Spock smashes scissors! You win!';
      winner = 'userWins';
    }
  } else if (computerSelection === 'lizard') {
    if (userChoice === 'rock') {
      //lizard vs rock
      message = 'Rock crushes lizard! You win!';
      winner = 'userWins';
    } else if (userChoice === 'paper') {
      //lizard vs paper
      message = 'Lizard eats paper! You win!';
      winner = 'userWins';
    } else if (userChoice === 'scissors') {
      //lizard vs scissors
      message = 'Scissors decapitate lizard! You win!';
      winner = 'userWins';
    } else if (userChoice === 'spock') {
      //lizard vs spock
      message = 'Lizard poisons spock! You lose!';
      winner = 'computerWins';
    }
  } else if (computerSelection === 'spock') {
    if (userChoice === 'rock') {
      //spock vs rock
      message = 'Spock vaporizes rock! You lose!';
      winner = 'computerWins';
    } else if (userChoice === 'paper') {
      //spock vs paper
      message = 'Paper disproves spock! You win!';
      winner = 'userWins';
    } else if (userChoice === 'scissors') {
      //spock vs scissors
      message = 'Spock smashes scissors! You lose!';
      winner = 'computerWins';
    } else if (userChoice === 'lizard') {
      //spock vs lizard
      message = 'Lizard poisons spock! You win!';
      winner = 'userWins';
    }
  }

  return { message, winner };
}

export const findTheWinner = (userChoice, computerSelection) => result(userChoice, computerSelection);
