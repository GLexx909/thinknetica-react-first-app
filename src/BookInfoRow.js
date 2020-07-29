import React from 'react'

const BookInfoRow = ({label, children}) => {
  return (
    <div>
      <b>{ label }:</b>
      <i> { children }р. </i>
    </div>
  )
}

export default BookInfoRow
