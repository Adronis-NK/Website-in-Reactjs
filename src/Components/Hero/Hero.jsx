import React from 'react'
import './Hero.css'
import  arrow_right  from "../../assets/arrow_right.png";

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Some Titles in this test app</h1>
        <p>Je suis un LLM entraîné pour répondre dans quelques 
            langues uniquement, je ne peux donc pas vous aider pour le momen
        </p>
        <button className='btn'>Explore more <img src={arrow_right} /></button>
      </div>
    </div>
  )
}

export default Hero
