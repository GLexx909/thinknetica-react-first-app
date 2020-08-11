import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import BookContainer from "./BookContainer";

const App = ({ books }) =>  {
  // const book = books[0]
  // const book_id = book.id
  // const otherBooks = books.filter( book => book.id !== book_id)

  return (
    <>
      <Header />
      <BookContainer />
      <Footer />
    </>
  )
}

export default App
