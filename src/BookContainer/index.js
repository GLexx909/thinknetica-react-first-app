import React, {Component} from 'react'
import BookCard from "../BookCard";
import axios from 'axios'
import * as _ from 'lodash'
import {stringify} from 'qs'

const API_TOKEN = ''

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appD4uP6UKoSlwyRl',
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

class BookContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null,
      otherBooks: []
    }
  }

  componentDidMount() {
    this._fetch_data()
  }

  _fetch_data() {
    httpClient.get('/Books', {
      params: {
        maxRecords: 5,
        view: 'Grid view',
        sort: [{field: 'id', direction: 'asc'}]
      },
      paramsSerializer: (params) => {
        return stringify(params, { arrayFormat: 'brackets' })
      }
    })
      .then(result => result.data)
      .then(this._mapFromAirtable)
      .then(books => {


        this.setState({
          book: books[0],
          otherBooks: books.slice(1,5)
        })
      })
  }

  _mapFromAirtable(data) {

    const _mapAuthors = (fields) => {

      return _.zip(
        fields["id (from Authors)"],
        fields["name (from Authors)"],
        fields["email (from Authors)"],
        fields["avatar (from Authors)"],
        fields["description (from Authors)"]
      ).map(record => _.zipObject(
        ['id', 'name', 'email', 'avatar', 'description'],
        record
      ))
    }

    return data.records.map(
      record => ({
        id: record.fields.id,
        title: record.fields.title,
        description: record.fields.description,
        pages_count: record.fields.pages_count,
        language: record.fields.language,
        progress: record.fields.progress,
        cover: record.fields.cover,
        min_price: record.fields.min_price,
        desired_price: record.fields.desired_price,
        current_sum: record.fields.current_sum,
        expected_sum: record.fields.expected_sum,
        subscribers_count: record.fields.subscribers_count,
        authors: _mapAuthors(record.fields)
      })
    )
  }

  render() {
    const { book, otherBooks } = this.state

    return (
      book
      ? <BookCard book={book} otherBooks={otherBooks}/>
      : <div>Loading...</div>
    )
  }
}

export default BookContainer
