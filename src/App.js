import React from "react"
import './App.css';
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Nav/Navbar"
import Home from "./Components/Home/Home" 
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"


/*Componente App*/

class App extends React.Component{
  
  render(){
    return (
      <div id="principal">
        <Navbar />
        <div id='container'>
          <Home/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
        
      </div>
    );
  }
}



export default App
