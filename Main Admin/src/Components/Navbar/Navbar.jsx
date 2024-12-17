import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const Image="https://th.bing.com/th/id/OIP.KLTEcyOp9mQGsfyPoJI2KwAAAA?w=400&h=400&rs=1&pid=ImgDetMain";
  return (
    <div className='navbar'>
      <Link to="/" style={{textDecoration:'none'}}>
      <h2 style={{fontStyle:'italic'}}>GrabCarts</h2>
      </Link>
      <div className='nav-profile'>
        <img src={Image} alt=""  className="nav-logo"/>
      </div>
    </div>
  )
}

export default Navbar
