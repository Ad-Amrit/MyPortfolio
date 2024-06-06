import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='logo'>
          <p className='name'>Er. Amrit Adhikari</p>
        </div>
        <div className='events'>
            <Link to= "/" >Home</Link>
            <Link to= "/Projects" >Projects</Link>
            <Link to= "/Contact" >Contact</Link>
            <Link to= "/Posts">Posts</Link>
        </div>
    </div>
  )
}

export default Navbar