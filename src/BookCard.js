import React from 'react'
import AuthorsList from "./AuthorsList";
import DiscountModal from "./DiscountModal";

class BookCard extends React.Component {

  render() {

    if (!this.props.book)
      return <div>Empty book</div>

    const subscribersLimitToPopular = 10
    const { book: { title, description, authors, min_price, cover, subscribers_count } } = this.props

    return(
      <div style={style.container}>
        <div>
          <img style={style.img} src={ cover } alt=""/>
          {
            subscribers_count >= subscribersLimitToPopular &&
            <div style={style.popular_block}>
              <i>Популярная книга</i>
            </div>
          }

          <div style={style.discount}>
            <DiscountModal />
          </div>
        </div>
        <div>
          <div><b>Название:</b> { title }</div>
          <div><b>Описание:</b> { description }</div>
          <div><b>Минимальная цена:</b> { min_price }</div>
          <AuthorsList authors={authors}/>
          <button style={style.subscribe_button}>Подписаться на книгу</button>
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
  img: {
    width: '200px'
  },
  popular_block: {
    backgroundColor: 'gold',
    textAlign: 'center'
  },
  subscribe_button: {
    marginTop: '20px'
  },
  discount: {
    marginTop: '10px',
    cursor: 'pointer',
    border: '2px solid black',
    textAlign: 'center'
  }
}
