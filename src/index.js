import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import './index.css'

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
  "subscribers_count": 12
}

ReactDOM.render(
  <App book={book}/>,
  document.getElementById('root')
)
