import React from 'react'
import Layout from "../Layout";
import {Helmet} from "react-helmet";
import WishList from "../components/WishList";


const WishListPage = () => {
  return(
    <Layout>
      <Helmet>
        <title>Список желаний</title>
      </Helmet>
      <b>Список желаний</b>
      <WishList />
    </Layout>
  )
}

export default WishListPage
