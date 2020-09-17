import React, { useContext } from 'react'
import AuthorsList from "../AuthorsList";
import DiscountModal from "../DiscountModal";
import Form from "../Form";
import Row from "./Row";
import Button from "./Subscribe/Button";
import Cover from "../Cover";
import Tags from "../Tags";
import List from "../SimilarBooks/List";
import SubscribeForm from "./Subscribe/Form";
import withLoader from "../HOC/withLoader";
import useBooks from "../hooks/useBooks";
import Layout from '../Layout'
import styles from './BookCard.module.css'
import { Helmet } from 'react-helmet'
import WishlistContext from "../Contexts/WishlistContext";
import classNames from 'classnames/bind'

const BookCard = ({ match: { params } }) => {

  const { wishes, toggleWishes } = useContext(WishlistContext);

  const books = useBooks()

  if (!books)
    return <div>Empty book</div>

  const book = books.find(item => item.id === parseInt(params.id))
  const book_id = book.id
  const otherBooks = books.filter( book => book.id !== book_id)

  const { title, description, authors, min_price, desired_price, cover, subscribers_count } = book
  const subscribersLimitToPopular = 10

  const isFavorite = wishes.includes(book_id)
  const wishButtonText = isFavorite ? 'Удалить из желаемого' : 'Добавить в желаемое'

  const favoriteButtonClasses = classNames( isFavorite && styles.favoriteButton )


  return(
    <Layout>
      <Helmet>
        <title>{book.title}</title>
      </Helmet>
      <div className={styles.container}>
        <div>
          <Cover url={cover} />
          <Tags isPopular={subscribers_count >= subscribersLimitToPopular} />
          <DiscountModal />
          <button className={favoriteButtonClasses} onClick={() => toggleWishes(book_id)}>{wishButtonText}</button>
        </div>
        <div>
          <Row label='Название'>{title}</Row>
          <Row label='Описание'>{ description }</Row>
          <Row label='Минимальная цена'>{min_price}р.</Row>
          <Row label='Список авторов:'><AuthorsList authors={authors}/></Row>
          <SubscribeForm min_price={min_price} desired_price={desired_price}/>
          <Button label="Подписаться на книгу"/>
          <Form />
        </div>
      </div>
      <List books={otherBooks}/>
    </Layout>
  )
}

export default withLoader(BookCard)
