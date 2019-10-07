import React, { useContext } from 'react';

import { DispatchContext } from '../../App';
import iconsList from '../../Icons/';

function Controller() {
const dispatch = useContext(DispatchContext)
const keys = Object.keys(iconsList);

const handleClick = (key) => {
  dispatch({type: 'TEST_ACTION', payload: key})
}

  return (
    <div className="Controller">
      <section className="controller-section">
        {keys.map(key => (
          <button onClick={() => handleClick(key)}>
            <img src={iconsList[key]} alt={key}/>
          </button>
        ))}
      </section>
    </div>
  );
}

export default Controller;
