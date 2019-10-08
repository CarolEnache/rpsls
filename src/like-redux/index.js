import { choice, findTheWinner } from '../utils';

export const initialState = {
  userChoice: '',
  computerSelection: '',
  userWins: 0,
  computerWins: 0,
  ties: 0,
  message: ''
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'USER_SELECTION':
    const { winner } = findTheWinner(action.choice, state.computerSelection)
    return {
        ...state,
        userChoice: action.choice,
        ...findTheWinner(action.choice, state.computerSelection),
        [winner]: state[winner] + 1
      }
    case 'PLAY':
      return {
        ...state,
        userChoice: '',
        computerSelection: choice(),
        winner: '',
        message: ''
      }
    case 'RESET':
      return {
        ...state,
        userWins: 0,
        computerWins: 0,
        ties: 0
      }
    default:
      return state
  }
};