import React from 'react'
import '../startPage.css'
import AnimatedOwlClock from '../assets/AnimatedOwlClock.png'

const StartPage: React.FC = () => {
  return (
    <main className="startpage-root">
      <div className="setup-container">
        <div className="logo-wrap">
          <img src={AnimatedOwlClock} alt="Animated Owl Clock" />
        </div>
        <h1 className="welcome-heading">Welcome to Clockin!</h1>
      </div>

      <div className="item">
        <button className="arrow-button">
          Complete Setup
          <span className="arrow" />
        </button>
      </div>
    </main>
  )
}

export default StartPage
