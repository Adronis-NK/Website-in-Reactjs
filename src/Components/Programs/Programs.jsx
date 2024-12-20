import React from 'react'
import './Programs.css'
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";

import IconVision from "../../assets/IconVision.png";

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program1}/>
        <div className='caption'>
            <img src={IconVision} />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2}/>
        <div className='caption'>
            <img src={IconVision} />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3}/>
        <div className='caption'>
            <img src={IconVision} />
            <p>Post Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
