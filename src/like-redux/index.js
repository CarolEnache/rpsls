import { choice } from '../utils/computerChoice';

export const initialState = {
  userChoice: '',
  computerChoice: ''
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'TEST_ACTION':
      return {
        ...state,
        userChoice: action.payload
      }
    case 'PLAY':
      return {
        ...state,
        computerChoice: choice()
      }
    default:
      return state
  }
};