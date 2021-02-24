import React from 'react'

function ScoreTable({ winnersList }) {

  const show = winnersList.length === 0 ? false : true

  return (
    <>
      {
        show ? (
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th>Winner</th>
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
        ) : (null)
      }
    </>
  )
}

export default ScoreTable