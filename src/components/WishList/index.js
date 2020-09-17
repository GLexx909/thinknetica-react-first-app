import React, { useState, useContext } from 'react'
import WishlistContext from "../../Contexts/WishlistContext";
import BookList from "../BookList";

const WishList = () => {
  const { wishes } = useContext(WishlistContext);

  return (
    <BookList wishesBooksIds={wishes} />
  )
}

export default WishList
