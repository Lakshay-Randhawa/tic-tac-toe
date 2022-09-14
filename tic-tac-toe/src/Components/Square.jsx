import React from 'react'
import './Square.css'

function Square({val}) {
  return (
    <div className='square'>
      {val}
    </div>
  )
}

export default Square