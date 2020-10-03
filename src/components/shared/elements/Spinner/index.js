import React from 'react'
import styles from './index.module.css'

export default () => (
  <div className={styles.SpinnerContainer}>
    <div className={styles.SpinnerYellow}></div>
    <div className={styles.SpinnerRed}></div>
    <div className={styles.SpinnerBlue}></div>
    <div className={styles.SpinnerViolet}></div>
  </div>
)
