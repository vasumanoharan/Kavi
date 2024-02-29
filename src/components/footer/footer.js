import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <ul style={{display:'flex',justifyContent:'space-around',listStyle:'none',padding:'20px',backgroundImage:'linear-gradient(to right, red , yellow)'}}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Services</li>
    </ul>
  )
}

export default Footer
