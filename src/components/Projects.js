import projectPic from "../imgs/pr1.png";
import HTML from "../imgs/html.png";
import CSS from "../imgs/css.png";
import JS from "../imgs/js.png";
import REACT from "../imgs/react.png";
import "./projects.css";

function Projects() {
  return (
    <div id="projects">
      <h3 className="title-projects">Projects</h3>
      <div className="container">
        <a href="https://mypage-dean.netlify.app">
          <img className="project" src={projectPic} alt="project-1" />
        </a>
        <p>Languages</p>
        <div className="languages">
          <img src={HTML} alt="html" />
          <img src={CSS} alt="css" />
          <img src={JS} alt="javascript" />
          <img src={REACT} alt="react" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
