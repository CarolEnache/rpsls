import React, { useContext } from 'react';

import { DispatchContext } from '../../App';

import './reset.scss';


const Reset = () => {
  const dispatch = useContext(DispatchContext)
  const handleClick = () => {
    dispatch({type: 'RESET'})
  }

  return (
    <div className="restart-game">
      <button
        className="restart-game__button"
        onClick={handleClick}
      >
        Restart game
      </button>
    </div>
  )
}

export default Reset;