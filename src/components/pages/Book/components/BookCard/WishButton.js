import React, { useContext } from 'react'
import classNames from "classnames/bind";
import styles from "./BookCard.module.css";
import WishlistContext from "../../../../shared/Contexts/WishlistContext";

const WishButton = ({book}) => {
  const { toggleWishes, isFavorite } = useContext(WishlistContext);

  const bookIsFavorite = isFavorite(book.id)

  const wishButtonText = bookIsFavorite ? 'Удалить из желаемого' : 'Добавить в желаемое'
  const favoriteButtonClasses = classNames({ [styles.favoriteButton]: bookIsFavorite })

  return (
    <button className={favoriteButtonClasses} onClick={() => toggleWishes(book)}>{wishButtonText}</button>
  )
}

export default WishButton
