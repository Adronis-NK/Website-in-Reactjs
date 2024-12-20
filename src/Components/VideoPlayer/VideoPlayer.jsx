import React from 'react'
import './VideoPlayer.css'
import amour from "../../assets/amour.mp4"
const VideoPlayer = () => {
  return (
    <div className='video-player hide'>
        <video src={amour} autoPlay controls />
    </div>
  )
}

export default VideoPlayer