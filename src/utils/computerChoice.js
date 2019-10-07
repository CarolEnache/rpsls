function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const computerChoice = (computer) => {
  switch(computer) {
    case 2:
        return "paper"
    case 3:
        return "scissors"
    case 4:
        return "lizard"
    case 5:
        return "spock"
    default:
      return "rock"
  };
}

export const choice = () => computerChoice(randomNumber(1, 5));