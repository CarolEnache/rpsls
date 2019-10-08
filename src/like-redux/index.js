import { choice, findTheWinner } from '../utils';

export const initialState = {
  userChoice: '',
  computerSelection: '',
  userWins: 0,
  computerWins: 0,
  message: ''
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'USER_SELECTION':
    return {
        ...state,
        userChoice: action.choice,
        // message: message,
        userWins: state.userWins +1,
        ...findTheWinner(action.choice, state.computerSelection),
      }
    case 'CEVA':
      return {
        ...state,
        userChoice: '',
        message: action.ceva,
        userWins: state.userWins +1
      }
    case 'PLAY':
      return {
        ...state,
        userChoice: '',
        computerSelection: choice(),
        winner: '',
        message: ''
      }
    default:
      return state
  }
};