import React from 'react'
import UserInfo from "../../UserInfo";
import styles from './Header.module.css'

class Header extends React.Component {

  render() {

    const {theme, changeTheme} = this.props

    const classes = {
      container: styles.container + ' ' + theme
    }

    return(
      <div className={classes.container}>
        <div>
          <img className={styles.img} src="https://cdn.dribbble.com/users/1860775/screenshots/6550972/s_kitap_logo.png" alt=""/>
          <span className={styles.title}>Книжный Сервис</span>
        </div>
        <UserInfo />
        <button onClick={changeTheme}>Сменить тему</button>
      </div>
    )
  }
}

export default Header
