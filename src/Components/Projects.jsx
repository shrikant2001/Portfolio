import React from 'react'
import '../Styles/Projects.scss'
import scorekeeper from '../Img/scorekeeper.jpg'

const Projects = () => {
  return (
    <div className='main-projects' id='project'>
      <div className='main-projects-container'>
        <div className='row title display-2'>PROJECTS</div>
        <div className="project-card">
        <div className="project-title">&#8226; SCORE-KEEPR <a className='link' href="https://score-it.vercel.app/">score-it.vercel.app</a> </div>
        <div className="project-desc">A mobile responsive score keeping site with custom score and team name features.</div> 
        <div ><img className="project-img" src={scorekeeper} alt="" /></div>
        </div>
        <div className="others">Others in progress...</div>
        
      </div>
    </div>
  )
}

export default Projects