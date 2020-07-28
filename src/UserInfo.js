import React from 'react'
import AuthContext from "./AuthContext";

const UserInfo = () => {
  return (
    <AuthContext.Consumer>
      {
        au => (
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

    </AuthContext.Consumer>
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
