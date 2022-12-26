import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div>
      <header>
        <div className="nav container">
          <div style={{display:'flex'}}>
            <a href="index.html" className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" /></a>
          </div>

          <ul className="nav-list">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/" className="nav-link">Trends</a></li>
            <li><a href="/" className="nav-link">Movies</a></li>
            <li><a href="/" className="nav-link">Series</a></li>
            <i className='bx bxs-bell' />
            <div className="avatar">
              <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
              <h2>Hey, Anzz <i className='bx bx-chevron-down' /></h2>
            </div>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Nav
