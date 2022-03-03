import React from 'react'
import '../Styles/Exp.scss'

const Exp = () => {
  return (
    <div className='main-exp ' id='exp'>
      <div className='main-exp-container'>
        <div className='row title display-2'>EXPERIENCE</div>
        <hr />
        <div className="exp-title text-left display-6">&#8226; Academic</div>
          <ul className='exp-list'>
            <li><b>CGPA :</b> 8.5</li>
            <li><b>Google Hashcode 2022 :</b> AIR 746 , Global rank 2330</li>
            <li><b>Codechef :</b> Max ratinng 1888 (4 star)</li>
            <li><b>Hackerrank :</b> 5 star (Python Problem Solving)</li>
          </ul>
        <hr />
        <div className="exp-title text-left display-6">&#8226; Professional</div>
        <div className='exp'>
            <img className='temp' src="https://media3.giphy.com/media/WmMp1qmKaKuHPfCq3a/giphy.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Exp