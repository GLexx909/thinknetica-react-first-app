import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {stringify} from "qs";
import * as _ from "lodash";
import {AIRTABLE_API_TOKEN} from '../../../helpers/constants'

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appD4uP6UKoSlwyRl',
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${AIRTABLE_API_TOKEN}`
  }
})

function _fetch_data(bookId) {

  return (
    httpClient.get(`/Books/${bookId}`, {
      paramsSerializer: (params) => {
        return stringify(params, { arrayFormat: 'brackets' })
      }
    })
      .then(result => result.data)
      .then(_mapFromAirtable)
  )
}

function _mapFromAirtable(data) {

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

  return ({
      id: data.id,
      title: data.fields.title,
      description: data.fields.description,
      pages_count: data.fields.pages_count,
      language: data.fields.language,
      progress: data.fields.progress,
      cover: data.fields.cover,
      min_price: data.fields.min_price,
      desired_price: data.fields.desired_price,
      current_sum: data.fields.current_sum,
      expected_sum: data.fields.expected_sum,
      subscribers_count: data.fields.subscribers_count,
      authors: _mapAuthors(data.fields)
    })
}

const getBook = (bookId) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    _fetch_data(bookId).then(book => {
      setBook(book)
    })
  }, [])

  return book
}

export default getBook
