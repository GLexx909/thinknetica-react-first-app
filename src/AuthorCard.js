import React from 'react'

class AuthorCard extends React.Component {
  render() {
    if (!this.props.author)
      return <div>Empty author</div>

    const { author: { email, avatar, description } } = this.props

    const name = this.props.author.name || 'Имя отсутствует'

    return(
      <div style={style.container}>
        <div><img style={ style.img } src={ avatar } alt=""/></div>
        <div>
          <div><b>Автор:</b> { name }</div>
          <div><b>Описание:</b> { description }</div>
        </div>
      </div>
    )
  }
}

export default AuthorCard

const style = {
  container: {
    display: 'flex',
    marginTop: '20px'
  },
  img: {
    width: '50px'
  }
}
