import React from 'react'
import './Campus.css'
import pic1 from '../../assets/program1.jpg'
import pic2 from '../../assets/program2.jpg'
import pic3 from '../../assets/program3.jpg'
import pic4 from '../../assets/profilpic.jpg'
import arrow_right from '../../assets/arrow_right.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={pic1} />
            <img src={pic2} />
            <img src={pic3} />
            <img src={pic4} />
        </div>
        <button className='btn dark-btn'>See more here <img src={arrow_right} /></button>
    </div>
  )
}

export default Campus