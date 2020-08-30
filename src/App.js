import React from 'react'
import Header from "./shared/Layout/Header";
import Footer from "./shared/Layout/Footer";
import ButtonToTop from "./ButtonToTop";
import BookCard from "./BookCard";
import styles from './App.module.css'
import ThemeContext from "./Contexts/ThemeContext";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: styles.themeA
    }
  }

  changeTheme() {
    this.setState({
      theme: this.state.theme === styles.themeA ? styles.themeB : styles.themeA
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.theme, changeTheme: this.changeTheme.bind(this)}}>
        <Header />
        <BookCard />
        <div style={{height: '900px'}}>___</div>
        <ButtonToTop />
        <Footer />
      </ThemeContext.Provider>
    )
  }
}

export default App
