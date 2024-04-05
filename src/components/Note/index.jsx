import React from 'react'

const TYPE = {
    color: "* Please choose the color first"
}

const Note = ({type}) => {
  return (
    <div style={{ color: 'red' }}>
        <span>{TYPE[type]}</span>
    </div>
  )
}

export default Note