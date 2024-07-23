import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Background from '../components/Background';


const Homepage = () => {
  // let background = getHomePageClass();
  return (
    <section className={`min-h-screen relative flex-col flex`}>
     <Background/>
     <Navbar/> 
     <Home/>
     <Footer/>
    </section>
  )
}

export default Homepage
