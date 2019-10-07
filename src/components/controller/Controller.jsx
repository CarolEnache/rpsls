import React, { useContext } from 'react';

import { DispatchContext } from '../../App';
import iconsList from '../../Icons/';

function Controller({ disabled }) {
const dispatch = useContext(DispatchContext)
const keys = Object.keys(iconsList);

  const handleClick = (key) => dispatch({ type: 'USER_SELECTION', choice: key});
  const handleClickPlay = () => dispatch({type: 'PLAY'});

  const playButtonText = disabled ? 'Play again' : 'Play';

return (
    <div className="Controller">
      <section className="controller-section">
        {keys.map(key => (
          <button
            disabled={disabled}
            onClick={() => handleClick(key)}
            key={key}
          >
            <img src={iconsList[key]} alt={key}/>
          </button>
        ))}
      </section>
    <button onClick={() => handleClickPlay()}>{playButtonText}</button>
    </div>
  );
}

export default Controller;
