import React from 'react'
import "./header.css"; 
import { Link, NavLink } from 'react-router-dom';
function header() {
  const call = (e) =>{
    {alert(" guest user page will be uploaded soon")};
  }
  return (
    <div className="cont">
      <Link className='logo1' to="/">
        <img className='logoImage' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" />
      </Link>
       <div className='Info1'>
            <NavLink className="navlink" to="/">
               Home
            </NavLink>
            <NavLink className="navlink" to="/about">
               About
            </NavLink>
            <NavLink className="navlink" to="/contect">
               Contect
            </NavLink>
            <NavLink className="navlink" to="/github">
               Github
            </NavLink>
       </div>
       <div className="logIn">
         <Link className='link' to="login" >
         Log in
         </Link>
         <button className='getStart' onClick={call}>Get started</button>
       </div>
    </div>
  )
}

export default header