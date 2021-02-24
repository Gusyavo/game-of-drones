import React from 'react'

function Player({ name, number, score, hidden, onClick }) {

  return (
    <div >
      <span>Player {number}</span>
      <br />
      <span>{name}</span>
      <br />
      <span>Score: {score}</span>
      <br/>
      {hidden ? null : (
        <>
          <button onClick={() => onClick('rock')}>Rock</button>
          <button onClick={() => onClick('paper')}>Paper</button>
          <button onClick={() => onClick('scissors')}>Scissors</button>
        </>
      )}
    </div>
  )
}

export default Player