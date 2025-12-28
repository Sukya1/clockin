import React from 'react'
import { Link } from 'react-router'
import '../stylesheets/StartPage.css'
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
        <Link to="/setup" className="arrow-button" role="button">
          Complete Setup
          <span className="arrow" />
        </Link>
      </div>
    </main>
  )
}

export default StartPage
