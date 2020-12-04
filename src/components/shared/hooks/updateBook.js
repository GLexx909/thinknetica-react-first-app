import axios from 'axios'
import { AIRTABLE_API_TOKEN } from '../../../helpers/constants'

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appD4uP6UKoSlwyRl',
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${AIRTABLE_API_TOKEN}`
  }
})

export function updateBook(bookId, fields) {

  console.log(fields)
  // return (
  //   httpClient.patch('/Books', {
  //     records: [
  //       {
  //         id: bookId,
  //         fields
  //       }
  //     ]
  //   }).then(result => result.data)
  // )
}
