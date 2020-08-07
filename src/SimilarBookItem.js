import React from 'react'

const SimilarBookItem = React.memo(({book, onCloseHandle}) => {
  return (
    <div style={style.container}>
      <div style={style.img_block}>
        <img style={style.img} src={ book.cover } alt=""/>
        <b onClick={() => onCloseHandle(book.id)} style={style.close_x}>X</b>
      </div>
      <div>
        <b>{ book.title }</b>
        <br/>
        { book.authors.map((author) => (
          <p key={author.id} style={style.author}>{author.name}</p>
        ))}
      </div>
    </div>
  )
})

export default SimilarBookItem

const style = {
  container: {
    margin: '15px 5px 5px 5px',
  },
  img_block: {
    position: 'relative'
  },
  img: {
    width: '100px',
    height: 'auto'
  },
  author: {
    margin: '0px'
  },
  close_x: {
    position: 'absolute',
    cursor: 'pointer'
  }
}
