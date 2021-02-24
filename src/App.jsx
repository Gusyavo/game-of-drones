import React, { useState } from 'react'
import './App.scss'
import Start from './Start'
import Board from './Board'
import End from './End'

function App() {
  const [players, setPlayers] = useState(['lolo', 'mimi'])
  const [stage, setStage] = useState('started')
  let body

  const restartGame = () => {
    setPlayers(['', ''])
    setStage('start')
  }

  switch (stage) {
    case 'start':
      body = <Start players={players} setPlayers={setPlayers} setStage={setStage} />
      break

    case 'started':
      body = <Board players={players} setStage={setStage} setPlayers={setPlayers} />
      break

    case 'finished':
      body = <End restartGame={restartGame} players={players} />
      break

    default:
      break
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Drones</h1>
      </header>
      <main>
        {body}
      </main>
    </div>
  )
}

export default App
