import React from 'react'
import Layout from '../Component/Layout'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import banner from "../images/banner.jpg"
import "../styles/Home.css"

const Home = () => {
  return (
    <Layout>
   <div className='home-pg' style={{backgroundImage:`url(${banner})`}}>
    <div className='home-food'>
       <h1>Food Website</h1>
       <p>Best Food in India</p>
       <Link to="/menu">
        <Button>Order Now</Button>
       </Link>
    </div>
   </div>
  </Layout>
  )
}

export default Home