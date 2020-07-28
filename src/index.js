import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import './index.css'
import AuthContext from "./AuthContext";

const book = {
  "title": "Economy of Stalin",
  "description": "Book about Economy of Stalin",
  "pages_count": 417,
  "language": "RU",
  "progress": 25,
  "cover": "https://ozon-st.cdn.ngenix.net/multimedia/1037906978.jpg",
  "authors_ids": [1, 2, 3, 4],
  "min_price": 250,
  "desired_price": 500,
  "current_sum": 10000,
  "expected_sum": 200000,
  "subscribers_count": 12,
  "authors": [
    {
      "id": 1,
      "name": "Валентин Катасонов",
      "email": "v.katasonov@ya.ru",
      "avatar": "https://communitarian.ru/uploads/post/image/0/15/1547/11062a0e6e786f0622c02eb45e65e3ef.jpg",
      "description": "Russian scientist and economist, doctor of economic Sciences."
    },
    {
      "id": 2,
      "name": "Иван Иванов",
      "email": "v.ivan@ya.ru",
      "avatar": "https://cdn.smartfacts.ru/337451/ivan-ivanov_0.jpg",
      "description": "Великий русский Иван"
    },
    {
      "id": 3,
      "name": "Пётр Петров",
      "email": "v.petr@ya.ru",
      "avatar": "https://kir2016.ru/Historians/0_images_H/Petrov_PN.jpg",
      "description": "Великий русский Пётр"
    },
    {
      "id": 4,
      "name": "Сидор Сидоров",
      "email": "v.sidor@ya.ru",
      "avatar": "https://i11.fotocdn.net/s121/e9ef32f184b339b1/gallery_l/2779470179.jpg",
      "description": "Великий русский Сидор"
    }
  ]
}

const userAgent = {
  email: 'yandex@ya.ru',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  avatarUrl: 'https://a.wattpad.com/cover/197248780-256-k684621.jpg'
}

ReactDOM.render(
  < AuthContext.Provider value={userAgent}>
    <App book={book}/>
  </AuthContext.Provider>,
  document.getElementById('root')
)
