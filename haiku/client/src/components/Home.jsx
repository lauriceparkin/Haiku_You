import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './shared/Navbar'

function Home(props) {
  return (
    <>
      <div className="home">
        
        <Navbar />

        <h1>haiku.you.</h1>

    
          <div className = "hometext">
          <Link style={{ textDecoration: 'none' }} to="/Learn" className="hometext">stuck inside all day? <br />get creative with haiku. <br />click to find your zen.</Link>
          </div>
    
      </div>
      
      </>
  )
}


export default Home;