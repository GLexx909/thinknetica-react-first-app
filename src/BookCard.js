import React, { Children } from 'react'
import AuthorsList from "./AuthorsList";
import DiscountModal from "./DiscountModal";
import Form from "./Form";
import BookInfoRow from "./BookInfoRow";
import SubscribeButton from "./SubscribeButton";
import Cover from "./Cover";
import Tags from "./Tag";

class BookCard extends React.Component {

  render() {

    if (!this.props.book)
      return <div>Empty book</div>

    const subscribersLimitToPopular = 10
    const { book: { title, description, authors, min_price, cover, subscribers_count }} = this.props

    return(
      <div style={style.container}>
        <div>
          <Cover url={cover} />
          <Tags isPopular={subscribers_count >= 10} />
          <DiscountModal />
        </div>
        <div>
          <div><b>Название:</b> { title }</div>
          <div><b>Описание:</b> { description }</div>
          <BookInfoRow label='Минимальная цена'>{min_price}</BookInfoRow>
          <AuthorsList authors={authors}/>
          <SubscribeButton label="Подписаться на книгу"/>
          <Form />
        </div>
      </div>
    )
  }
}

export default BookCard

const style = {
  container: {
    display: 'flex'
  },
  popular_block: {
    backgroundColor: 'gold',
    textAlign: 'center'
  },
  discount: {
    marginTop: '10px',
    cursor: 'pointer',
    border: '2px solid black',
    textAlign: 'center'
  }
}
