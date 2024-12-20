import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from "../../assets/d_right_arrow.png";
import backicon from "../../assets/d_left_arrow.png";
import user1 from "../../assets/p1.jpg";
import user2 from "../../assets/p1.jpg";
import user3 from "../../assets/p1.jpg";
import user4 from "../../assets/p1.jpg";
import user5 from "../../assets/p1.jpg";
import user6 from "../../assets/p1.jpg";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if(tx > -67){
            tx -= 17;
        }
        slider.current.style.transform = `translateX(${tx}%)` ;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 17;
        }
        slider.current.style.transform = `translateX(${tx}%)` ;
    }
  return (
    <div className='testimonials'>
        <img src={nexticon} className='next-btn' onClick={slideForward} />
        <img src={backicon} className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user1} />
                            <div>
                                <h3>Willian Jackson 1</h3>
                                <span>ULT, Bujumbura</span>
                            </div>
                        </div>
                         <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user2} />
                            <div>
                                <h3>Willian Jackson 2</h3>
                                <span>ULT, Bujumbura</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user3} />
                            <div>
                                <h3>Willian Jackson 3</h3>
                                <span>ULT, Bujumbura</span>
                            </div>
                        </div>
                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user4} />
                            <div>
                                <h3>Willian Jackson 4</h3>
                                <span>ULT, Bujumbura</span>
                            </div>
                        </div>
                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </li>


                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user5} />
                            <div>
                                <h3>Willian Jackson 5</h3>
                                <span>ULT, Bujumbura</span>
                            </div>
                        </div>
                        
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                    </div>
                </li>


                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user6} />
                            <div>
                                <h3>Willian Jackson 6</h3>
                                <span>ULT, Bujumbura</span>
                            </div>
                        </div>
                        
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials