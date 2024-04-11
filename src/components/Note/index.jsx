import React from 'react'

const TYPE = {
  color: "* Please choose the color first",
  flashsale: "* Please choose the start day and end day first",

}

const Note = ({ type }) => {
  return (
    <div style={{ color: 'red' }}>
      <span>{TYPE[type]}</span>
    </div>
  )
}

export default Note