import React from 'react'
import Header from "./shared/Layout/Header";
import Footer from "./shared/Layout/Footer";
import ButtonToTop from "./ButtonToTop";
import BookCard from "./BookCard";
import ThemeProvider from "./Providers/ThemeProvider";

class App extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <Header />
        <BookCard />
        <div style={{height: '900px'}}>___</div>
        <ButtonToTop />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default App
