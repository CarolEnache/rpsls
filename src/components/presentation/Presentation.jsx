import React from 'react';

import iconsList from '../../Icons';
import './presentation.scss'

const Presentation = ({ message, userChoice, computerSelection, winner }) => {
  const blur = userChoice ? '' : 'blur-image';

  return (
    <div className="presenation">
      <p className={`presenation__message presenation__message--${winner}`}>{message}</p>
      <div className="presenation_image-wrapper">
        <p>you chose</p>
        <img src={iconsList[userChoice]} alt={userChoice} />
      </div>
      <div>
        <p>computer selection</p>
        <img
          src={iconsList[computerSelection]}
          alt=""
          className={blur}
        />
      </div>
    </div>
  );
}

export default Presentation;

