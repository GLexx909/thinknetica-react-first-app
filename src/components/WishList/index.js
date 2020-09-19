import React, { useContext } from 'react'
import WishlistContext from "../../Contexts/WishlistContext";
import BookList from "../BookList";

const WishList = () => {
  const { wishes } = useContext(WishlistContext);

  return (
    <BookList wishesBooks={wishes} />
  )
}

export default WishList
