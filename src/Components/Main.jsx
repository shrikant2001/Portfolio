import React from 'react'
import '../Styles/Main.scss'
import me from '../Img/me.jpg'

const Main = () => {
  return (
    <div className="main grad-container-mains">
        <div className="container main-container">
            <div className="row">
                <div className="col my-name ">SHRIKANT<br></br>JADHAV</div>
                {/* my pic */}
                <div className="col col-center ">
                    <div className="img-container">
                        <img className='me' src={me} alt="" />
                    </div>
                </div>
            </div>

            <div className="row about-me">
                Hi 👋 !! I am a full-time learner and a computer science under-graduate at Indian Institute of Information Technology , Pune.
            </div>
        </div>
    </div>
  )
}

export default Main