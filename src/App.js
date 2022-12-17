import React from "react"
import './App.css';
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Nav/Navbar";
import Curriculum from "./Components/Curriculum/Curriculum"


/*Componente App*/

class App extends React.Component{
  
  render(){
    return (
      <div id="principal">
         <Navbar />
         <div id='container'>
          <Curriculum />
         </div>
         <Footer />
      </div>
    );
  }
}



export default App