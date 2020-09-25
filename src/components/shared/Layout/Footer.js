import React, { useContext } from 'react'
import styles from './Footer.module.css'
import ThemeContext from "../Contexts/ThemeContext";
import classNames from 'classnames/bind'

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const containerClasses = classNames(styles.container, theme)

  return(
    <div className={containerClasses}>
      <div className={styles.img_container}>
        <img className={styles.img} src="https://im0-tub-ru.yandex.net/i?id=4a20ee9a3d10c4e69a7385ad3ea0581e&n=13" alt=""/>
      </div>
      <span className={styles.title}>Книжный Сервис. Все права защищены </span>
    </div>
  )
}

export default Footer
