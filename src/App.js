import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
      
      </div>
    );
  }
}

export default App;
