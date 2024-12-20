import React from 'react'
import './About.css'
import aboutimg from "../../assets/program1.jpg";
import playicon from "../../assets/play-circle-svgrepo-com.png"

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={aboutimg} className='about-img'/>
        <img src={playicon} className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing tomorrow's Leaders Today</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ligula eu pellentesque ullamcorper, risus ipsum lobortis ipsum, eu dapibus elit lectus eu nunc.
        </p>
        <p>
             Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus nec commodo nulla. Aliquam erat volutpat. Maecenas ut augue euismod, efficitur ligula id, egestas magna. Nunc fringilla ligula eget aliquet lacinia.
        </p>
        <p>
            aesent mollis semper purus, nec consequat leo hendrerit sed. Sed hendrerit lobortis efficitur. Nam quis risus vitae velit accumsan tristique eget quis dolor. Donec tempus quam ac volutpat ultrices. Nam hendrerit, mauris eu efficitur finibus, quam dui bibendum purus, sit amet commodo libero ligula at erat.
        </p>
      </div>
    </div>
  )
}

export default About
