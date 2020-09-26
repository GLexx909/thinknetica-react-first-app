import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import ButtonToTop from "./ButtonToTop";
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
