import React, { useContext } from 'react'
import AuthContext from "../../Contexts/AuthContext";

const UserInfo = () => {
  const au = useContext(AuthContext);

  return (
    au.email
      ? (
          <div style={style.container}>
            <img style={style.img} src={au.avatarUrl} alt=""/>
            <i>{au.email}</i>
          </div>
        )
      : <button>Войти</button>
  )
}

export default UserInfo

const style = {
  container: {
    display: 'flex'
  },
  img: {
    width: '17px',
    height: '17px'
  }
}
