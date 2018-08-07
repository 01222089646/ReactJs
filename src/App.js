import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Component/LoginForm'
import Header from './Component/Header'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default App;
