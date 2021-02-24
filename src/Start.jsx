import { useRef } from 'react'

function Start({ players, setPlayers, setStage }) {
  const errorRef = useRef(null)
  const [one, two] = players

  const onChange = (event) => {
    const { name, value } = event.target
    errorRef.current.innerText = ''
    const playersClone = [...players]
    playersClone[name] = value
    setPlayers(playersClone)
  }

  const startGame = () => {
    if (one.trim() === '') errorRef.current.innerText = `Player one's name is empty`
    else if (two.trim() === '') errorRef.current.innerText = `Player two's name is empty`
    else {
      setStage('started')
    }
  }

  return (
    <>
      <h1>Enter players' names</h1>
      <label>Player one</label>
      <input
        type="text"
        value={one}
        name={0}
        onChange={onChange}
      />
      <br />
      <label>Player two</label>
      <input
        type="text"
        value={two}
        name={1}
        onChange={onChange}
      />
      <br />
      <h5 ref={errorRef} ></h5>
      <br />
      <button
        onClick={startGame}
      >
        Start
      </button>
    </>
  )
}

export default Start