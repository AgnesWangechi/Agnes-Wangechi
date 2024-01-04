import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
      
      </div>
    );
  }
}

export default App;
