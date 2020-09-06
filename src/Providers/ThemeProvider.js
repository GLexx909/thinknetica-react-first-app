import React, { useState } from 'react'
import ThemeContext from "../Contexts/ThemeContext";
import styles from '../App.module.css'

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(styles.themeA)

  const changeTheme = () => {
    setTheme( theme === styles.themeA ? styles.themeB : styles.themeA )
  }

  return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
