import React, { useContext } from 'react'
import WishlistContext from "../../Contexts/WishlistContext";
import BookList from "../BookList";
import {Link} from "react-router-dom";
import {bookPath} from "../../helpers/routes";

const WishList = () => {
  const { wishes } = useContext(WishlistContext);

  return (
    wishes
      ? wishes.map((book) => {
        return (
          <p key={book.id}>
            <Link to={bookPath(book.id)}>{book.title}</Link>
          </p>
        )
      })
      : <p>None</p>
  )
}

export default WishList
