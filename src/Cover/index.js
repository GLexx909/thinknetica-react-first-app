import React from 'react'
import styles from './Cover.module.css'

const Cover = ({url}) => {
  return (
    <div>
      <img className={styles.img} src={ url } alt=""/>
    </div>
  )
}

export default Cover
