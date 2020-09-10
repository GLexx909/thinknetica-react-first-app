import React from 'react'
import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

const BookList = () => {
  const books = useBooks()
  console.log(books)

  return (
    books !== null
    ? books.map((book) => {
      return (
        <p key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </p>

      )
    })
    : <p>None</p>
  )
}

export default BookList
