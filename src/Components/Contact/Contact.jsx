import React from 'react'
import './Contact.css'
import msg_icom from "../../assets/smsicon.png";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icom}/></h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul>
            <li>nkami@net</li>
            <li>22 222 222</li>
            <li>62 222 222</li>
            <li>Bujumbura Burundi Mukaza rohero I</li>
        </ul>
      </div> 
    </div>
  )
}

export default Contact