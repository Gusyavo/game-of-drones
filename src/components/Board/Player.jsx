import React from 'react'

function Player({ name, number, score, hidden, chooseMove }) {

  return (
    <div>
      <span>Player {number}</span>
      <span>{name}</span>
      <span>Score: {score}</span>
      {hidden ? null : (
        <>
          <button onClick={() => chooseMove('rock')}>Rock</button>
          <button onClick={() => chooseMove('paper')}>Paper</button>
          <button onClick={() => chooseMove('scissors')}>Scissors</button>
        </>
      )}
    </div>
  )
}

export default Player