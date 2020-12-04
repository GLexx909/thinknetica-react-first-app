import React, { useState } from 'react'
import { Link } from "react-router-dom";
import useBooks from "../../../shared/hooks/useBooks";
import { bookPath, editBookPath } from "../../../../helpers/routes";
import deleteBook from '../../../shared/hooks/deleteBook'

const BookList = () => {
  const [deletedBookId, setDeletedBookId] = useState( false )
  const { books } = useBooks(deletedBookId)

  const onDeleteBook = async (bookId) => {
    const res = await deleteBook(bookId)

    if (res.deleted) {
      setDeletedBookId(res.id)
    }
  }

  return (
    <div>
      { deletedBookId && <b> Удалена книга: {deletedBookId}</b> }
      {
        books
          ? books.map((book) => {
            return (
              <p key={book.id}>
                <Link to={bookPath(book.id)}>{book.title}</Link>
                <Link to={editBookPath(book.id)} style={{marginLeft: '10px'}} >Изменить</Link>
                <button onClick={() => onDeleteBook(book.id)} style={{marginLeft: '10px'}} >Удалить</button>
              </p>
            )
          })
          : <p>None</p>
      }
    </div>
  )
}

export default BookList
