import axios from 'axios'
import { AIRTABLE_API_TOKEN } from '../../../helpers/constants'

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appD4uP6UKoSlwyRl',
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${AIRTABLE_API_TOKEN}`
  }
})

export default function deleteBook(bookId) {
  return (
    httpClient.delete(`/Books/${bookId}`).then(result => result.data)
  )
}
