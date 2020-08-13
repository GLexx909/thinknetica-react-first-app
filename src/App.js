import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import ButtonToTop from "./ButtonToTop";
import BookCard from "./BookCard";

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <BookCard />
        <div style={{height: '900px'}}>___</div>
        <ButtonToTop />
        <Footer />
      </>
    )
  }
}

export default App
