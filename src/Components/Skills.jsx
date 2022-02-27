import React from "react";
import "../Styles/Skills.scss";
const Skills = () => {
  return (
    <div className='main-skills' id='skills'>
      <div className='main-skills-container'>
        <div className='row title display-2'>SKILLS</div>

        <div className="skill-types">
          <div className="row skill-type">
            <div className="skill-title">&#8226; Website Development</div>
            <div className="row skills-details">

            <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/react-native.png"/></div>
                <span className="skill-name">ReactJS</span>
              </div>

              <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/nodejs.png"/></div>
                <span className="skill-name">NodeJS</span>
              </div>

              <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/mongodb.png"/></div>
                <span className="skill-name">Mongodb</span>
              </div>

              <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/javascript.png"/></div>
                <span className="skill-name">JS</span>
              </div>

              <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/sass.png"/></div>
                <span className="skill-name">Sass</span>
              </div>

              <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/html-5--v1.png"/></div>
                <span className="skill-name">HTML5</span>
              </div>

            </div>
            <div className="skill-title">&#8226; Programming</div>
            <div className="row skills-details">

            <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/python.png"/></div>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/java.png"/></div>
                <span className="skill-name">Java</span>
              </div>
              <div className="skill-detail col">
                <div className="skill-icon"><img className="icon" src="https://img.icons8.com/color/480/000000/c-plus-plus-logo.png"/></div>
                <span className="skill-name">C++</span>
              </div>


            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
