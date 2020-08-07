import React from 'react'
import BookCard from "./BookCard";
import Header from "./Header";
import Footer from "./Footer";

const App = ({ books }) =>  {
  const book = books[0]
  const book_id = book.id
  const otherBooks = books.filter( book => book.id !== book_id)

  return (
    <>
      <Header />
      <BookCard book={book} otherBooks={otherBooks}/>
      <Footer />
    </>
  )
}

export default App
