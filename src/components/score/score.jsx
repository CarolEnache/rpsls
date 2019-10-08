import React from 'react';
import './score.scss';

const Score = ({ userWins, ties, computerWins}) => {
  return (
    <div className="score">
      <h3 className="score__title">Score</h3>
      <div className="score__players">
        <p className="score__palyer">Player<br />{userWins}</p>
        <p className="score__palyer">Ties<br />{ties}</p>
        <p className="score__palyer">Computer<br />{computerWins}</p>
      </div>
    </div>
  )
}

export default Score;