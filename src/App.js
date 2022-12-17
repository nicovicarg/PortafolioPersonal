import React from "react"
import './App.css';
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Nav/Navbar";
import Contact from "./Components/Contact/Contact"


/*Componente App*/

class App extends React.Component{
  
  render(){
    return (
      <div id="principal">
         <Navbar />
         <div id='container'>
          <Contact />
         </div>
         <Footer />
      </div>
    );
  }
}



export default App
