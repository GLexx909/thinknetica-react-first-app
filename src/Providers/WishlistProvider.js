import React, { useState } from 'react'
import WishlistContext from "../Contexts/WishlistContext";

const WishlistProvider = ({children}) => {

  const localWishlistArray = JSON.parse(localStorage.getItem('wishlist') || '[]')
  const [wishes, setWishes] = useState(localWishlistArray)

  const toggleWishes = book => {
    const updatedWishes = wishes.includes(book)
      ? wishes.filter(item => item !== book)
      : wishes.concat(book)

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
