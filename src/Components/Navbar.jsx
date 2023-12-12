import "./Navbar.css"
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav id="navbar">
            <a href="index.html" class="logo">AW</a>
            <div>
                <ul>
                    <li><a href="index.html">AboutMe</a></li>
                    <li><a href="index.html">Experience</a></li>
                    <li><a href="index.html">Projects</a></li>
                    <li><a href="index.html">Contact</a></li>
                    <button><a href="index.html">Resume</a></button>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar