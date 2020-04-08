import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

function Learn(props) {
  return (
    <>
      <div className="learn">

        <Navbar />

        <h1>haiku.you.</h1>

        <Link style={{ textDecoration: 'none' }} to="/Learn"><p className="hometext">stuck inside all day? <br />get creative with haiku. <br />click to find your zen.</p></Link>

      </div>

      <div className="blocktext">



        
      </div>



      <Footer />

    </>

  )
}



export default Learn;