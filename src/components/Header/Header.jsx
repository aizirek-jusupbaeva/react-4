import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
     <div className='header'>
			 <div className="container">
					<Link to="/" className="header_link-logo"><img className='img-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png' alt="" /></Link>
					<div className="header_link">
						<Link to="about" className="header_link-item">About</Link>
						<Link to="mans" className="header_link-item">Mans</Link>
						<Link to="womans" className="header_link-item">Womans</Link>
					</div>
			 </div>
		</div>
  );
}

export default Header;
