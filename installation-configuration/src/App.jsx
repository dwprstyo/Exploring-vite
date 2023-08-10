import { useState } from 'react'
import Square from './components/Square'

function App() {
  const totalElement = Array(9).fill(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (props) => {
    const nextSquares = squares.slice();
    if (squares[props] !== null) {
      alert("udah keisi")
      return
    }
    xIsNext == true ? nextSquares[props] = 'X' : nextSquares[props] = 'O';
    setSquares(nextSquares);
    xIsNext == true ? setXIsNext(false) : setXIsNext(true);

  };

  return (
    <div className='wrapper'>
      {totalElement.map((_, index) => (
        <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
      ))}
    </ div>
  )
}

export default App
