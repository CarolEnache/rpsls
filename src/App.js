import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './like-redux';
import Controller from './components/controller';


import iconsList from './Icons';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userChoice, computerSelection, message, winner } = state;

  console.log(state, message, winner)

  const blur = userChoice ? '' : 'blur-image';
  const disabled = message || !computerSelection;
  const showText = !userChoice && computerSelection;

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <div className="presenation">
            <div className="presenation_image-wrapper">
              <p>you chose</p>
              <img src={iconsList[userChoice]} alt=""/>
            </div>
            <div>
            <p>computer selection</p>
            <img
              src={iconsList[computerSelection]}
              alt=""
              className={blur}
              />
            </div>
            <p className="presenation__message">{message}</p>
          </div>
          <Controller disableButtons={disabled} showText={showText}/>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
