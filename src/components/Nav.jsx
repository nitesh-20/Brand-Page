import React from 'react'

const Nav = () => {
  return (
          <nav className='container'>
        <div className="logo">
          <img src="./brand_logo.png" alt="" />
        </div>
        <ul className='unorder'>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='btn'>Login</button>
      </nav>
  )
}

export default Nav