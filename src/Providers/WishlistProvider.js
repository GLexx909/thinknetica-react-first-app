import React, { useState } from 'react'
import WishlistContext from "../Contexts/WishlistContext";

const WishlistProvider = ({children}) => {

  const localWishlistArray = JSON.parse(localStorage.getItem('wishlist') || '[]')

  const [wishes, setWishes] = useState(localWishlistArray)

  const toggleWishes = bookId => {
    const updatedWishes = wishes.includes(bookId)
      ? wishes.filter(item => item !== bookId)
      : wishes.concat(bookId)

    localStorage.setItem('wishlist', JSON.stringify(updatedWishes))
    setWishes(updatedWishes)
  }

  return (
    <WishlistContext.Provider value={{wishes: wishes, toggleWishes: toggleWishes}}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
