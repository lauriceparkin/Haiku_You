import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home'
import Learn from './components/Learn'
import Login from './components/Login'
import Register from './components/Register'
import Post from './components/Post'
import View from './components/View'
import './App.css';
// import axios from 'axios';



class App extends Component {
  state = {
    formData: {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div>

        <main>
          <Route
            exact path="/"
            component={Home}
          />

          <Route
            path="/Learn"
            component={Learn}
          />

          <Route exact path="/register" render={() => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.formData} />)}
          />


          <Route exact path="/login" render={() => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.formData} />)}
          />

          <Route
            path="/Post"
            component={Post}
          />

          <Route
            path="/View"
            component={View}
          />


        </main>

      </div>

    );
  }
}




export default App;