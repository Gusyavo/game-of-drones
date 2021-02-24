import React from 'react'

function End({ players, restartGame }) {

  return (
    <>
      <div >
        <h2>We have a winner</h2>
        <h3>The winner of this combat is {players}</h3>
      </div>
      <button onClick={() => restartGame()}>New Game</button>
    </>
  )
}

export default End