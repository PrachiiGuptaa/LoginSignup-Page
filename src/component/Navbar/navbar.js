/* eslint-disable jsx-a11y/aria-role */
import React from 'react'
import { Link ,NavLink} from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
function Navbar() {
  return (
<section>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#"><svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
                <Link className="nav-link active"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/register">Register</NavLink>
              </li>
            </ul>
            <span className="d-flex" role="login"/>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active"  to="/login">Login</NavLink>
                </li>
                <Link to='/Login'>
                  <CgProfile className='fs-4 my-2'/>
                </Link>
       
      </ul>
    </div>
  </div>
</nav>



</section>
  )
}

export default Navbar
