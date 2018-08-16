import React, { Component } from 'react';
import './Component/Header.css';
import './App.css';
import './Component/Loginform.css';
import Header from './Component/Header';
import AppRouter from './Component/AppRouter'


class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <Header></Header>
        <AppRouter></AppRouter>

      </div>
    );
  }
}

export default App;
                          