import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, withRouter } from 'react-router-dom';
import Home from './components/Home'
import Learn from './components/Learn'
import Login from './components/Login'
import Register from './components/Register'
import Post from './components/Post'
import View from './components/View'
import './App.css';
import IndivHaiku from './components/IndivHaiku'
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
      username: "",
      email: "",
      password: ""
    },
    currentUser: null

  }


  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authformData);
    this.setState({ currentUser })
    this.props.history.push("/Post")
  }


  handleLogin = async (e) => {
    e.preventDefault();
    console.log("am I here")
    const currentUser = await loginUser(this.state.authformData);
    this.setState({ currentUser })
    this.props.history.push("/View")
  }


  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      console.log("testing 123")
      this.setState({ currentUser })
    }
    console.log('test')
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

  componentDidMount = async () => {
    await this.handleVerify()
  }



  render() {
    return (
      <div>

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


        <Route exact path="/Post" render={() => (
          <Post
            handleSubmit={this.handleSubmit}
            currentUser={this.state.currentUser}
          />)}
        />

        <Route 
          
          path="/View"
          render={() => (
            <View/>
          )}

        />

        <Route
          path="/full_haiku/:id"
          render={(props) => (
            <IndivHaiku
              id={props.match.params.id}
              currentUser={this.state.currentUser}
            />
          )}
          
          />

      </div>

    );
  }
}



export default withRouter(App);