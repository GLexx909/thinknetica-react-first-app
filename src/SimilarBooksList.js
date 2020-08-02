import React, { useState } from 'react'
import SimilarBookItem from "./SimilarBookItem";

const SimilarBooksList = ({books}) => {
  const [items, setItems] = useState(books.slice(0, 3))

  const onCloseHandle = (bookId) => {
    const oldBooksIds = items.map(book => book.id)
    const newFilteredBook = books.filter(book => !oldBooksIds.includes(book.id))[0]

    const newBooksArray = items.map((book) => {
        if (book.id === bookId ){ return newFilteredBook }
        return book
    })

    setItems(items => newBooksArray)
  }

  console.log('List')

  return (
    <>
      <b>Похожие книги:</b>
      <div style={style.container}>
        {
          items.map(book => <SimilarBookItem
            onCloseHandle={onCloseHandle.bind(this)}
            key={book.id}
            book={book}/>)
        }
      </div>
    </>
  )
}

export default  SimilarBooksList

const style = {
  container: {
    display: 'flex'
  }
}
