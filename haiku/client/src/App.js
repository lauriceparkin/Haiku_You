import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home'
import Learn from './components/Learn'
import Login from './components/Login'
import Register from './components/Register'
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

          {/* <Route
            path="/Login"
            component={Login}
          /> */}

        </main>

      </div>

    );
  }
}




export default App;