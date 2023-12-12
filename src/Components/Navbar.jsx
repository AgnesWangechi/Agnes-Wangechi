import "./Navbar.css"
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav id="navbar">
            <a href="index.html" class="logo">AW</a>
            <div id="nav-items">
                <ul>
                    <li><a href="index.html">AboutMe</a></li>
                    <li><a href="index.html">Experience</a></li>
                    <li><a href="index.html">Projects</a></li>
                    <li><a href="index.html">Contact</a></li>
                </ul>
            </div>
            <button><a href="index.html">Resume</a></button>
        </nav>
    </div>
  )
}

export default Navbar