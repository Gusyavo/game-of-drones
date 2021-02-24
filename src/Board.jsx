import React, { useState, useEffect } from 'react'

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

  const onChange = (event) => {
    const { value } = event.target
    if (turn === 0) {
      setFirstMove(value)
      setTurn(1)
    }
    else {
      const secondMove = value
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

  const scoreTable = winnersList.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Round</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {winnersList.map((winner, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{winner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
      null
    )

  return (
    <div>
      <div className="names-header">
        <div>
          <span>Player One</span>
          <br />
          <span>{one}</span>
          <br />
          <span>Score: {oneScore}</span>
        </div>
        <div>
          <span>Round {winnersList.length + 1}</span>
          <br/>
          <br/>
          <span>Player {turn + 1} {players[turn]}</span>
        </div>
        <div>
          <span>Player Two</span>
          <br />
          <span>{two}</span>
          <br />
          <span>Score: {twoScore}</span>
        </div>
      </div>
      <div>
        <span>Select amove: </span>
        <select value="" onChange={onChange} >
          <option value="" hidden></option>
          <option value="rock">Rock</option>
          <option value="paper">Paper</option>
          <option value="scissors">Scissors</option>
        </select>
      </div>
      <br /><br />
      {scoreTable}
    </div>
  )
}

export default Board