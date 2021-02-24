import React, { useState, useEffect } from 'react'
import Player from './Player'
import ScoreTable from './ScoreTable'

function Board({ players, setStage, setPlayers }) {

  const [winnersList, setWinnersList] = useState([])
  const [turn, setTurn] = useState(0)
  const [firstMove, setFirstMove] = useState('')
  const [one, two] = players
  const oneScore = winnersList.filter(winner => winner === one).length
  const twoScore = winnersList.filter(winner => winner === two).length

  useEffect(() => {
    if (oneScore === 3 || twoScore === 3) {
      setPlayers(oneScore === 3 ? one : two)
      setStage('finished')
    }
  }, [oneScore, twoScore])

  const onClick = (move) => {
    if (turn === 0) {
      setFirstMove(move)
      setTurn(1)
    }
    else {
      const secondMove = move
      setTurn(0)
      roundWinnerDecider(firstMove, secondMove)
    }
  }

  const setWinner = (winner) => {
    let result
    if (winner === 2) result = 'Tie'
    else result = players[winner]
    setWinnersList(prevState => [...prevState, result])
  }

  const roundWinnerDecider = (first, second) => {
    if (first === second) setWinner(2)
    else if (first === 'rock') {
      if (second === 'paper') setWinner(1)
      else setWinner(0)
    }
    else if (first === 'paper') {
      if (second === 'rock') setWinner(0)
      else setWinner(1)
    }
    else {
      if (second === 'rock') setWinner(1)
      else setWinner(0)
    }
  }  

  return (
    <div>
      <div className="names-header">
        <Player
          name={one}
          number={'One'}
          score={oneScore}
          onClick={onClick} 
          hidden={turn === 0 ? false : true}
        />
        <div>
          <span>Round {winnersList.length + 1}</span>
          <br />
          <br />
          <span>Player {turn + 1} {players[turn]}</span>
        </div>
        <Player
          name={two}
          number={'Two'}
          score={twoScore}
          onClick={onClick} 
          hidden={turn === 1 ? false : true}
        />
      </div>
      <br /><br />
      <ScoreTable winnersList={winnersList} />
    </div>
  )
}

export default Board