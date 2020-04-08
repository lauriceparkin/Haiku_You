import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

function Home(props) {
  return (
    <>
      <div className="home">
        
        <Navbar />

        <h1>haiku.you.</h1>

        <p className="hometext">stuck inside all day? <br />get creative with haiku. <br />follow ancient path.</p>

      </div>

  

      <Footer />
      
      </>

  )
}



export default Home;