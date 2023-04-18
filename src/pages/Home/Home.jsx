import React from 'react'
import Navbar from '../../components/Navbar'
import Announcment from '../../components/Announcment'
import Slider from '../../components/Slider'
import Products from '../../components/Products'
import News from '../../components/News'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Products/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Home
