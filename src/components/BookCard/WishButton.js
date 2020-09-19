import React, { useContext } from 'react'
import classNames from "classnames/bind";
import styles from "./BookCard.module.css";
import WishlistContext from "../../Contexts/WishlistContext";
import _ from 'lodash'

const WishButton = ({book}) => {
  const { wishes, toggleWishes } = useContext(WishlistContext);

  const isFavorite = _.find(wishes, { 'id': book.id })

  const wishButtonText = isFavorite ? 'Удалить из желаемого' : 'Добавить в желаемое'
  const favoriteButtonClasses = classNames( isFavorite && styles.favoriteButton )

  return (
    <button className={favoriteButtonClasses} onClick={() => toggleWishes(book)}>{wishButtonText}</button>
  )
}

export default WishButton
