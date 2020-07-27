import React from 'react'
import AuthorCard from "./AuthorCard";

class BookCard extends React.Component {
  render() {
    if (!this.props.book)
      return <div>Empty book</div>

    const { book: { title, description, author_id, min_price, cover } } = this.props

    return(
      <div style={style.container}>
        <div><img style={style.img} src={ cover } alt=""/></div>
        <div>
          <div><b>Название:</b> { title }</div>
          <div><b>Описание:</b> { description }</div>
          <div><b>Минимальная цена:</b> { min_price }</div>
          <AuthorCard author={this.props.author}/>
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
  subscribe_button: {
    marginTop: '20px'
  }
}
