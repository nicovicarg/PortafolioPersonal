import React from "react";
import "./Projects.css";

class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {
          photo: "Foto 1",
          title : "Proyecto 1",
        },
        {
          photo: "Foto 2",
          title : "Proyecto 2",
        },
        {
          photo: "Foto 3",
          title : "Proyecto 3",
        },
        {
          photo: "Foto 4",
          title : "Proyecto 4",
        }
      ]
    }
  }
  render(){
    return(
      <div id="projects-container">
        {this.state.projects.map(element=>{
      return (
      <div className="projects-square">
        <div className="projects-photo">{element.photo}</div>
        <div className="projects-title">{element.title}</div>
      </div>)
    })}
      </div>
    );
  }
}


export default Projects
