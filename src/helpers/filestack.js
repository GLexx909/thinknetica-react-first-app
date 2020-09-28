import axios from 'axios'
import { FILESTACK_API_TOKEN } from "./constants";

const httpClient = axios.create({
  baseURL: 'https://www.filestackapi.com/api',
  timeout: 10000
})

export const uploadFile = (file) => (
  httpClient.post('/store/S3', file, {
    params: {
      key: FILESTACK_API_TOKEN
    }
  }).then(res => { console.log(res); return res.data })
)
