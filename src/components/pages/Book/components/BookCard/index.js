import React from 'react'
import AuthorsList from "./AuthorList/AuthorsList";
import DiscountModal from "./DiscountModal";
import Form from "../../../../shared/elements/Form";
import Row from "../../../../shared/elements/Row";
import Button from "./Subscribe/Button";
import Cover from "./Cover";
import Tags from "./Tags";
import List from "./SimilarBooks/List";
import SubscribeForm from "./Subscribe/Form";
import withLoader from "../../../../shared/HOC/withLoader";
import useBooks from "../../../../shared/hooks/useBooks";
import Layout from '../../../../shared/Layout'
import styles from './BookCard.module.css'
import { Helmet } from 'react-helmet'
import WishButton from "./WishButton";

const BookCard = ({ match: { params } }) => {

  const { books, findBook, otherBooks } = useBooks()

  if (!books)
    return <div>Empty book</div>

  const book = findBook(params.id)
  const otherBooksList = otherBooks(book.id)

  const { title, description, authors, min_price, desired_price, cover, subscribers_count } = book
  const subscribersLimitToPopular = 10

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
          <WishButton book={book}/>
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
      <List books={otherBooksList}/>
    </Layout>
  )
}

export default withLoader(BookCard)
