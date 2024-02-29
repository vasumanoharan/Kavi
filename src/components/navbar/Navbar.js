import React from 'react'
import './Navbar.css'
import img1 from '../images/pp3.jpg'
const Navbar = () => {
  return (
    <div>
      <ul className='nav_head' style={{padding:'10px',marginRight:'20px',backgroundImage:'linear-gradient(to right, red , yellow)'}}>
        <li><img src={img1} style={{ width: '5%', borderRadius: '50%' }}></img></li>
        <li style={{ marginLeft: '-150%',position:'relative' }}><h1>KAVI..</h1></li>
        <div style={{position:'relative',left:'-500px'}}>
          <h1 style={{cursor:'pointer'}}>All videos</h1>
        </div>
        
      </ul>
    </div>
  )
}

export default Navbar
