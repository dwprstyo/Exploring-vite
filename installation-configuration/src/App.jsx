import { useState } from 'react'
import Square from './components/Square'

function App() {
  const totalElement = Array(9).fill(null)

  const handleClick = (props) => {
    console.log(props);
  }

  return (
    <div className='wrapper'>
      {totalElement.map((_, index) => (
        <Square key={index} onSquareClick={() => handleClick(index)} />
      ))}
    </ div>
  )
}

export default App
