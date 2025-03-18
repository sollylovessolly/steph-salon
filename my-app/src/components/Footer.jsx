import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      <div className="contacts-container">
        <ul className="contacts">
          <li id="contact"><a href="http://">instagram</a></li>
          <li id="contact"><a href="https://t.me/your_channel_or_username" target="_blank" rel="noopener noreferrer">telegram</a></li>
          <li id="contact"><a href="http://">email</a></li>
        </ul>
      </div>
      <div className="location">
        <li>Covenant University, Canaanland, Ota, Ogun state</li>
      </div>
    </div>
    </>
  )
}

export default Footer