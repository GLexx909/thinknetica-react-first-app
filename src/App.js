import React from 'react'
import BookCard from "./BookCard";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

class App extends React.Component {
  render() {

    return (
      <>
        <Header />
        <BookCard book={this.props.book}>
          <Form />
        </BookCard>
        <Footer />
      </>
    )
  }
}

export default App
