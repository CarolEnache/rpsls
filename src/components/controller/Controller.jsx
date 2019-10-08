import React, { useContext } from 'react';

import { DispatchContext } from '../../App';
import iconsList from '../../Icons/';

import './controller.scss';

function Controller({ disableButtons, showText }) {
const dispatch = useContext(DispatchContext)
const keys = Object.keys(iconsList);

  const handleClick = (key) => dispatch({ type: 'USER_SELECTION', choice: key});
  const handleClickPlay = () => dispatch({type: 'PLAY'});

  const playButtonText = disableButtons ? 'Play again' : 'Play';

return (
    <div className="controller">
      <section className="controller-section">
        {keys.map(key => (
          <button
            disabled={disableButtons}
            onClick={() => handleClick(key)}
            key={key}
          >
            <img src={iconsList[key]} alt={key}/>
          </button>
        ))}
      </section>
      {showText ? <p className="controller__weapon-selection">Choose your weapon</p> : <button onClick={() => handleClickPlay()} className="controller__play-button">{playButtonText}</button>}
    </div>
  );
}

export default Controller;
