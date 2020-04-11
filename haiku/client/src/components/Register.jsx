import React, { Component } from 'react'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'



class Register extends Component {



  render() {
    return (
      <>
        <div className = "register">

        <Navbar />

          

          <div className="formbox">

          <h2>register</h2>

          <form onSubmit={this.props.handleRegister} >
            <label htmlFor="email">
              email:
            </label>
            
            <input name="email" id="email" type="text" value={this.props.formData.email} onChange={this.props.handleChange} />
            <label htmlFor="password">
              password:
            </label>

            <input name="password" id="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
            <button>Register</button>


          </form>
        </div>
        
        </div>

        <Footer
        />


      </>
    );
  }
}


    export default Register;