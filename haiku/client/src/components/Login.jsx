import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'



class Login extends Component {


  render() {
    return (
      <>
        <div className="login">

          <Navbar />


          <h2>Login</h2>


          <form onSubmit={this.props.handleLogin} >
            <label htmlFor="email">
              email:
            </label>


            <input name="email" id="email" type="text" value={this.props.formData.email} onChange={this.props.handleChange} />

            <label htmlFor="password">
              password:
            </label>

            <input name="password" id="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
            <button>Login</button>


          </form>
        </div>

        <Footer
        />


      </>
    );
  }
}


export default Login;