import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <div style={style.container}>
        <div>
          <img style={style.img} src="https://cdn.dribbble.com/users/1860775/screenshots/6550972/s_kitap_logo.png" alt=""/>
        </div>
        <span style={style.title}>Книжный Сервис</span>
      </div>
    )
  }
}

export default Header

const style = {
  container: {
    display: 'flex',
    height: '130px',
    borderBottom: '2px solid black',
    backgroundColor: '#00BFFF'
  },
  img: {
    width: '130px',
    height: 'auto',
  },
  title: {
    fontSize: '30px',
    fontWeight: '600'
  }
}
