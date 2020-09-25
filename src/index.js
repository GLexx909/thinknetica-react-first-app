import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import './index.css'
import AuthContext from "./components/shared/Contexts/AuthContext";
import WishlistProvider from "./components/shared/Providers/WishlistProvider";

const currentUser = {
  email: 'yandex@ya.ru',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  avatarUrl: 'https://a.wattpad.com/cover/197248780-256-k684621.jpg'
}

ReactDOM.render(
  <WishlistProvider>
    < AuthContext.Provider value={currentUser}>
      <App />
    </AuthContext.Provider>
  </WishlistProvider>,
  document.getElementById('root')
)
