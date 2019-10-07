export const initialState = {
  someState: ''
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'TEST_ACTION':
      return {
        ...state,
        someState: action.payload
      }
    default:
      return state
  }
};