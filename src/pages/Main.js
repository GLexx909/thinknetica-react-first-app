import React from 'react'
import BookList from '../components/BookList'
import Layout from "../Layout";
import {Helmet} from "react-helmet";

const Main = () => {
  return(
    <Layout>
      <Helmet>
        <title>Книжный сервис</title>
      </Helmet>
      <b>Главная страница</b>
      <BookList />
    </Layout>
  )
}

export default Main
