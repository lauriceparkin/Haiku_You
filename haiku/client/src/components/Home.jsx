import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Navbar from './shared/Navbar'

function Home(props) {
  return (
    <>
      <div className="home">
        
        <Navbar />

        <h1>haiku.you.</h1>

      </div>

      <div className="homebox">
        <p>There will be text here.</p>


      </div>




      <Footer />
      
      </>

  )
}





export default Home;