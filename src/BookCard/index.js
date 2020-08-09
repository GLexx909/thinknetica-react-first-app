import React from 'react'
import AuthorsList from "../AuthorsList";
import DiscountModal from "../DiscountModal";
import Form from "../Form";
import Row from "./Row";
import SubscribeButton from "../SubscribeButton";
import Cover from "../Cover";
import Tags from "../Tag";
import SimilarBooksList from "../SimilarBooksList";
import SubscribeForm from "../SubscribeForm";

class BookCard extends React.Component {

  render() {

    if (!this.props.book)
      return <div>Empty book</div>

    const subscribersLimitToPopular = 10
    const { book: { title, description, authors, min_price, desired_price, cover, subscribers_count }} = this.props

    return(
      <div>
        <div style={style.container}>
          <div>
            <Cover url={cover} />
            <Tags isPopular={subscribers_count >= subscribersLimitToPopular} />
            <DiscountModal />
          </div>
          <div>
            <Row label='Название'>{title}</Row>
            <Row label='Описание'>{ description }</Row>
            <Row label='Минимальная цена'>{min_price}р.</Row>
            <Row label='Список авторов:'><AuthorsList authors={authors}/></Row>
            <SubscribeForm min_price={min_price} desired_price={desired_price}/>
            <SubscribeButton label="Подписаться на книгу"/>
            <Form />
          </div>
        </div>
        <SimilarBooksList books={this.props.otherBooks}/>
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
