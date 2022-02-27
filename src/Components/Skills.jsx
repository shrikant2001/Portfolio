import React from "react";
import "../Styles/Skills.scss";
const Skills = () => {
  return (
    <div className='main-skills'>
      <div className='main-skills-container'>
        <div className='row title display-2'>SKILLS</div>

        <div className='row skills'>
            <div className="skill-container row">
                <div className="skill-type ">Website Development</div>
                <div className="skill-stack"> html css jsavascript Reactjs MERN</div>
            </div>
            <div className="skill-container row">
                <div className="skill-type ">Programming</div>
                <div className="skill-stack"> Python c++ Java Swift Javascript</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
