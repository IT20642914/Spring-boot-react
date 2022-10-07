import React from 'react'
import {Link}  from 'react-router-dom';
function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div> <Link className="navbar-brand mb-0 h1"to="/">Employee Management App</Link></div>
  
       </nav>
    </div>
  )
}

export default Header
