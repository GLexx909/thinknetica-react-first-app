import React from 'react'
import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks";
import {bookPath} from "../../helpers/routes";

const BookList = () => {

  const { books } = useBooks()

  return (
    books
    ? books.map((book) => {
      return (
        <p key={book.id}>
          <Link to={bookPath(book.id)}>{book.title}</Link>
        </p>
      )
    })
    : <p>None</p>
  )
}

export default BookList
