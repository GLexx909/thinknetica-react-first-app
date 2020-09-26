import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../shared/Layout";

const NotFound = () => {
  return(
    <Layout>
      <p>Not Found</p>
      <Link to={'/'}>Go Home!</Link>
    </Layout>
  )
}

export default NotFound
