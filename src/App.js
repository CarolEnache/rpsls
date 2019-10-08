import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './like-redux';
import Controller from './components/controller';
import Presentation from './components/presentation';
import Score from './components/score';
import Reset from './components/reset';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    userChoice,
    computerSelection,
    message,
    winner,
    userWins,
    ties,
    computerWins
  } = state;

  console.log(state, message, winner)

  const disabled = message || !computerSelection;
  const showText = !userChoice && computerSelection;

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <Reset />
          <Score
            userWins={userWins}
            ties={ties}
            computerWins={computerWins}
          />
          <Presentation
            message={message}
            userChoice={userChoice}
            computerSelection={computerSelection}
            winner={winner}
          />
          <Controller
            disableButtons={disabled}
            showText={showText}
          />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
