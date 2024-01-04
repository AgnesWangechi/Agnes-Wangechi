import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import OtherProjects from './Components/Other Projects/OtherProjects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <OtherProjects/>
      
      </div>
    );
  }
}

export default App;
