import React from 'react'
import BookCard from "./BookCard";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {

    return (
      <>
        <Header />
        <BookCard book={this.props.book} />
        <Footer />
      </>
    )
  }
}

export default App
