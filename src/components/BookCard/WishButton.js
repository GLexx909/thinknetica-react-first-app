import React, { useContext } from 'react'
import classNames from "classnames/bind";
import styles from "./BookCard.module.css";
import WishlistContext from "../../Contexts/WishlistContext";


const WishButton = ({bookId}) => {
  const { wishes, toggleWishes } = useContext(WishlistContext);

  const isFavorite = wishes.includes(bookId)
  const wishButtonText = isFavorite ? 'Удалить из желаемого' : 'Добавить в желаемое'
  const favoriteButtonClasses = classNames( isFavorite && styles.favoriteButton )

  return (
    <button className={favoriteButtonClasses} onClick={() => toggleWishes(bookId)}>{wishButtonText}</button>
  )
}

export default WishButton
