import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (

  //pass user data 

  <nav>
    <Link to='./Register'><h4 className="links">register</h4></Link>
    <Link to='./Login'><h4 className="links">login</h4></Link>
  </nav>


)

export default Navbar