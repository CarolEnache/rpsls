import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './like-redux';
import { findTheWinner } from './utils';
import Controller from './components/controller';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userChoice, computerSelection } = state;
  const { message, winner } = findTheWinner(userChoice, computerSelection)

  console.log(state, message, winner)


  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <p>{message}</p>
          <Controller disabled={message}/>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
