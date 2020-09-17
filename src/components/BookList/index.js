import React from 'react'
import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks";
import {bookPath} from "../../helpers/routes";

const BookList = ({ wishesBooksIds }) => {
  const books = useBooks()

  const booksAirtable = books || []
  const booksList = wishesBooksIds ? booksAirtable.filter(book => wishesBooksIds.includes(book.id)) : booksAirtable

  return (
    booksList.length
    ? booksList.map((book) => {
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
