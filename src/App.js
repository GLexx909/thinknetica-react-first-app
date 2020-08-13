import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import BookContainer from "./BookContainer";
import ButtonToTop from "./ButtonToTop";

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <BookContainer />
        <div style={{height: '900px'}}>___</div>
        <ButtonToTop />
        <Footer />
      </>
    )
  }
}

export default App
