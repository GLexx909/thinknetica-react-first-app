import React from 'react'

class AuthorCard extends React.Component {
  render() {
    if (!this.props.author)
      return <div>Empty author</div>

    const { author: { name, email, avatar, description } } = this.props

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
