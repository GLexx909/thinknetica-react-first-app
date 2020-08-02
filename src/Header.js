import React from 'react'
import UserInfo from "./UserInfo";

class Header extends React.Component {
  render() {
    return(
      <div style={style.container}>
        <div>
          <img style={style.img} src="https://cdn.dribbble.com/users/1860775/screenshots/6550972/s_kitap_logo.png" alt=""/>
          <span style={style.title}>Книжный Сервис</span>
        </div>
        <UserInfo />
      </div>
    )
  }
}

export default Header

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
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
