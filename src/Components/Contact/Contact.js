import React from "react"
import "./Contact.css"

class Contact extends React.Component {
  render(){
    return (
      <div id='contact-container'>
        <div id="mensaje-contact">Ya dame el maldito trabajo XD</div>
        <div id='redes'>
          <a>
            <i class="fab fa-facebook-square fa-2x"></i>
            Facebook
          </a>
          <a>
            <i class="fab fa-github fa-2x"></i>
            Github
          </a>
          <a>
            <i class="fab fa-twitter fa-2x"></i>
            Twitter
          </a>
          <a>
            <i class="fas fa-at fa-2x"></i>
            E-mail
          </a>
        </div>
        
      </div>
    );
  }
}

export default Contact