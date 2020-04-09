import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'






const Login = (props) => {

  return (
    <>

    <div>
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>

    <Footer
      />
      
      </>

  );
}

export default Login;