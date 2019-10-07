import React, { useContext } from 'react';

import { DispatchContext } from '../../App';
import iconsList from '../../Icons/';

function Controller() {
const dispatch = useContext(DispatchContext)
const keys = Object.keys(iconsList);

const handleClick = (key) => {
  dispatch({type: 'TEST_ACTION', payload: key})
}

const handleClickPlay = () => {
  dispatch({type: 'PLAY'})
}

// console.log(state)
  return (
    <div className="Controller">
      <section className="controller-section">
        {keys.map(key => (
          <button onClick={() => handleClick(key)} key={key}>
            <img src={iconsList[key]} alt={key}/>
          </button>
        ))}
      </section>
      <button onClick={() => handleClickPlay()}>Play</button>
    </div>
  );
}

export default Controller;
