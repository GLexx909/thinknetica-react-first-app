import React, { useContext } from 'react'
import UserInfo from "./UserInfo/UserInfo";
import styles from './Header.module.css'
import ThemeContext from "../Contexts/ThemeContext";
import classNames from 'classnames/bind'
import {Link} from "react-router-dom";
import {newBookPath} from "../../../helpers/routes";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const containerClasses = classNames(styles.container, theme)

  return(
    <div className={containerClasses}>
      <div className={styles.navLinks}>
        <img className={styles.img} src="https://cdn.dribbble.com/users/1860775/screenshots/6550972/s_kitap_logo.png" alt=""/>
        <Link to={`/`}>
          <span className={styles.title}>Книжный Сервис</span>
        </Link>
        <Link to={`/wishlist`}>
          <span className={styles.title}>Желаемое</span>
        </Link>
        <Link to={newBookPath()}>
          <span className={styles.title}>Создать Новую книгу</span>
        </Link>
      </div>
      <UserInfo />
      <button onClick={changeTheme}>Сменить тему</button>
    </div>
  )
}

export default Header
