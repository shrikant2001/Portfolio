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
            <div className="row about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur aliquam nesciunt voluptates qui temporibus rerum illo fugit aliquid eligendi fugiat excepturi, optio harum eveniet? Natus eaque consequatur sunt quos!</div>
            <div className="row about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur aliquam nesciunt voluptates qui temporibus rerum illo fugit aliquid eligendi fugiat excepturi, optio harum eveniet? Natus eaque consequatur sunt quos!</div>
        </div>
    </div>
  )
}

export default Main