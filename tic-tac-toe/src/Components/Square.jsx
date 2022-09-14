import React from 'react'
import './Square.css'

function Square({val,handleClick }) {
  return (
    <div className='square' onClick={handleClick}>
      {val }
    </div>
  )
}

export default Square