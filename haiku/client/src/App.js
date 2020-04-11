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
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser
} from './services/apihelper';
// import axios from 'axios';



class App extends Component {
  state = {
    authformData: {
      email: "",
      password: ""
    }
  }


  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authformData);
    this.setState({ currentUser })
  }


  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authformData);
    this.setState({ currentUser })
  }


  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authformData: {
        ...prevState.authformData,
        [name]: value
      }
    }));
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
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
              formData={this.state.authformData} />)}
          />


          <Route exact path="/login" render={() => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authformData} />)}
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