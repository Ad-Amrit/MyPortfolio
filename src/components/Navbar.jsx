import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <div className='logo'>
          <p className='name'>Amrit Adhikari</p>
        </div>
        <div className='events'>
            <Link to= "/" >Home</Link>
            <Link to= "/Projects" >Projects</Link>
            <Link to= "/Contact" >Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar