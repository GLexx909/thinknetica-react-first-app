import React from 'react'
import styles from './Footer.module.css'

class Footer extends React.Component {

  render() {

    const {theme, changeTheme} = this.props

    const classes = {
      container: styles.container + ' ' + theme
    }


    return(
      <div className={classes.container}>
        <div className={styles.img_container}>
          <img className={styles.img} src="https://im0-tub-ru.yandex.net/i?id=4a20ee9a3d10c4e69a7385ad3ea0581e&n=13" alt=""/>
        </div>
        <span className={styles.title}>Книжный Сервис. Все права защищены </span>
      </div>
    )
  }
}

export default Footer
