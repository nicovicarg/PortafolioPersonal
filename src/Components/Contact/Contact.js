import React from "react"
import "./Contact.css"

class Contact extends React.Component {
  render(){
    return (
      <div id='contact-container'>
        <div id="mensaje-contact">Ya dame el maldito trabajo XD</div>
        <div id='redes'>
          <a className="anchor">
            <i class="fab fa-facebook-square fa-2x"></i>
            <p>Facebook</p>
          </a>
          <a  className="anchor">
            <i class="fab fa-github fa-2x"></i>
            <p>Github</p>
          </a>
          <a className="anchor">
            <i class="fab fa-twitter fa-2x"></i>
            <p>Twitter</p>
          </a>
          <a className="anchor">
            <i class="fas fa-at fa-2x"></i>
            <p>E-mail</p>
          </a>
        </div>
        
      </div>
    );
  }
}

export default Contact