import React from 'react'
import Header from "../shared/Layout/Header";
import Footer from "../shared/Layout/Footer";
import ButtonToTop from "../ButtonToTop";
import ThemeProvider from "../Providers/ThemeProvider";

const Layout = ({children}) => {

  return(
    <ThemeProvider>
      <Header />
      { children }
      <div style={{height: '900px'}}>___</div>
      <ButtonToTop />
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
