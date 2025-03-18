import React from 'react'
import "../styles/Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className="hero-container">
        <div className="hero-text">
        <p>
        Welcome to Steph's Salon, Where Your Natural Hair is a Work of Art.
        We love making art. Let's create magic with your hair.
        </p>
        <Link to = "/ServicesPage">
        <button>View Services</button>
        </Link>
        </div>

    </div>
    </>
  )
}

export default Hero