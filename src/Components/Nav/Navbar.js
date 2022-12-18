import React from "react"
import ReactDOM from "react-dom"
import "./Navbar.css"
import Home from "../Home/Home"
import Projects from "../Projects/Projects"

import Contact from "../Contact/Contact"

class Navbar extends React.Component {
  constructor(props){
    super(props);
  
  }
  
  
  
  render(){
    return(
      
      <div id="nav-container">
        <nav id="navbar">
        <span id='span-navbar'>04:20</span>
        <ul>
          <li className='li'>Home</li> 
          <li className='li'>Proyectos</li>
          <li className='li'>Contacto</li> 
        </ul>
      </nav>
      
      </div>
    );
  }
}

export default Navbar;