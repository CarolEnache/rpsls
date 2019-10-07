import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './like-redux';

import Controller from './components/controller';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <Controller />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
