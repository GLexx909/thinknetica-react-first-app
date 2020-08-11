import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import BookContainer from "./BookContainer";
import ButtonToTop from "./ButtonToTop";

class App extends React.Component {
  // const book = books[0]
  // const book_id = book.id
  // const otherBooks = books.filter( book => book.id !== book_id)

  constructor(props) {
    super(props);

    this.state = {
      currentHeightPosition: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({
      currentHeightPosition: window.pageYOffset
    })
  }

  render() {
    return (
      <>
        <Header />
        <BookContainer />
        <div style={{height: '900px'}}>___</div>
        {this.state.currentHeightPosition > 200 && <ButtonToTop /> }
        <Footer />
      </>
    )
  }
}

export default App
