import React from 'react'
import styles from './Tags.module.css'

const Tags = ({isPopular}) => {
  return (
    <>
      {
        isPopular &&
        <div className={styles.popular_block}>
          <i>Популярная книга</i>
        </div>
      }
    </>
  )
}

export default Tags
