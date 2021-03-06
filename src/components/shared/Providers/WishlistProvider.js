import React, { useState } from 'react'
import WishlistContext from "../Contexts/WishlistContext";
import _ from "lodash";

const WishlistProvider = ({children}) => {

  const localWishlistArray = JSON.parse(localStorage.getItem('wishlist') || '[]')
  const [wishes, setWishes] = useState(localWishlistArray)

  const toggleWishes = book => {
    const updatedWishes = isFavorite(book.id)
      ? wishes.filter(item => item.id !== book.id)
      : wishes.concat(book)

    localStorage.setItem('wishlist', JSON.stringify(updatedWishes))
    setWishes(updatedWishes)
  }

  const isFavorite = bookId => {
    return Boolean(_.find(wishes, { 'id': bookId }))
  }

  return (
    <WishlistContext.Provider value={{wishes: wishes, toggleWishes: toggleWishes, isFavorite: isFavorite}}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
